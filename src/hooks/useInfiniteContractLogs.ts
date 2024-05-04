import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import type { AbiEvent, Address } from "viem";
import { getLogs } from "viem/actions";
import { useBlockNumber, type Config } from "wagmi";

interface UseContractLogsProps {
  address: Address | Address[];
  event: AbiEvent;
  start_block: bigint;
  page_size: bigint;
  config: Config;
}

interface PageParam {
  from_block: bigint;
  to_block: bigint;
}

export function useInfiniteContractLogs({
  address,
  event,
  start_block,
  page_size,
  config,
}: UseContractLogsProps) {
  const { data: end_block } = useBlockNumber();

  async function fetch_logs({ pageParam }: { pageParam: PageParam }) {
    const size = pageParam.to_block - pageParam.from_block + 1n;
    console.log("fetch logs", pageParam, "size", size);
    return getLogs(config.getClient(), {
      address: address,
      event: event,
      fromBlock: pageParam.from_block,
      toBlock: pageParam.to_block,
    });
  }

  const query = useInfiniteQuery({
    queryKey: ["infinite_contract_logs", address, event, start_block.toString()],
    queryFn: fetch_logs,
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
  });

  useEffect(() => {
    if (!query.isFetching && query.hasNextPage) query.fetchNextPage();
  }, [query.isFetching, query.hasNextPage]);

  return query;
}
