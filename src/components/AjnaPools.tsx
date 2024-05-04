import { Box, Button, Code, Flex, Grid, Text } from "@radix-ui/themes";
import { useInfiniteQuery, useQuery, useQueryClient } from "@tanstack/react-query";
import { getBlockNumber } from "@wagmi/core";
import { useEffect, useState } from "react";
import { type Address, parseAbiItem } from "viem";
import { getLogs } from "viem/actions";
import { useBlockNumber } from "wagmi";
import { useWatchErc20PoolFactoryPoolCreatedEvent } from "../generated";
import { config } from "../wagmi";

const ajna_factory: Address = "0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625";

export function AjnaPools() {
  const query_client = useQueryClient();
  const page_size = 10000n;
  //   const start_block = 18962313n;
  const start_block = 18962000n;
  //   const [end_block, set_block] = useState();
  const { data: end_block } = useBlockNumber();
  const num_pages = end_block && (end_block - start_block + page_size) / page_size;
  const [pools, set_pools] = useState([]);
  const [sel_page, set_page] = useState(0);

  async function fetch_logs({ pageParam }) {
    // fetches PoolCreated and extracts a list of pools
    console.log("fetch page", pageParam);
    const logs = await getLogs(config.getClient(), {
      address: ajna_factory,
      event: parseAbiItem("event PoolCreated(address pool, bytes32 subsetHash)"),
      fromBlock: pageParam,
      toBlock: pageParam + page_size - 1n,
    });
    return logs.map((log) => log.args.pool);
  }

  const pools_query = useInfiniteQuery({
    queryKey: ["ajna_pools_dev"],
    queryFn: fetch_logs,
    initialPageParam: start_block,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
      lastPageParam + page_size < end_block ? lastPageParam + page_size : null,
    select: (data) => ({ num_pages: data.pages.length, pools: data.pages.flat() }),
    staleTime: Number.POSITIVE_INFINITY,
  });

  useEffect(() => {
    console.log("num pages changed", pools_query.data?.num_pages, pools_query.fetchStatus, pools_query.status);
    if (pools_query.isFetching) return;
    if (pools_query.hasNextPage) pools_query.fetchNextPage();
  }, [pools_query.data?.num_pages]);

  return (
    <Flex direction="column" gap="2">
      <Text size="5" color="purple">
        anja pools {pools_query.data?.num_pages} / {num_pages?.toString()}
      </Text>
      {pools_query.hasNextPage && <Button onClick={(e) => pools_query.fetchNextPage()}>fetch more</Button>}
      <Flex>
        <Button onClick={(e) => set_page((page) => page - 1)}>go to page {sel_page - 1}</Button>
        <Button onClick={(e) => set_page((page) => page + 1)}>go to page {sel_page + 1}</Button>
      </Flex>
      <Text>start block: {start_block.toString()}</Text>
      <Text>end block: {end_block?.toString()}</Text>
      <Text size="1">{JSON.stringify(pools_query.data)}</Text>
    </Flex>
  );
}
