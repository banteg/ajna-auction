import { Box, Flex, Text } from "@radix-ui/themes";
import { useMemo } from "react";
import { Line, LineChart, ReferenceLine, Tooltip, XAxis, YAxis } from "recharts";
import { serialize } from "wagmi";
import { auction_price } from "../ajna";
import { format_wad, range } from "../utils";

export function Chart({ data }: { data: { x: number; y: number }[] }) {
  const last = data[data.length - 1];
  return (
    <div style={{ fontSize: "12px" }}>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 40, left: 20, bottom: 5 }}
      >
        <XAxis type="number" dataKey="x" domain={["dataMin", "dataMax"]} />
        <YAxis type="number" dataKey="y" />
        <Line type="stepAfter" dot={false} dataKey="y" isAnimationActive={false} />
        <ReferenceLine y={last.y} stroke="red" />
        <Tooltip
          isAnimationActive={false}
          allowEscapeViewBox={{ x: true, y: true }}
          position={{ x: 90, y: 15 }}
        />
      </LineChart>
    </div>
  );
}

export function AuctionPriceChart({ refernce_price, kick_time }) {
  const referenece_float = Number.parseFloat(format_wad(refernce_price));
  const data = useMemo(() => {
    const minutes = range(72 * 60);
    return minutes.map((elapsed) => ({ x: elapsed, y: auction_price(referenece_float, elapsed) }));
  }, [refernce_price]);

  if (!refernce_price || !kick_time) return;

  const elapsed_minutes = Number.parseInt((BigInt(new Date()) / 1000n - kick_time) / 60n);
  console.log(elapsed_minutes);

  return (
    <Box>
      <Flex direction="column" gap="2">
        <Text size="3">auction chart</Text>
        <LineChart
          style={{ fontSize: "12px" }}
          width={500}
          height={200}
          data={data.slice(
            Math.max(0, elapsed_minutes - 60),
            Math.min(elapsed_minutes + 3 * 60, 72 * 60),
          )}
        >
          <XAxis type="number" dataKey="x" domain={["dataMin", "dataMax"]} />
          <YAxis type="number" dataKey="y" />
          <Line type="linear" dot={false} dataKey="y" isAnimationActive={false} />
          <ReferenceLine x={elapsed_minutes} stroke="red" />
          <ReferenceLine y={referenece_float} stroke="red" />
        </LineChart>
      </Flex>
    </Box>
  );
}
