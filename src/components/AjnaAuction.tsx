import {
  Box,
  Callout,
  Card,
  DataList,
  Flex,
  Progress,
  Separator,
  Text,
  Tooltip,
} from "@radix-ui/themes";
import { Badge } from "@radix-ui/themes";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { type UseReadContractReturnType, useBlockNumber } from "wagmi";
import { useReadPoolInfoUtilsAuctionStatus } from "../generated";
import { format_epoch, format_wad, format_wei } from "../utils";
import { PoolEvent } from "./AjnaPools";
import { AuctionPriceChart } from "./Chart";

function AjnaAuctionStatus({ query }: { query: UseReadContractReturnType }) {
  if (query.isError) {
    return (
      <Callout.Root color="red">
        <Callout.Text>
          <Text size="2">{query.error.name}</Text>
          <Text size="1" as="div" color="red" style={{ whiteSpace: "pre-wrap" }}>
            {query.error.message}
          </Text>
        </Callout.Text>
      </Callout.Root>
    );
  }
  if (!query.isSuccess) return;
  // @ts-ignore
  if (query?.data[0] === 0n) return <Text color="red">auction does not exist or ended</Text>;

  const now = new Date().valueOf() / 1000;
  const auction_duration = 72 * 3600;
  const progress = ((now - Number.parseInt(query.data[0])) / auction_duration) * 100;
  const collateral_value = (query.data[1] * query.data[4]) / 10n ** 18n;
  const remaining_collateral = query.data[1] - (query.data[2] * 10n ** 18n) / query.data[4];

  const data = {
    kickTime: format_epoch(query.data[0]),
    collateral: <Badge color="lime">{format_wad(query.data[1])}</Badge>,
    "current value": <Badge color="ruby">{format_wad(collateral_value)}</Badge>,
    salvagable: (
      <Tooltip content="value returned if settled at current price">
        <Badge color="lime">{format_wad(remaining_collateral)}</Badge>
      </Tooltip>
    ),
    debtToCover: <Badge color="ruby">{format_wad(query.data[2])}</Badge>,
    price: <Badge color="indigo">{format_wad(query.data[4])}</Badge>,
    neutralPrice: format_wad(query.data[5]),
    referencePrice: format_wad(query.data[6]),
    debtToCollateral: format_wad(query.data[7]),
    bondFactor: format_wad(query.data[8]),
    timeProgress: `${progress.toFixed(2)}%`,
    isCollateralized: query.data[3].toString(),
  };

  const [pool, borrower] = query.queryKey[1].args; // bit hacky

  return (
    <Box>
      <Card>
        <Flex gap="4">
          <Flex direction="column" gap="2" flexBasis="50%">
            <Text>auction status</Text>
            <DataList.Root size="1">
              {Object.entries(data).map(([key, value]) => (
                <DataList.Item key={`auction-status-${pool}-${borrower}-${key}`}>
                  <DataList.Label>{key}</DataList.Label>
                  <DataList.Value>{value}</DataList.Value>
                </DataList.Item>
              ))}
            </DataList.Root>
          </Flex>
          <AuctionPriceChart refernce_price={query.data[6]} kick_time={query.data[0]} />
        </Flex>
      </Card>
    </Box>
  );
}

export function AjnaAuctionDetails({ pool, borrower, logs }) {
  // details about a single auction, including status if it's running
  const query_client = useQueryClient();
  const is_settled = logs.filter((log) => log.eventName === "AuctionSettle").length >= 1;
  const { data: block_number } = useBlockNumber({ watch: true, query: { enabled: !is_settled } });

  const auction_query = useReadPoolInfoUtilsAuctionStatus({
    args: [pool, borrower],
    query: { enabled: !is_settled, retry: 0 },
  });

  useEffect(() => {
    query_client.invalidateQueries({ queryKey: auction_query.queryKey });
  }, [block_number]);

  return (
    <Flex direction="column" gap="2">
      <Text size="2" color="red">
        {borrower}{" "}
        {is_settled ? (
          <Badge color="green">settled</Badge>
        ) : (
          <Badge color="orange">in progress</Badge>
        )}
      </Text>
      {logs.map((log) => (
        <PoolEvent log={log} key={`log-auction-${log.blockNumber}-${log.logIndex}`} />
      ))}
      {!is_settled && <AjnaAuctionStatus query={auction_query} />}
    </Flex>
  );
}
