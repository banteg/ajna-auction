import { createConfig, http } from "wagmi";
import { mainnet } from "wagmi/chains";

const uri = import.meta.env.DEV ? "http://127.0.0.1:8545" : undefined;

export const config = createConfig({
  chains: [mainnet],
  connectors: [],
  transports: {
    [mainnet.id]: http(uri),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
