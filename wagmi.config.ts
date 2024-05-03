import { defineConfig } from "@wagmi/cli";
import { etherscan, react } from "@wagmi/cli/plugins";
import { mainnet } from "wagmi/chains";

export default defineConfig({
  out: "src/generated.ts",
  contracts: [],
  plugins: [
    etherscan({
      apiKey: process.env.ETHERSCAN_API_KEY!,
      chainId: mainnet.id,
      contracts: [
        {
          name: "PoolInfoUtils",
          address: {
            [mainnet.id]: "0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE",
          },
        },
      ],
    }),
    react(),
  ],
});
