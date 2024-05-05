const liquidation_events = ["Kick", "Take", "BucketTake", "Settle", "AuctionSettle"];

export function get_auction_data(logs) {
  if (!logs) return;
  let auctions = logs?.filter((log) => liquidation_events.includes(log.eventName));
  auctions = Object.groupBy(auctions, (el, i) => el.args.borrower);
  return auctions;
}

export function auction_price(reference_price: number, elapsed_minutes: number): number {
  // my approximation of ajna auction formula
  if (elapsed_minutes < 120) {
    const time_adj = (-1 * elapsed_minutes) / 20;
    return 256 * reference_price * 2 ** time_adj;
  }
  if (elapsed_minutes < 840) {
    const time_adj = (-1 * (elapsed_minutes - 120)) / 120;
    return 4 * reference_price * 2 ** time_adj;
  }
  const time_adj = (-1 * (elapsed_minutes - 840)) / 60;
  return (reference_price * 2 ** time_adj) / 16;
}
