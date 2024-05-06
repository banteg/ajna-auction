import { Box, Container, Flex, Text, TextField } from "@radix-ui/themes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import type { Address } from "viem";
import { useBlockNumber } from "wagmi";
import { AjnaPools } from "./components/AjnaPools";

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

function App() {
  const [pool, set_pool] = useState<Address>("");
  const [borrower, set_borrower] = useState<Address>("");
  const { data: block_number } = useBlockNumber({ watch: true });

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
        <Flex align="end" gap="4">
          <Text size="5">ajna auction</Text>
          <Box flexGrow="1" />
          {!!block_number && <Text size="2">block {block_number?.toLocaleString("en-US")}</Text>}
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
