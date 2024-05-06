import { Box, Flex, Strong, Text } from "@radix-ui/themes";
import { Children } from "react";
import type { Log } from "viem";
import { event_colors, format_value } from "../ajna/formatters";

export function PoolEvent({ log }: { log: Log }) {
  const args = [];
  for (const [key, val] of Object.entries(log.args)) {
    args.push([key, format_value(key, val)]);
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
