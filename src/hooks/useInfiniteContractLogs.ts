import { useInfiniteQuery } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import type { AbiEvent, Address, Client } from "viem";
import { getLogs } from "viem/actions";
import { WagmiContext, useBlockNumber } from "wagmi";

interface UseContractLogsProps {
  address: Address | Address[];
  events: AbiEvent[];
  start_block: bigint;
  page_size: bigint;
  enabled: boolean;
}

interface PageParam {
  from_block: bigint;
  to_block: bigint;
}

async function fetch_logs({
  client,
  address,
  events,
  from_block,
  to_block,
}: {
  client: Client;
  address: Address | Address[];
  events: AbiEvent[];
  from_block: bigint;
  to_block: bigint;
}) {
  return getLogs(client, {
    address: address,
    events: events,
    fromBlock: from_block,
    toBlock: to_block,
  });
}

export function useInfiniteContractLogs({
  address,
  events,
  start_block,
  page_size,
  enabled = true,
}: UseContractLogsProps) {
  const config = useContext(WagmiContext);
  const { data: end_block } = useBlockNumber();

  const query = useInfiniteQuery({
    queryKey: [
      "infinite_contract_logs",
      address,
      events.map((e) => e.name),
      start_block.toString(),
    ],
    queryFn: ({ pageParam }) =>
      fetch_logs({
        client: config.getClient(),
        address,
        events,
        from_block: pageParam.from_block,
        to_block: pageParam.to_block,
      }),
    initialPageParam: {
      from_block: start_block,
      to_block: start_block + page_size - 1n,
    },
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      if (!end_block) return undefined;
      const next_page: PageParam = {
        from_block: lastPageParam.to_block + 1n,
        to_block: lastPageParam.to_block + page_size,
      };
      if (next_page.from_block > end_block) return null;
      if (next_page.to_block > end_block) next_page.to_block = end_block;
      return next_page;
    },
    select: (data) => data.pages.flat(),
    staleTime: Number.POSITIVE_INFINITY,
    enabled: enabled,
  });

  useEffect(() => {
    if (!query.isFetching && query.hasNextPage) query.fetchNextPage();
  }, [query.isFetching, query.hasNextPage]);

  return query;
}
