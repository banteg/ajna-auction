import { Box, Flex, Text } from "@radix-ui/themes";
import { useMemo } from "react";
import { type Address, erc20Abi, erc20Abi_bytes32, fromHex } from "viem";
import { serialize, useReadContracts } from "wagmi";
import { erc20PoolAbi, useReadErc20PoolFactoryGetDeployedPoolsList } from "../generated";

const ajna_factory: Address = "0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625";
const ajna_factory_deploy_block = 18962313n;
const page_size = 100000n;

const abi_overrides = {
  "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2": erc20Abi_bytes32,
};

export function AjnaPools() {
  const pools_query = useReadErc20PoolFactoryGetDeployedPoolsList();

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

  return (
    <Flex direction="column" gap="2">
      <Box>
        {pools_query.isPending ? (
          <Text color="blue">fetching {pools_query.data?.length ?? "?"} ajna pools</Text>
        ) : (
          <Text color="green">loaded {pools_query.data?.length} ajna pools</Text>
        )}
        {pool_tokens_query.isPending && <Text color="blue"> / fetching pool tokens</Text>}
        {pool_tokens_symbols.isPending && <Text color="blue"> / fetching pool names</Text>}
      </Box>
      {pool_names &&
        pools_query?.data.map((pool) => (
          <Text size="1">
            {pool} {pool_names[pool]}
          </Text>
        ))}
    </Flex>
  );
}
