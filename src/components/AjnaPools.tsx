import { Box, Flex, Text } from "@radix-ui/themes";
import { useMemo } from "react";
import { type Address, parseAbiItem } from "viem";
import { serialize } from "wagmi";
import { useInfiniteContractLogs } from "../hooks/useInfiniteContractLogs";

const ajna_factory: Address = "0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625";
const ajna_factory_deploy_block = 18962313n;
const page_size = 100000n;

export function AjnaPools() {
  const pools_query = useInfiniteContractLogs({
    address: ajna_factory,
    event: parseAbiItem("event PoolCreated(address pool, bytes32 subsetHash)"),
    start_block: ajna_factory_deploy_block,
    page_size: page_size,
  });

  const pools = useMemo(() => pools_query.data?.map((log) => log.args.pool), [pools_query.data]);

  return (
    <Flex direction="column" gap="2">
      <Box>
        {pools_query.isFetching || pools_query.hasNextPage ? (
          <Text color="blue">
            fetching ajna pools, found {pools_query.data?.length ?? "no"} pools
          </Text>
        ) : (
          <Text color="green">loaded {pools_query.data?.length} ajna pools</Text>
        )}
      </Box>
      <Text size="1">{serialize(pools)}</Text>
    </Flex>
  );
}
