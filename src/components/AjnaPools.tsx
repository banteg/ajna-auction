import { Box, Button, Code, Flex, Grid, Strong, Text } from "@radix-ui/themes";
import { useInfiniteQuery, useQuery, useQueryClient } from "@tanstack/react-query";
import { getBlockNumber } from "@wagmi/core";
import { useEffect, useState } from "react";
import { type Address, parseAbiItem } from "viem";
import { getLogs } from "viem/actions";
import { useBlockNumber } from "wagmi";
import { useWatchErc20PoolFactoryPoolCreatedEvent } from "../generated";
import { config } from "../wagmi";

const ajna_factory: Address = "0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625";

interface PageParam {
  from_block: bigint;
  to_block: bigint;
}

export function AjnaPools() {
  const page_size = 100000n;
  const start_block = 18962313n;
  const { data: end_block_static } = useBlockNumber(); // static block for pools

  async function fetch_logs({ pageParam }: { pageParam: PageParam }) {
    // fetches PoolCreated and extracts a list of pools
    console.log("fetch page", pageParam, "size", pageParam.to_block - pageParam.from_block + 1n);
    return getLogs(config.getClient(), {
      address: ajna_factory,
      event: parseAbiItem("event PoolCreated(address pool, bytes32 subsetHash)"),
      fromBlock: pageParam.from_block,
      toBlock: pageParam.to_block,
    });
  }

  const pools_query = useInfiniteQuery({
    queryKey: ["ajna_pools_dev_2", ajna_factory],
    queryFn: fetch_logs,
    initialPageParam: { from_block: start_block, to_block: start_block + page_size - 1n },
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      if (!end_block_static) return undefined;
      const next_page: PageParam = {
        from_block: lastPageParam.to_block + 1n,
        to_block: lastPageParam.to_block + page_size,
      };
      if (next_page.from_block > end_block_static) return null;
      if (next_page.to_block > end_block_static) next_page.to_block = end_block_static;
      return next_page;
    },
    select: (data) => ({
      num_pages: data.pages.length,
      pools: data.pages.flat().map((log) => log.args.pool),
      deploy_blocks: data.pages
        .flat()
        .reduce((acc, log) => ({ ...acc, [log.args.pool]: Number.parseInt(log.blockNumber) }), {}),
    }),
    staleTime: Number.POSITIVE_INFINITY,
  });

  useEffect(() => {
    if (pools_query.isFetching) return;
    if (pools_query.hasNextPage) pools_query.fetchNextPage();
  }, [pools_query.data?.num_pages, end_block_static]);

  return (
    <Flex direction="column" gap="2">
      <Box>
        {pools_query.isFetching || pools_query.hasNextPage ? (
          <Text color="blue">fetching ajna pools, found {pools_query.data?.pools?.length ?? "no"} pools</Text>
        ) : (
          <Text color="green">loaded {pools_query.data?.pools?.length} ajna pools</Text>
        )}
      </Box>
      <Text size="1">{JSON.stringify(pools_query.data?.pools)}</Text>
    </Flex>
  );
}
