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
        {
          name: "ERC20PoolFactory",
          address: {
            [mainnet.id]: "0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625",
          },
        },
        {
          name: "ERC20Pool",
          address: {
            [mainnet.id]: "0x4B3B9A972a884e37FD675ee57F6998da0BE47e26",
          },
        },
      ],
    }),
    react(),
  ],
});
