import { serialize } from "wagmi";
import { format_wad } from "../utils";

function format_wad_array(value: bigint[]) {
  return `[${value.map((v) => format_wad(v)).join(", ")}]`;
}

function format_bigint_array(value: bigint[]) {
  return `[${value.map((v) => v.toString()).join(", ")}]`;
}

function format_address_array(value: string[]) {
  return `[${value.join(", ")}]`;
}

function format_identity(value: string) {
  return value;
}

function format_bigint(value: bigint) {
  return value.toString();
}

const formatters = {
  debt: format_wad,
  collateral: format_wad,
  bond: format_wad,
  amount: format_wad,
  bondChange: format_wad,
  lpAwarded: format_wad,
  amountBorrowed: format_wad,
  collateralPledged: format_wad,
  lup: format_wad,
  oldRate: format_wad,
  newRate: format_wad,
  quoteRepaid: format_wad,
  collateralPulled: format_wad,
  claimableReservesRemaining: format_wad,
  auctionPrice: format_wad,
  lpRedeemed: format_wad,
  lpRedeemedFrom: format_wad,
  lpAwardedTo: format_wad,
  lp: format_wad,
  lpAwardedTaker: format_wad,
  lpForfeited: format_wad,
  settledDebt: format_wad,
  lpAwardedKicker: format_wad,
  indexes: format_bigint_array,
  amounts: format_wad_array,
  borrower: format_identity,
  lender: format_identity,
  spender: format_identity,
  owner: format_identity,
  newOwner: format_identity,
  kicker: format_identity,
  reciever: format_identity,
  receiver: format_identity,
  claimer: format_identity,
  actor: format_identity,
  taker: format_identity,
  token: format_identity,
  isReward: serialize,
  index: format_bigint,
  from: format_bigint,
  to: format_bigint,
  currentBurnEpoch: format_bigint,
  transferors: format_address_array,
};

export const event_colors = {
  Kick: "red",
  KickReserveAuction: "red",
  Take: "cyan",
  BucketTake: "cyan",
  Settle: "green",
  AuctionSettle: "green",
  ReserveAuction: "green",
};

export function format_value(key, value, use_wei) {
  if (key in formatters) return formatters[key](value);
  console.log("unhandled", key, value);
  return serialize(value);
}
