import { Box, Flex, Separator, Text } from "@radix-ui/themes";
import { Command } from "cmdk";
import { Children, useEffect, useMemo, useState } from "react";
import { type Address, type Log, erc20Abi, erc20Abi_bytes32, fromHex, getAddress } from "viem";
import { useReadContracts } from "wagmi";
import { get_auction_data } from "../ajna";
import { find_auctions_v2 } from "../ajna/auctions";
import { erc20PoolAbi, useReadErc20PoolFactoryGetDeployedPoolsList } from "../generated";
import { useInfiniteContractLogs } from "../hooks/useInfiniteContractLogs";
import { format_wei } from "../utils";
import { AjnaAuctionDetails } from "./AjnaAuction";
import { Chart } from "./Chart";
import { PoolEvent } from "./PoolEvent";

const ajna_factory: Address = "0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625";
const ajna_factory_deploy_block = 18962313n;
const page_size = 100000n;

const ajna_pool_events = erc20PoolAbi.filter((abi) => abi.type === "event");

const abi_overrides = {
  "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2": erc20Abi_bytes32, // MKR
};
export function AjnaInterestChart({ logs }) {
  const data = logs?.map((log) => ({
    x: Number.parseInt(log.blockNumber),
    y: Number.parseFloat(format_wei(log.args.newRate, 16)),
  }));
  if (!data) return;
  return (
    <Box>
      <Text>interest rate</Text>
      <Chart data={data} />
    </Box>
  );
}

export function AjnaPool({ pool, name, events }) {
  const update_interest_rate = events?.filter((log) => log.eventName === "UpdateInterestRate");
  const auction_data = get_auction_data(events);

  return (
    <Flex direction="column" gap="4">
      <Flex gap="4" align="baseline">
        <Text size="5">{name}</Text>
        <Text size="2">{pool}</Text>
      </Flex>
      {/* <AjnaInterestChart logs={update_interest_rate} /> */}
      <Text>auction data</Text>
      {Object.entries(auction_data ?? {}).map(([key, val]) => (
        <AjnaAuctionDetails
          pool={pool}
          borrower={key}
          logs={val}
          key={`auction-details-${pool}-${key}`}
        />
      ))}
      <Text size="3">all pool events</Text>
      {events && <Box>{Children.toArray(events.map((log) => <PoolEvent log={log} />))}</Box>}
    </Flex>
  );
}

export function AjnaPoolSelect({ pools, names, selected, on_select }) {
  const [open, set_open] = useState(false);
  const [input_value, set_input_value] = useState("");

  return (
    <div className="raycast">
      <Command
        open={open}
        value={selected ?? ""}
        onValueChange={on_select}
        onInput={() => set_open(true)}
        onFocus={() => set_open(true)}
        onBlur={() => set_open(false)}
        onKeyDown={(e) => {
          if (e.key === "Enter") set_open(false);
        }}
      >
        <Command.Input
          // autoFocus={true}
          placeholder="select pool"
          value={input_value}
          onValueChange={set_input_value}
        />
        {open && <Separator size="4" mt="2" />}
        {open && (
          <Command.List>
            {!names && <Command.Loading>loading pools</Command.Loading>}
            <Command.Empty>no pools found</Command.Empty>
            {pools?.map((pool) => (
              <Command.Item
                key={`select-${pool}`}
                value={pool}
                keywords={[pool, names[pool].toLowerCase()]}
                onSelect={(pool) => set_open(false)}
              >
                {names[pool]}{" "}
                <Text size="1" color="gray">
                  {pool}
                </Text>
              </Command.Item>
            ))}
          </Command.List>
        )}
      </Command>
    </div>
  );
}

export function AjnaPools() {
  const [selected_pool, set_selected_pool] = useState("0x07AAA9e40323A85e763a5b2eB9d8cA7ebAf7FB5A");

  // 1. get a list of all pools from the factory
  const pools_query = useReadErc20PoolFactoryGetDeployedPoolsList();

  // 2. read collateral address and quote token address form each pool
  const pool_tokens_query = useReadContracts({
    contracts: pools_query.data
      ?.map((pool) => ({
        abi: erc20PoolAbi,
        address: pool,
        functionName: "collateralAddress",
      }))
      .concat(
        pools_query.data?.map((pool) => ({
          abi: erc20PoolAbi,
          address: pool,
          functionName: "quoteTokenAddress",
        })),
      ),
    allowFailure: false,
    query: { enabled: pools_query.isSuccess },
  });

  const collateral_addrs: Address[] = pool_tokens_query.data?.slice(0, pools_query.data?.length);
  const quote_token_addrs: Address[] = pool_tokens_query.data?.slice(pools_query.data?.length);
  const tokens_mentioned: Address[] = Array.from(new Set(pool_tokens_query.data)).sort();

  // 3. read token symbols of each token used as a collateral or a quote token
  const pool_tokens_symbols = useReadContracts({
    contracts: tokens_mentioned.map((token: Address) => ({
      address: token,
      abi: abi_overrides[token] ?? erc20Abi,
      functionName: "symbol",
    })),
    allowFailure: false,
    query: { enabled: pool_tokens_query.isSuccess },
  });

  const token_symbols = useMemo(() => {
    if (!pool_tokens_symbols.isSuccess) return;
    return tokens_mentioned.entries().reduce((acc, val) => {
      const [i, token] = val;
      let name = pool_tokens_symbols.data[i];
      if (abi_overrides[token]) name = fromHex(name, "string");
      return Object.assign(acc, { [token]: name });
    }, {});
  }, [pool_tokens_query]);

  const pool_names = useMemo(() => {
    if (!pool_tokens_symbols.isSuccess) return;
    return pools_query.data?.entries().reduce((acc, val) => {
      const [i, pool] = val;
      const collateral = collateral_addrs[i];
      const quote_token = quote_token_addrs[i];
      const name = `${token_symbols[collateral]}/${token_symbols[quote_token]}`;
      return Object.assign(acc, { [pool]: name });
    }, {});
  }, [pools_query, pool_tokens_query]);

  // 4. read all kick (auction start) events from all pools
  const pool_events_query = useInfiniteContractLogs({
    address: pools_query.data ?? [],
    start_block: ajna_factory_deploy_block,
    events: ajna_pool_events,
    page_size: page_size,
    enabled: pools_query.isSuccess,
  });

  const pool_events = useMemo(() => {
    if (!pool_events_query.isSuccess) return;
    const events: Record<Address, Log[]> = {};
    for (const log of pool_events_query.data) {
      const key = getAddress(log.address); // fix checksum
      if (!(key in events)) events[key] = [];
      events[key].push(log);
    }
    return events;
  }, [pool_events_query.data]);

  useEffect(() => {
    const { ended_auctions, active_auctions } = find_auctions_v2(pool_events_query.data);
    console.log(ended_auctions.length, active_auctions.length);
  }, [pool_events_query.isSuccess]);

  return (
    <Flex direction="column" gap="4">
      <Box>
        {pools_query.isPending ? (
          <Text color="blue">fetching {pools_query.data?.length} ajna pools</Text>
        ) : (
          <Text color="green">loaded {pools_query.data?.length} ajna pools</Text>
        )}
        {pool_tokens_query.isPending && <Text color="blue"> / fetching pool tokens</Text>}
        {pool_tokens_symbols.isPending && <Text color="blue"> / fetching pool names</Text>}
        {pool_events_query.isFetching ? (
          <Text color="blue"> / fetching pool events</Text>
        ) : (
          <Text color="green"> / fetched {pool_events_query.data?.length} pool events</Text>
        )}
      </Box>
      {pool_names && (
        <AjnaPoolSelect
          pools={pools_query.data}
          names={pool_names}
          selected={selected_pool}
          on_select={set_selected_pool}
        />
      )}
      {pool_names && selected_pool && (
        <AjnaPool
          pool={selected_pool}
          name={pool_names[selected_pool]}
          events={pool_events && pool_events[selected_pool]}
        />
      )}
    </Flex>
  );
}
