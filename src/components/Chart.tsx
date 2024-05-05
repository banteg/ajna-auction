import { Line, LineChart, ReferenceLine, Tooltip, XAxis, YAxis } from "recharts";

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
