import { Buffer } from "buffer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { experimental_createPersister } from "@tanstack/react-query-persist-client";
import React from "react";
import ReactDOM from "react-dom/client";
import { WagmiProvider, deserialize, serialize } from "wagmi";

import App from "./App.tsx";
import { config } from "./wagmi.ts";

import "./index.css";

import "@radix-ui/themes/styles.css";

import { Theme } from "@radix-ui/themes";

globalThis.Buffer = Buffer;

const persister = experimental_createPersister({
  storage: AsyncStorage,
  maxAge: Number.POSITIVE_INFINITY,
  serialize: serialize,
  deserialize: deserialize,
  buster: "6",
});
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      persister: persister,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Theme>
          <App />
        </Theme>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
);
