import { Box, Container, Flex, Grid, Strong, Text, TextField } from "@radix-ui/themes";
import { useQueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import { type Address, formatUnits } from "viem";
import { type UseReadContractReturnType, useBlockNumber } from "wagmi";
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
  value: string;
  set_value: Dispatch<SetStateAction<Address>>;
}) {
  return (
    <Box>
      <Text color="gray">{label}</Text>
      <TextField.Root placeholder={label} value={value} onChange={(e) => set_value(e.target.value as Address)} />
    </Box>
  );
}

function AjnaAuctionInfo({ query }: { query: UseReadContractReturnType }) {
  console.log(query.status);
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
        <Text>kickTime</Text>
        <Text truncate>{kick_time}</Text>
        <Text>collateral</Text>
        <Text truncate size="4">
          {/* @ts-ignore */}
          {format_wei(query.data[1], 18)}
        </Text>
        <Text>debtToCover</Text>
        <Text truncate size="4">
          {/* @ts-ignore */}
          {format_wei(query.data[2], 18)}
        </Text>
        <Text>isCollateralized</Text>
        <Text truncate size="4">
          {/* @ts-ignore */}
          {query.data[3].toString()}
        </Text>
        <Text color="red">price</Text>
        <Text truncate size="4" color="red">
          {/* @ts-ignore */}
          <Strong>{format_wei(query.data[4], 18)}</Strong>
        </Text>
        <Text>neutralPrice</Text>
        <Text truncate size="4">
          {/* @ts-ignore */}
          {format_wei(query.data[5], 18)}
        </Text>
        <Text>referencePrice</Text>
        <Text truncate size="4">
          {/* @ts-ignore */}
          {format_wei(query.data[6], 18)}
        </Text>
        <Text>debtToCollateral</Text>
        <Text truncate size="4">
          {/* @ts-ignore */}
          {format_wei(query.data[7], 18)}
        </Text>
        <Text>bondFactor</Text>
        <Text truncate size="4">
          {/* @ts-ignore */}
          {format_wei(query.data[8], 18)}
        </Text>
      </Grid>
    </Flex>
  );
}

function App() {
  const query_client = useQueryClient();
  const [pool, set_pool] = useState<Address>("0x07aaa9e40323a85e763a5b2eb9d8ca7ebaf7fb5a");
  const [borrower, set_borrower] = useState<Address>("0x286ee152779ca230a30337d3f96df7963e41a307");
  const { data: block_number } = useBlockNumber({ watch: true });
  const auction_query = useReadPoolInfoUtilsAuctionStatus({
    args: [pool, borrower],
    query: { enabled: !!pool && !!borrower && !!block_number, retry: 0 },
  });
  console.log(auction_query);

  useEffect(() => {
    query_client.invalidateQueries({ queryKey: auction_query.queryKey });
  }, [block_number]);

  return (
    <Container size="1" p={{ initial: "2", md: "4" }}>
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
        <Input label="pool" value={pool} set_value={set_pool} />
        <Input label="borrower" value={borrower} set_value={set_borrower} />
        <AjnaAuctionInfo query={auction_query} />
      </Flex>
      <ReactQueryDevtools />
    </Container>
  );
}

export default App;
