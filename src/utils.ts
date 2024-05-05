import { formatUnits } from "viem";

export function format_wei(value: bigint, decimals: number, digits = 5) {
  // format to significant digits while keeping integer precision
  const [integer_part, _decimal_part] = formatUnits(value, decimals).split(".");
  const significant_digits = Math.max(integer_part.length, digits);
  return (Number(value) / 10 ** decimals).toLocaleString("en-US", {
    maximumSignificantDigits: Math.min(significant_digits, 18),
  });
}
