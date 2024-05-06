import { Log } from "viem";

export function auction_price(reference_price: number, elapsed_minutes: number): number {
  // my approximation of ajna auction formula
  if (elapsed_minutes < 120) {
    const time_adj = -elapsed_minutes / 20;
    return 256 * reference_price * 2 ** time_adj;
  }
  if (elapsed_minutes < 840) {
    const time_adj = -(elapsed_minutes - 120) / 120;
    return 4 * reference_price * 2 ** time_adj;
  }
  const time_adj = -(elapsed_minutes - 840) / 60;
  return (reference_price * 2 ** time_adj) / 16;
}

const liquidation_events = ["Kick", "Take", "BucketTake", "Settle", "AuctionSettle"];

export function find_auctions_v2(logs: Log[] | undefined) {
  if (!logs) return { ended_auctions: [], active_auctions: [] };
  const ended_auctions = [];
  const active_auctions = {};

  const auction_logs = logs?.filter((log) => liquidation_events.includes(log.eventName));

  for (const log of auction_logs) {
    const key = `${log.address}_${log.args.borrower}`;
    if (log.eventName === "Kick") {
      active_auctions[key] = [log];
      console.log("add kick", active_auctions.length);
    } else if (log.eventName === "AuctionSettle") {
      console.log("add settle", active_auctions.length, key);
      active_auctions[key].push(log);
      ended_auctions.push(active_auctions[key]);
      active_auctions[key] = null;
      console.log("sealed auction", ended_auctions.length);
    } else {
      console.log("add", log.eventName, active_auctions.length, key);
      active_auctions[key].push(log);
    }
  }
  return { ended_auctions, active_auctions };
}
