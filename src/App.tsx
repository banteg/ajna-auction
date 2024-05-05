import { Box, Container, Flex, Grid, Spinner, Strong, Text, TextField } from "@radix-ui/themes";
import { useIsFetching, useQueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import { type Address, formatUnits } from "viem";
import { type UseReadContractReturnType, useBlockNumber } from "wagmi";
import { AjnaPools } from "./components/AjnaPools";
import { useReadPoolInfoUtilsAuctionStatus } from "./generated";

export function format_wei(value: bigint, decimals: number, digits = 5) {
  // format to significant digits while keeping integer precision
  const [integer_part, _decimal_part] = formatUnits(value, decimals).split(".");
  const significant_digits = Math.max(integer_part.length, digits);
  return (Number(value) / 10 ** decimals).toLocaleString("en-US", {
    maximumSignificantDigits: Math.min(significant_digits, 18),
  });
}

function Input({
  label,
  value,
  set_value,
}: {
  label: string;
  value?: string;
  set_value: Dispatch<SetStateAction<Address | undefined>>;
}) {
  return (
    <Box>
      <Text color="gray">{label}</Text>
      <TextField.Root
        placeholder={label}
        value={value}
        onChange={(e) => set_value(e.target.value as Address)}
      />
    </Box>
  );
}

function AjnaAuctionInfo({ query }: { query: UseReadContractReturnType }) {
  if (query.isError) {
    return (
      <Box>
        <Text color="red">{query.error.name}</Text>
        <Text size="1" color="red" style={{ whiteSpace: "pre-wrap" }}>
          {query.error.message}
        </Text>
      </Box>
    );
  }
  if (!query.isSuccess) return;
  // @ts-ignore
  if (query?.data[0] === 0n) return <Text color="red">auction does not exist or ended</Text>;
  // @ts-ignore
  const kick_time = new Date(Number.parseInt(query?.data[0].toString()) * 1000)
    .toISOString()
    .replace("T", " ")
    .replace(".000", "");
  return (
    <Flex direction="column" gap="2">
      {query.isFetching ? (
        <Text color="blue" size="1">
          ● fetching…
        </Text>
      ) : (
        <Text color="green" size="1">
          ● updated
        </Text>
      )}
      <Grid columns="2" align="baseline" gap="2">
        <Text>kickTime </Text>
        <Text truncate>{kick_time}</Text>
        <Text>collateral </Text>
        <Text truncate size="4">
          {/* @ts-ignore */}
          {format_wei(query.data[1], 18)}
        </Text>
        <Text>debtToCover </Text>
        <Text truncate size="4">
          {/* @ts-ignore */}
          {format_wei(query.data[2], 18)}
        </Text>
        <Text>isCollateralized </Text>
        <Text truncate size="4">
          {/* @ts-ignore */}
          {query.data[3].toString()}
        </Text>
        <Text color="red">price </Text>
        <Text truncate size="4" color="red">
          {/* @ts-ignore */}
          <Strong>{format_wei(query.data[4], 18)}</Strong>
        </Text>
        <Text>neutralPrice </Text>
        <Text truncate size="4">
          {/* @ts-ignore */}
          {format_wei(query.data[5], 18)}
        </Text>
        <Text>referencePrice </Text>
        <Text truncate size="4">
          {/* @ts-ignore */}
          {format_wei(query.data[6], 18)}
        </Text>
        <Text>debtToCollateral </Text>
        <Text truncate size="4">
          {/* @ts-ignore */}
          {format_wei(query.data[7], 18)}
        </Text>
        <Text>bondFactor </Text>
        <Text truncate size="4">
          {/* @ts-ignore */}
          {format_wei(query.data[8], 18)}
        </Text>
      </Grid>
    </Flex>
  );
}

export function AjnaActiveAuctions() {
  return (
    <Flex direction="column" gap="2">
      <Text size="5">active auctions</Text>
    </Flex>
  );
}

function App() {
  const query_client = useQueryClient();
  const is_fetching = useIsFetching();
  const [pool, set_pool] = useState<Address>("");
  const [borrower, set_borrower] = useState<Address>("");
  const { data: block_number } = useBlockNumber({ watch: true });
  const auction_query = useReadPoolInfoUtilsAuctionStatus({
    args: [pool as Address, borrower as Address],
    query: { enabled: !!pool && !!borrower && !!block_number, retry: 0 },
  });

  useEffect(() => {
    query_client.invalidateQueries({ queryKey: auction_query.queryKey });
  }, [block_number]);

  function set_query(key: string, value: string) {
    // @ts-ignore
    const url = new URL(document.location);
    url.searchParams.set(key, value);
    history.replaceState(null, "", url);
  }

  useEffect(() => {
    if (pool) set_query("pool", pool);
  }, [pool]);

  useEffect(() => {
    if (borrower) set_query("borrower", borrower);
  }, [borrower]);

  useEffect(() => {
    const search_params = new URLSearchParams(document.location.search);
    const search_pool = search_params.get("pool");
    const search_borrower = search_params.get("borrower");
    set_pool(search_pool as Address);
    set_borrower(search_borrower as Address);
  }, []);

  return (
    <Container size="3" p={{ initial: "2", md: "4" }}>
      <Flex direction="column" gap="4">
        <Flex align="baseline">
          <Text size="5">ajna auction</Text>
          <Box flexGrow="1" />
          {!!block_number && (
            <Text size="2" color="gray">
              block {block_number?.toLocaleString("en-US")}
            </Text>
          )}
        </Flex>
        {/*
        <Input label="pool" value={pool} set_value={set_pool} />
        <Input label="borrower" value={borrower} set_value={set_borrower} />
        <AjnaAuctionInfo query={auction_query} /> */}
        <AjnaPools />
      </Flex>
      <ReactQueryDevtools />
    </Container>
  );
}

export default App;
