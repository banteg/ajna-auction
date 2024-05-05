import { Box, Flex, Strong, Text } from "@radix-ui/themes";
import { Children, useContext } from "react";
import type { Log } from "viem";
import { serialize } from "wagmi";
import { AjnaContext } from "../context";
import { format_wei } from "../utils";

export const wad_values = [
  "debt",
  "collateral",
  "bond",
  "amount",
  "bondChange",
  "lpAwarded",
  "amountBorrowed",
  "collateralPledged",
  "lup",
  "oldRate",
  "newRate",
  "quoteRepaid",
  "collateralPulled",
  "claimableReservesRemaining",
  "auctionPrice",
  "lpRedeemed",
  "lpRedeemedFrom",
  "lpAwardedTo",
];

export const event_colors = {
  Kick: "red",
  KickReserveAuction: "red",
  Take: "cyan",
  BucketTake: "cyan",
  Settle: "green",
  AuctionSettle: "green",
  ReserveAuction: "green",
};

export function PoolEvent({ log }: { log: Log }) {
  const settings = useContext(AjnaContext);

  const args = [];
  for (const [key, val] of Object.entries(log.args)) {
    const value =
      typeof val === "bigint"
        ? settings.use_wei || !wad_values.includes(key)
          ? val.toString()
          : format_wei(val, 18)
        : serialize(val);
    args.push([key, value]);
  }
  return (
    <Box>
    <Flex gap="2">
      <Text size="1" color="gray" as="span" style={{ minWidth: "6rem" }}>
        {log.blockNumber?.toString()}/{log.logIndex?.toString()}
      </Text>
      <Text size="1" color={event_colors[log.eventName]} as="span">
        <Strong>{log.eventName}</Strong>
      </Text>
      {/* solves the key issue if this event is rendered in multiple places */}
      {Children.toArray(
        args.map(([key, val]) => (
          <Text size="1">
            <Text as="span" color="gray">
              {key}=
            </Text>
            {val}
          </Text>
        )),
      )}
    </Flex>
    </Box>
  );
}
