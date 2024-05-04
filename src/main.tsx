import { Buffer } from "buffer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
  type PersistedQuery,
  experimental_createPersister,
} from "@tanstack/react-query-persist-client";
import React from "react";
import ReactDOM from "react-dom/client";
import { WagmiProvider } from "wagmi";

import * as idb from "idb-keyval";

import App from "./App.tsx";
import { config } from "./wagmi.ts";

import "./fonts/fonts.css";
import "./index.css";

import "@radix-ui/themes/styles.css";

import { Theme } from "@radix-ui/themes";

globalThis.Buffer = Buffer;

const persister = experimental_createPersister({
  storage: {
    getItem: async (key) => idb.get(key),
    setItem: async (key, value) => idb.set(key, value),
    removeItem: async (key) => idb.del(key),
  },
  maxAge: Number.POSITIVE_INFINITY,
  serialize: (value: PersistedQuery) => value,
  deserialize: (value) => value,
  buster: "12",
});
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
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
