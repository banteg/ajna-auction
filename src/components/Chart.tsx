import { Box } from "@radix-ui/themes";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { curveStepAfter } from "@visx/curve";
import { scaleLinear } from "@visx/scale";
import { LinePath } from "@visx/shape";
import { extent } from "@visx/vendor/d3-array";

export function Chart({ data }: { data: { x: number; y: number }[] }) {
  const width = 300;
  const height = 150;
  const x_scale = scaleLinear<number>({
    domain: extent(data, (row) => row.x) as [number, number],
    range: [50, 250],
  });
  const y_scale = scaleLinear<number>({
    domain: extent(data, (row) => row.y) as [number, number],
    range: [125, 10],
  });

  return (
    <Box>
      <svg width={width} height={height}>
        <LinePath
          data={data}
          x={(d) => x_scale(d.x)}
          y={(d) => y_scale(d.y)}
          stroke="red"
          curve={curveStepAfter}
        />
        <AxisBottom scale={x_scale} numTicks={3} top={125} />
        <AxisLeft scale={y_scale} numTicks={4} left={50} />
      </svg>
    </Box>
  );
}
