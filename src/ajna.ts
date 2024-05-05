const liquidation_events = ["Kick", "Take", "BucketTake", "Settle", "AuctionSettle"];

export function get_auction_data(logs) {
  let auctions = logs?.filter((log) => liquidation_events.includes(log.eventName));
  auctions = Object.groupBy(auctions, (el, i) => el.args.borrower);
  console.log(Object.keys(auctions));
  return auctions;
}
