import { Box, Flex, Strong, Text } from "@radix-ui/themes";
import { useMemo } from "react";
import {
  type Address,
  type Log,
  erc20Abi,
  erc20Abi_bytes32,
  fromHex,
  getAddress,
  parseAbi,
  parseAbiItem,
} from "viem";
import { serialize, useReadContracts } from "wagmi";
import { erc20PoolAbi, useReadErc20PoolFactoryGetDeployedPoolsList } from "../generated";
import { useInfiniteContractLogs } from "../hooks/useInfiniteContractLogs";

const ajna_factory: Address = "0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625";
const ajna_factory_deploy_block = 18962313n;
const page_size = 100000n;

const abi_overrides = {
  "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2": erc20Abi_bytes32, // MKR
};
const event_colors = {
  Kick: "red",
  KickReserveAuction: "red",
  Take: "cyan",
  Settle: "green",
  AuctionSettle: "green",
  ReserveAuction: "green",
};

export function ContractEvent({ log }: { log: Log }) {
  const args = [];
  for (const [key, val] of Object.entries(log.args)) {
    const value = typeof val === "bigint" ? val.toString() : serialize(val);
    args.push(`${key}=${value}`);
  }
  return (
    <Flex as="p" gap="2">
      <Text
        size="1"
        color="gray"
        as="span"
        style={{ fontFamily: "Aeonik Mono", minWidth: "6rem", display: "inline-block" }}
      >
        {log.blockNumber?.toString()}/{log.logIndex?.toString()}
      </Text>
      <Text size="1" color={event_colors[log.eventName]} as="span">
        <Strong>{log.eventName}</Strong>
      </Text>
      <Text size="1" as="span">
        {args.join(", ")}
      </Text>
    </Flex>
  );
}

export function AjnaPool({ pool, name, kicks }) {
  return (
    <Box>
      <Text size="1">
        {pool} {name}
      </Text>
      {kicks && (
        <Box ml="4">
          {kicks.map((log) => (
            <ContractEvent key={`log-${log.blockNumber}-${log.logIndex}`} log={log} />
            // <Text size="1" color="red" as="p" key={`log-${log.blockNumber}-${log.logIndex}`}>
            //   block={log.blockNumber.toString()} borrower={log.args.borrower}
            // </Text>
          ))}
        </Box>
      )}
    </Box>
  );
}

export function AjnaPools() {
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
    events: parseAbi([
      "event Kick(address indexed borrower, uint256 debt, uint256 collateral, uint256 bond)",
      "event Take(address indexed borrower, uint256 amount, uint256 collateral, uint256 bondChange, bool isReward)",
      "event Settle(address indexed borrower, uint256 settledDebt)",
      "event AuctionSettle(address indexed borrower, uint256 collateral)",
      "event KickReserveAuction(uint256 claimableReservesRemaining, uint256 auctionPrice, uint256 currentBurnEpoch)",
      "event ReserveAuction(uint256 claimableReservesRemaining, uint256 auctionPrice, uint256 currentBurnEpoch)",
    ]),
    page_size: page_size,
    enabled: pools_query.isSuccess,
  });

  const pool_events = useMemo(() => {
    if (!pool_events_query.isSuccess) return;
    const kicks: Record<Address, Log[]> = {};
    for (const log of pool_events_query.data) {
      const key = getAddress(log.address); // fix checksum
      if (!(key in kicks)) kicks[key] = [];
      kicks[key].push(log);
    }
    return kicks;
  }, [pool_events_query.data]);

  return (
    <Flex direction="column" gap="2">
      <Box>
        {pools_query.isPending ? (
          <Text color="blue">fetching {pools_query.data?.length} ajna pools</Text>
        ) : (
          <Text color="green">loaded {pools_query.data?.length} ajna pools</Text>
        )}
        {pool_tokens_query.isPending && <Text color="blue"> / fetching pool tokens</Text>}
        {pool_tokens_symbols.isPending && <Text color="blue"> / fetching pool names</Text>}
        {pool_events_query.isFetching && <Text color="blue"> / fetching kicks</Text>}
      </Box>
      {pool_names &&
        pools_query?.data.map((pool) => (
          <AjnaPool
            key={pool}
            pool={pool}
            name={pool_names[pool]}
            kicks={pool_events && pool_events[pool]}
          />
        ))}
    </Flex>
  );
}
