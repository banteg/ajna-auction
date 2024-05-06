import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20Pool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const erc20PoolAbi = [
  { type: 'error', inputs: [], name: 'AddAboveAuctionPrice' },
  { type: 'error', inputs: [], name: 'AddAboveAuctionPrice' },
  { type: 'error', inputs: [], name: 'AlreadyInitialized' },
  { type: 'error', inputs: [], name: 'AmountLTMinDebt' },
  { type: 'error', inputs: [], name: 'AuctionActive' },
  { type: 'error', inputs: [], name: 'AuctionActive' },
  { type: 'error', inputs: [], name: 'AuctionNotClearable' },
  { type: 'error', inputs: [], name: 'AuctionNotCleared' },
  { type: 'error', inputs: [], name: 'AuctionNotCleared' },
  { type: 'error', inputs: [], name: 'AuctionNotTakeable' },
  { type: 'error', inputs: [], name: 'AuctionPriceGtBucketPrice' },
  { type: 'error', inputs: [], name: 'BorrowerNotSender' },
  { type: 'error', inputs: [], name: 'BorrowerOk' },
  { type: 'error', inputs: [], name: 'BorrowerUnderCollateralized' },
  { type: 'error', inputs: [], name: 'BucketBankruptcyBlock' },
  { type: 'error', inputs: [], name: 'BucketIndexOutOfBounds' },
  { type: 'error', inputs: [], name: 'CannotMergeToHigherPrice' },
  { type: 'error', inputs: [], name: 'DustAmountNotExceeded' },
  { type: 'error', inputs: [], name: 'FlashloanCallbackFailed' },
  { type: 'error', inputs: [], name: 'FlashloanIncorrectBalance' },
  { type: 'error', inputs: [], name: 'FlashloanUnavailableForToken' },
  { type: 'error', inputs: [], name: 'InsufficientCollateral' },
  { type: 'error', inputs: [], name: 'InsufficientLP' },
  { type: 'error', inputs: [], name: 'InsufficientLiquidity' },
  { type: 'error', inputs: [], name: 'InvalidAllowancesInput' },
  { type: 'error', inputs: [], name: 'InvalidAmount' },
  { type: 'error', inputs: [], name: 'InvalidIndex' },
  { type: 'error', inputs: [], name: 'LUPBelowHTP' },
  { type: 'error', inputs: [], name: 'LimitIndexExceeded' },
  { type: 'error', inputs: [], name: 'MoveToSameIndex' },
  { type: 'error', inputs: [], name: 'NoAllowance' },
  { type: 'error', inputs: [], name: 'NoAuction' },
  { type: 'error', inputs: [], name: 'NoClaim' },
  { type: 'error', inputs: [], name: 'NoDebt' },
  { type: 'error', inputs: [], name: 'NoReserves' },
  { type: 'error', inputs: [], name: 'NoReservesAuction' },
  { type: 'error', inputs: [], name: 'PRBMathSD59x18__DivInputTooSmall' },
  {
    type: 'error',
    inputs: [{ name: 'rAbs', internalType: 'uint256', type: 'uint256' }],
    name: 'PRBMathSD59x18__DivOverflow',
  },
  {
    type: 'error',
    inputs: [{ name: 'x', internalType: 'int256', type: 'int256' }],
    name: 'PRBMathSD59x18__Exp2InputTooBig',
  },
  {
    type: 'error',
    inputs: [{ name: 'x', internalType: 'int256', type: 'int256' }],
    name: 'PRBMathSD59x18__FromIntOverflow',
  },
  {
    type: 'error',
    inputs: [{ name: 'x', internalType: 'int256', type: 'int256' }],
    name: 'PRBMathSD59x18__FromIntUnderflow',
  },
  {
    type: 'error',
    inputs: [{ name: 'x', internalType: 'int256', type: 'int256' }],
    name: 'PRBMathSD59x18__LogInputTooSmall',
  },
  { type: 'error', inputs: [], name: 'PRBMathSD59x18__MulInputTooSmall' },
  {
    type: 'error',
    inputs: [{ name: 'rAbs', internalType: 'uint256', type: 'uint256' }],
    name: 'PRBMathSD59x18__MulOverflow',
  },
  {
    type: 'error',
    inputs: [{ name: 'x', internalType: 'int256', type: 'int256' }],
    name: 'PRBMathSD59x18__SqrtNegativeInput',
  },
  {
    type: 'error',
    inputs: [{ name: 'x', internalType: 'int256', type: 'int256' }],
    name: 'PRBMathSD59x18__SqrtOverflow',
  },
  {
    type: 'error',
    inputs: [{ name: 'prod1', internalType: 'uint256', type: 'uint256' }],
    name: 'PRBMath__MulDivFixedPointOverflow',
  },
  {
    type: 'error',
    inputs: [
      { name: 'prod1', internalType: 'uint256', type: 'uint256' },
      { name: 'denominator', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PRBMath__MulDivOverflow',
  },
  { type: 'error', inputs: [], name: 'PriceBelowLUP' },
  { type: 'error', inputs: [], name: 'RemoveDepositLockedByAuctionDebt' },
  { type: 'error', inputs: [], name: 'RemoveDepositLockedByAuctionDebt' },
  { type: 'error', inputs: [], name: 'ReserveAuctionTooSoon' },
  { type: 'error', inputs: [], name: 'TransactionExpired' },
  { type: 'error', inputs: [], name: 'TransactionExpired' },
  { type: 'error', inputs: [], name: 'TransferToSameOwner' },
  { type: 'error', inputs: [], name: 'TransferorNotApproved' },
  { type: 'error', inputs: [], name: 'ZeroDebtToCollateral' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'actor',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'lpAwarded',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AddCollateral',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'lender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'lpAwarded',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'lup', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'AddQuoteToken',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'lender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'transferors',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'ApproveLPTransferors',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'borrower',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'collateral',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'lp', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AuctionNFTSettle',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'borrower',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'collateral',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AuctionSettle',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'kicker',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'reciever',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BondWithdrawn',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'lpForfeited',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BucketBankruptcy',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'borrower',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'collateral',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'bondChange',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'isReward', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'BucketTake',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'taker',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'kicker',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'lpAwardedTaker',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'lpAwardedKicker',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BucketTakeLPAwarded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'indexes',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'amounts',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'DecreaseLPAllowance',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'borrower',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amountBorrowed',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'collateralPledged',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'lup', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'DrawDebt',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'token',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Flashloan',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'indexes',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'amounts',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'IncreaseLPAllowance',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [],
    name: 'InterestUpdateFailure',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'borrower',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'debt',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'collateral',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'bond',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Kick',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'claimableReservesRemaining',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'auctionPrice',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'currentBurnEpoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'KickReserveAuction',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'borrower',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'LoanStamped',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'lender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'to', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'lpRedeemedFrom',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'lpAwardedTo',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'lup', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'MoveQuoteToken',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'claimer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'lpRedeemed',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'RemoveCollateral',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'lender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'lpRedeemed',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'lup', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'RemoveQuoteToken',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'borrower',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'quoteRepaid',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'collateralPulled',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'lup', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'RepayDebt',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'claimableReservesRemaining',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'auctionPrice',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'currentBurnEpoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ReserveAuction',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldRate',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newRate',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ResetInterestRate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'indexes',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'RevokeLPAllowance',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'lender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'transferors',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'RevokeLPTransferors',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'borrower',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'settledDebt',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Settle',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'borrower',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'collateral',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'bondChange',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'isReward', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'Take',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'indexes',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      { name: 'lp', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'TransferLP',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldRate',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newRate',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'UpdateInterestRate',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'amountToAdd_', internalType: 'uint256', type: 'uint256' },
      { name: 'index_', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addCollateral',
    outputs: [{ name: 'bucketLP_', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'amount_', internalType: 'uint256', type: 'uint256' },
      { name: 'index_', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addQuoteToken',
    outputs: [
      { name: 'bucketLP_', internalType: 'uint256', type: 'uint256' },
      { name: 'addedAmount_', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'transferors_', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'approveLPTransferors',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'approvedTransferors',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'borrower_', internalType: 'address', type: 'address' }],
    name: 'auctionInfo',
    outputs: [
      { name: 'kicker_', internalType: 'address', type: 'address' },
      { name: 'bondFactor_', internalType: 'uint256', type: 'uint256' },
      { name: 'bondSize_', internalType: 'uint256', type: 'uint256' },
      { name: 'kickTime_', internalType: 'uint256', type: 'uint256' },
      { name: 'referencePrice_', internalType: 'uint256', type: 'uint256' },
      { name: 'neutralPrice_', internalType: 'uint256', type: 'uint256' },
      { name: 'debtToCollateral_', internalType: 'uint256', type: 'uint256' },
      { name: 'head_', internalType: 'address', type: 'address' },
      { name: 'next_', internalType: 'address', type: 'address' },
      { name: 'prev_', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'borrower_', internalType: 'address', type: 'address' }],
    name: 'borrowerInfo',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'bucketIndex_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'bucketCollateralDust',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'index_', internalType: 'uint256', type: 'uint256' }],
    name: 'bucketExchangeRate',
    outputs: [
      { name: 'exchangeRate_', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'index_', internalType: 'uint256', type: 'uint256' }],
    name: 'bucketInfo',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'borrowerAddress_', internalType: 'address', type: 'address' },
      { name: 'depositTake_', internalType: 'bool', type: 'bool' },
      { name: 'index_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'bucketTake',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'burnEventEpoch_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burnInfo',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'collateralAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'collateralScale',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'currentBurnEpoch',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'debtInfo',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender_', internalType: 'address', type: 'address' },
      { name: 'indexes_', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'amounts_', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'decreaseLPAllowance',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'debt_', internalType: 'uint256', type: 'uint256' }],
    name: 'depositIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'index_', internalType: 'uint256', type: 'uint256' }],
    name: 'depositScale',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'depositSize',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'index_', internalType: 'uint256', type: 'uint256' }],
    name: 'depositUpToIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'depositUtilization',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'borrowerAddress_', internalType: 'address', type: 'address' },
      { name: 'amountToBorrow_', internalType: 'uint256', type: 'uint256' },
      { name: 'limitIndex_', internalType: 'uint256', type: 'uint256' },
      { name: 'collateralToPledge_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'drawDebt',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'emasInfo',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'token_', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'flashFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'receiver_',
        internalType: 'contract IERC3156FlashBorrower',
        type: 'address',
      },
      { name: 'token_', internalType: 'address', type: 'address' },
      { name: 'amount_', internalType: 'uint256', type: 'uint256' },
      { name: 'data_', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'flashLoan',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender_', internalType: 'address', type: 'address' },
      { name: 'indexes_', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'amounts_', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'increaseLPAllowance',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'inflatorInfo',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'rate_', internalType: 'uint256', type: 'uint256' }],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'interestRateInfo',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'borrower_', internalType: 'address', type: 'address' },
      { name: 'npLimitIndex_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'kick',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'kickReserveAuction',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'kicker_', internalType: 'address', type: 'address' }],
    name: 'kickerInfo',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'index_', internalType: 'uint256', type: 'uint256' },
      { name: 'lender_', internalType: 'address', type: 'address' },
    ],
    name: 'lenderInfo',
    outputs: [
      { name: 'lpBalance_', internalType: 'uint256', type: 'uint256' },
      { name: 'depositTime_', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'index_', internalType: 'uint256', type: 'uint256' },
      { name: 'npLimitIndex_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'lenderKick',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'loanId_', internalType: 'uint256', type: 'uint256' }],
    name: 'loanInfo',
    outputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'loansInfo',
    outputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'index_', internalType: 'uint256', type: 'uint256' },
      { name: 'spender_', internalType: 'address', type: 'address' },
      { name: 'owner_', internalType: 'address', type: 'address' },
    ],
    name: 'lpAllowance',
    outputs: [{ name: 'allowance_', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'token_', internalType: 'address', type: 'address' }],
    name: 'maxFlashLoan',
    outputs: [{ name: 'maxLoan_', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'maxAmount_', internalType: 'uint256', type: 'uint256' },
      { name: 'fromIndex_', internalType: 'uint256', type: 'uint256' },
      { name: 'toIndex_', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'moveQuoteToken',
    outputs: [
      { name: 'fromBucketLP_', internalType: 'uint256', type: 'uint256' },
      { name: 'toBucketLP_', internalType: 'uint256', type: 'uint256' },
      { name: 'movedAmount_', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'pledgedCollateral',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'poolType',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'quoteTokenAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'quoteTokenScale',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'maxAmount_', internalType: 'uint256', type: 'uint256' },
      { name: 'index_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'removeCollateral',
    outputs: [
      { name: 'removedAmount_', internalType: 'uint256', type: 'uint256' },
      { name: 'redeemedLP_', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'maxAmount_', internalType: 'uint256', type: 'uint256' },
      { name: 'index_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'removeQuoteToken',
    outputs: [
      { name: 'removedAmount_', internalType: 'uint256', type: 'uint256' },
      { name: 'redeemedLP_', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'borrowerAddress_', internalType: 'address', type: 'address' },
      {
        name: 'maxQuoteTokenAmountToRepay_',
        internalType: 'uint256',
        type: 'uint256',
      },
      {
        name: 'collateralAmountToPull_',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'collateralReceiver_', internalType: 'address', type: 'address' },
      { name: 'limitIndex_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'repayDebt',
    outputs: [
      { name: 'amountRepaid_', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'reservesInfo',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender_', internalType: 'address', type: 'address' },
      { name: 'indexes_', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'revokeLPAllowance',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'transferors_', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'revokeLPTransferors',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'borrowerAddress_', internalType: 'address', type: 'address' },
      { name: 'maxDepth_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'settle',
    outputs: [
      { name: 'collateralSettled_', internalType: 'uint256', type: 'uint256' },
      { name: 'isBorrowerSettled_', internalType: 'bool', type: 'bool' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'stampLoan',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'borrowerAddress_', internalType: 'address', type: 'address' },
      { name: 'maxAmount_', internalType: 'uint256', type: 'uint256' },
      { name: 'callee_', internalType: 'address', type: 'address' },
      { name: 'data_', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'take',
    outputs: [
      { name: 'collateralTaken_', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'maxAmount_', internalType: 'uint256', type: 'uint256' }],
    name: 'takeReserves',
    outputs: [{ name: 'amount_', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalAuctionsInPool',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalT0Debt',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalT0DebtInAuction',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'owner_', internalType: 'address', type: 'address' },
      { name: 'newOwner_', internalType: 'address', type: 'address' },
      { name: 'indexes_', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'transferLP',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'updateInterest',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient_', internalType: 'address', type: 'address' },
      { name: 'maxAmount_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'withdrawBonds',
    outputs: [
      { name: 'withdrawnAmount_', internalType: 'uint256', type: 'uint256' },
    ],
  },
] as const

/**
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const erc20PoolAddress = {
  1: '0x4B3B9A972a884e37FD675ee57F6998da0BE47e26',
} as const

/**
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const erc20PoolConfig = {
  address: erc20PoolAddress,
  abi: erc20PoolAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20PoolFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625)
 */
export const erc20PoolFactoryAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: 'ajna_', internalType: 'address', type: 'address' }],
  },
  { type: 'error', inputs: [], name: 'CreateFail' },
  { type: 'error', inputs: [], name: 'DecimalsNotCompliant' },
  { type: 'error', inputs: [], name: 'DeployQuoteCollateralSameToken' },
  { type: 'error', inputs: [], name: 'DeployWithZeroAddress' },
  {
    type: 'error',
    inputs: [{ name: 'pool_', internalType: 'address', type: 'address' }],
    name: 'PoolAlreadyExists',
  },
  { type: 'error', inputs: [], name: 'PoolInterestRateInvalid' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pool_',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'subsetHash_',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'PoolCreated',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'ERC20_NON_SUBSET_HASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'MAX_RATE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'MIN_RATE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'ajna',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'collateral_', internalType: 'address', type: 'address' },
      { name: 'quote_', internalType: 'address', type: 'address' },
      { name: 'interestRate_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'deployPool',
    outputs: [{ name: 'pool_', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'deployedPools',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'deployedPoolsList',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getDeployedPoolsList',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getNumberOfDeployedPools',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'implementation',
    outputs: [
      { name: '', internalType: 'contract ERC20Pool', type: 'address' },
    ],
  },
] as const

/**
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625)
 */
export const erc20PoolFactoryAddress = {
  1: '0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625',
} as const

/**
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625)
 */
export const erc20PoolFactoryConfig = {
  address: erc20PoolFactoryAddress,
  abi: erc20PoolFactoryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PoolInfoUtils
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const poolInfoUtilsAbi = [
  { type: 'error', inputs: [], name: 'BucketIndexOutOfBounds' },
  { type: 'error', inputs: [], name: 'BucketPriceOutOfBounds' },
  {
    type: 'error',
    inputs: [{ name: 'x', internalType: 'int256', type: 'int256' }],
    name: 'PRBMathSD59x18__CeilOverflow',
  },
  { type: 'error', inputs: [], name: 'PRBMathSD59x18__DivInputTooSmall' },
  {
    type: 'error',
    inputs: [{ name: 'rAbs', internalType: 'uint256', type: 'uint256' }],
    name: 'PRBMathSD59x18__DivOverflow',
  },
  {
    type: 'error',
    inputs: [{ name: 'x', internalType: 'int256', type: 'int256' }],
    name: 'PRBMathSD59x18__Exp2InputTooBig',
  },
  {
    type: 'error',
    inputs: [{ name: 'x', internalType: 'int256', type: 'int256' }],
    name: 'PRBMathSD59x18__FromIntOverflow',
  },
  {
    type: 'error',
    inputs: [{ name: 'x', internalType: 'int256', type: 'int256' }],
    name: 'PRBMathSD59x18__FromIntUnderflow',
  },
  {
    type: 'error',
    inputs: [{ name: 'x', internalType: 'int256', type: 'int256' }],
    name: 'PRBMathSD59x18__LogInputTooSmall',
  },
  { type: 'error', inputs: [], name: 'PRBMathSD59x18__MulInputTooSmall' },
  {
    type: 'error',
    inputs: [{ name: 'rAbs', internalType: 'uint256', type: 'uint256' }],
    name: 'PRBMathSD59x18__MulOverflow',
  },
  {
    type: 'error',
    inputs: [{ name: 'prod1', internalType: 'uint256', type: 'uint256' }],
    name: 'PRBMath__MulDivFixedPointOverflow',
  },
  {
    type: 'error',
    inputs: [
      { name: 'prod1', internalType: 'uint256', type: 'uint256' },
      { name: 'denominator', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PRBMath__MulDivOverflow',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'ajnaPool_', internalType: 'address', type: 'address' },
      { name: 'borrower_', internalType: 'address', type: 'address' },
    ],
    name: 'auctionInfo',
    outputs: [
      { name: 'kicker_', internalType: 'address', type: 'address' },
      { name: 'bondFactor_', internalType: 'uint256', type: 'uint256' },
      { name: 'bondSize_', internalType: 'uint256', type: 'uint256' },
      { name: 'kickTime_', internalType: 'uint256', type: 'uint256' },
      { name: 'referencePrice_', internalType: 'uint256', type: 'uint256' },
      { name: 'neutralPrice_', internalType: 'uint256', type: 'uint256' },
      { name: 'debtToCollateral_', internalType: 'uint256', type: 'uint256' },
      { name: 'head_', internalType: 'address', type: 'address' },
      { name: 'next_', internalType: 'address', type: 'address' },
      { name: 'prev_', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'ajnaPool_', internalType: 'address', type: 'address' },
      { name: 'borrower_', internalType: 'address', type: 'address' },
    ],
    name: 'auctionStatus',
    outputs: [
      { name: 'kickTime_', internalType: 'uint256', type: 'uint256' },
      { name: 'collateral_', internalType: 'uint256', type: 'uint256' },
      { name: 'debtToCover_', internalType: 'uint256', type: 'uint256' },
      { name: 'isCollateralized_', internalType: 'bool', type: 'bool' },
      { name: 'price_', internalType: 'uint256', type: 'uint256' },
      { name: 'neutralPrice_', internalType: 'uint256', type: 'uint256' },
      { name: 'referencePrice_', internalType: 'uint256', type: 'uint256' },
      { name: 'debtToCollateral_', internalType: 'uint256', type: 'uint256' },
      { name: 'bondFactor_', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'ajnaPool_', internalType: 'address', type: 'address' }],
    name: 'availableQuoteTokenAmount',
    outputs: [{ name: 'amount_', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'ajnaPool_', internalType: 'address', type: 'address' }],
    name: 'borrowFeeRate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'ajnaPool_', internalType: 'address', type: 'address' },
      { name: 'borrower_', internalType: 'address', type: 'address' },
    ],
    name: 'borrowerInfo',
    outputs: [
      { name: 'debt_', internalType: 'uint256', type: 'uint256' },
      { name: 'collateral_', internalType: 'uint256', type: 'uint256' },
      { name: 't0Np_', internalType: 'uint256', type: 'uint256' },
      { name: 'thresholdPrice_', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'ajnaPool_', internalType: 'address', type: 'address' },
      { name: 'index_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'bucketInfo',
    outputs: [
      { name: 'price_', internalType: 'uint256', type: 'uint256' },
      { name: 'quoteTokens_', internalType: 'uint256', type: 'uint256' },
      { name: 'collateral_', internalType: 'uint256', type: 'uint256' },
      { name: 'bucketLP_', internalType: 'uint256', type: 'uint256' },
      { name: 'scale_', internalType: 'uint256', type: 'uint256' },
      { name: 'exchangeRate_', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'ajnaPool_', internalType: 'address', type: 'address' }],
    name: 'depositFeeRate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'ajnaPool_', internalType: 'address', type: 'address' }],
    name: 'hpb',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'ajnaPool_', internalType: 'address', type: 'address' }],
    name: 'hpbIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'ajnaPool_', internalType: 'address', type: 'address' }],
    name: 'htp',
    outputs: [{ name: 'htp_', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'index_', internalType: 'uint256', type: 'uint256' }],
    name: 'indexToPrice',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'ajnaPool_', internalType: 'address', type: 'address' }],
    name: 'lenderInterestMargin',
    outputs: [
      {
        name: 'lenderInterestMargin_',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'ajnaPool_', internalType: 'address', type: 'address' },
      { name: 'lp_', internalType: 'uint256', type: 'uint256' },
      { name: 'index_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'lpToCollateral',
    outputs: [
      { name: 'collateralAmount_', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'ajnaPool_', internalType: 'address', type: 'address' },
      { name: 'lp_', internalType: 'uint256', type: 'uint256' },
      { name: 'index_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'lpToQuoteTokens',
    outputs: [
      { name: 'quoteAmount_', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'ajnaPool_', internalType: 'address', type: 'address' }],
    name: 'lup',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'ajnaPool_', internalType: 'address', type: 'address' }],
    name: 'lupIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'ajnaPool_', internalType: 'address', type: 'address' }],
    name: 'poolLoansInfo',
    outputs: [
      { name: 'poolSize_', internalType: 'uint256', type: 'uint256' },
      { name: 'loansCount_', internalType: 'uint256', type: 'uint256' },
      { name: 'maxBorrower_', internalType: 'address', type: 'address' },
      { name: 'pendingInflator_', internalType: 'uint256', type: 'uint256' },
      {
        name: 'pendingInterestFactor_',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'ajnaPool_', internalType: 'address', type: 'address' }],
    name: 'poolPricesInfo',
    outputs: [
      { name: 'hpb_', internalType: 'uint256', type: 'uint256' },
      { name: 'hpbIndex_', internalType: 'uint256', type: 'uint256' },
      { name: 'htp_', internalType: 'uint256', type: 'uint256' },
      { name: 'htpIndex_', internalType: 'uint256', type: 'uint256' },
      { name: 'lup_', internalType: 'uint256', type: 'uint256' },
      { name: 'lupIndex_', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'ajnaPool_', internalType: 'address', type: 'address' }],
    name: 'poolReservesInfo',
    outputs: [
      { name: 'reserves_', internalType: 'uint256', type: 'uint256' },
      { name: 'claimableReserves_', internalType: 'uint256', type: 'uint256' },
      {
        name: 'claimableReservesRemaining_',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'auctionPrice_', internalType: 'uint256', type: 'uint256' },
      { name: 'timeRemaining_', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'ajnaPool_', internalType: 'address', type: 'address' }],
    name: 'poolUtilizationInfo',
    outputs: [
      { name: 'poolMinDebtAmount_', internalType: 'uint256', type: 'uint256' },
      {
        name: 'poolCollateralization_',
        internalType: 'uint256',
        type: 'uint256',
      },
      {
        name: 'poolActualUtilization_',
        internalType: 'uint256',
        type: 'uint256',
      },
      {
        name: 'poolTargetUtilization_',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'price_', internalType: 'uint256', type: 'uint256' }],
    name: 'priceToIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
] as const

/**
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const poolInfoUtilsAddress = {
  1: '0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE',
} as const

/**
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const poolInfoUtilsConfig = {
  address: poolInfoUtilsAddress,
  abi: poolInfoUtilsAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20Pool = /*#__PURE__*/ createUseReadContract({
  abi: erc20PoolAbi,
  address: erc20PoolAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"approvedTransferors"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolApprovedTransferors =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'approvedTransferors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"auctionInfo"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolAuctionInfo = /*#__PURE__*/ createUseReadContract({
  abi: erc20PoolAbi,
  address: erc20PoolAddress,
  functionName: 'auctionInfo',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"borrowerInfo"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolBorrowerInfo = /*#__PURE__*/ createUseReadContract(
  {
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'borrowerInfo',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"bucketCollateralDust"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolBucketCollateralDust =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'bucketCollateralDust',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"bucketExchangeRate"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolBucketExchangeRate =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'bucketExchangeRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"bucketInfo"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolBucketInfo = /*#__PURE__*/ createUseReadContract({
  abi: erc20PoolAbi,
  address: erc20PoolAddress,
  functionName: 'bucketInfo',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"burnInfo"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolBurnInfo = /*#__PURE__*/ createUseReadContract({
  abi: erc20PoolAbi,
  address: erc20PoolAddress,
  functionName: 'burnInfo',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"collateralAddress"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolCollateralAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'collateralAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"collateralScale"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolCollateralScale =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'collateralScale',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"currentBurnEpoch"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolCurrentBurnEpoch =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'currentBurnEpoch',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"debtInfo"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolDebtInfo = /*#__PURE__*/ createUseReadContract({
  abi: erc20PoolAbi,
  address: erc20PoolAddress,
  functionName: 'debtInfo',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"depositIndex"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolDepositIndex = /*#__PURE__*/ createUseReadContract(
  {
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'depositIndex',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"depositScale"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolDepositScale = /*#__PURE__*/ createUseReadContract(
  {
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'depositScale',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"depositSize"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolDepositSize = /*#__PURE__*/ createUseReadContract({
  abi: erc20PoolAbi,
  address: erc20PoolAddress,
  functionName: 'depositSize',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"depositUpToIndex"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolDepositUpToIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'depositUpToIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"depositUtilization"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolDepositUtilization =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'depositUtilization',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"emasInfo"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolEmasInfo = /*#__PURE__*/ createUseReadContract({
  abi: erc20PoolAbi,
  address: erc20PoolAddress,
  functionName: 'emasInfo',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"flashFee"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolFlashFee = /*#__PURE__*/ createUseReadContract({
  abi: erc20PoolAbi,
  address: erc20PoolAddress,
  functionName: 'flashFee',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"inflatorInfo"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolInflatorInfo = /*#__PURE__*/ createUseReadContract(
  {
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'inflatorInfo',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"interestRateInfo"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolInterestRateInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'interestRateInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"kickerInfo"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolKickerInfo = /*#__PURE__*/ createUseReadContract({
  abi: erc20PoolAbi,
  address: erc20PoolAddress,
  functionName: 'kickerInfo',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"lenderInfo"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolLenderInfo = /*#__PURE__*/ createUseReadContract({
  abi: erc20PoolAbi,
  address: erc20PoolAddress,
  functionName: 'lenderInfo',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"loanInfo"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolLoanInfo = /*#__PURE__*/ createUseReadContract({
  abi: erc20PoolAbi,
  address: erc20PoolAddress,
  functionName: 'loanInfo',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"loansInfo"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolLoansInfo = /*#__PURE__*/ createUseReadContract({
  abi: erc20PoolAbi,
  address: erc20PoolAddress,
  functionName: 'loansInfo',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"lpAllowance"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolLpAllowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20PoolAbi,
  address: erc20PoolAddress,
  functionName: 'lpAllowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"maxFlashLoan"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolMaxFlashLoan = /*#__PURE__*/ createUseReadContract(
  {
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'maxFlashLoan',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"pledgedCollateral"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolPledgedCollateral =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'pledgedCollateral',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"poolType"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolPoolType = /*#__PURE__*/ createUseReadContract({
  abi: erc20PoolAbi,
  address: erc20PoolAddress,
  functionName: 'poolType',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"quoteTokenAddress"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolQuoteTokenAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'quoteTokenAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"quoteTokenScale"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolQuoteTokenScale =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'quoteTokenScale',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"reservesInfo"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolReservesInfo = /*#__PURE__*/ createUseReadContract(
  {
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'reservesInfo',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"totalAuctionsInPool"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolTotalAuctionsInPool =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'totalAuctionsInPool',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"totalT0Debt"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolTotalT0Debt = /*#__PURE__*/ createUseReadContract({
  abi: erc20PoolAbi,
  address: erc20PoolAddress,
  functionName: 'totalT0Debt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"totalT0DebtInAuction"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useReadErc20PoolTotalT0DebtInAuction =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'totalT0DebtInAuction',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolAbi}__
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWriteErc20Pool = /*#__PURE__*/ createUseWriteContract({
  abi: erc20PoolAbi,
  address: erc20PoolAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"addCollateral"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWriteErc20PoolAddCollateral =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'addCollateral',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"addQuoteToken"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWriteErc20PoolAddQuoteToken =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'addQuoteToken',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"approveLPTransferors"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWriteErc20PoolApproveLpTransferors =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'approveLPTransferors',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"bucketTake"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWriteErc20PoolBucketTake = /*#__PURE__*/ createUseWriteContract(
  { abi: erc20PoolAbi, address: erc20PoolAddress, functionName: 'bucketTake' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"decreaseLPAllowance"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWriteErc20PoolDecreaseLpAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'decreaseLPAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"drawDebt"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWriteErc20PoolDrawDebt = /*#__PURE__*/ createUseWriteContract({
  abi: erc20PoolAbi,
  address: erc20PoolAddress,
  functionName: 'drawDebt',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"flashLoan"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWriteErc20PoolFlashLoan = /*#__PURE__*/ createUseWriteContract({
  abi: erc20PoolAbi,
  address: erc20PoolAddress,
  functionName: 'flashLoan',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"increaseLPAllowance"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWriteErc20PoolIncreaseLpAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'increaseLPAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWriteErc20PoolInitialize = /*#__PURE__*/ createUseWriteContract(
  { abi: erc20PoolAbi, address: erc20PoolAddress, functionName: 'initialize' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"kick"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWriteErc20PoolKick = /*#__PURE__*/ createUseWriteContract({
  abi: erc20PoolAbi,
  address: erc20PoolAddress,
  functionName: 'kick',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"kickReserveAuction"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWriteErc20PoolKickReserveAuction =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'kickReserveAuction',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"lenderKick"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWriteErc20PoolLenderKick = /*#__PURE__*/ createUseWriteContract(
  { abi: erc20PoolAbi, address: erc20PoolAddress, functionName: 'lenderKick' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"moveQuoteToken"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWriteErc20PoolMoveQuoteToken =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'moveQuoteToken',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"multicall"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWriteErc20PoolMulticall = /*#__PURE__*/ createUseWriteContract({
  abi: erc20PoolAbi,
  address: erc20PoolAddress,
  functionName: 'multicall',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"removeCollateral"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWriteErc20PoolRemoveCollateral =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'removeCollateral',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"removeQuoteToken"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWriteErc20PoolRemoveQuoteToken =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'removeQuoteToken',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"repayDebt"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWriteErc20PoolRepayDebt = /*#__PURE__*/ createUseWriteContract({
  abi: erc20PoolAbi,
  address: erc20PoolAddress,
  functionName: 'repayDebt',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"revokeLPAllowance"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWriteErc20PoolRevokeLpAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'revokeLPAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"revokeLPTransferors"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWriteErc20PoolRevokeLpTransferors =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'revokeLPTransferors',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"settle"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWriteErc20PoolSettle = /*#__PURE__*/ createUseWriteContract({
  abi: erc20PoolAbi,
  address: erc20PoolAddress,
  functionName: 'settle',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"stampLoan"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWriteErc20PoolStampLoan = /*#__PURE__*/ createUseWriteContract({
  abi: erc20PoolAbi,
  address: erc20PoolAddress,
  functionName: 'stampLoan',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"take"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWriteErc20PoolTake = /*#__PURE__*/ createUseWriteContract({
  abi: erc20PoolAbi,
  address: erc20PoolAddress,
  functionName: 'take',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"takeReserves"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWriteErc20PoolTakeReserves =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'takeReserves',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"transferLP"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWriteErc20PoolTransferLp = /*#__PURE__*/ createUseWriteContract(
  { abi: erc20PoolAbi, address: erc20PoolAddress, functionName: 'transferLP' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"updateInterest"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWriteErc20PoolUpdateInterest =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'updateInterest',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"withdrawBonds"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWriteErc20PoolWithdrawBonds =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'withdrawBonds',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolAbi}__
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useSimulateErc20Pool = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20PoolAbi,
  address: erc20PoolAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"addCollateral"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useSimulateErc20PoolAddCollateral =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'addCollateral',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"addQuoteToken"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useSimulateErc20PoolAddQuoteToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'addQuoteToken',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"approveLPTransferors"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useSimulateErc20PoolApproveLpTransferors =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'approveLPTransferors',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"bucketTake"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useSimulateErc20PoolBucketTake =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'bucketTake',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"decreaseLPAllowance"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useSimulateErc20PoolDecreaseLpAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'decreaseLPAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"drawDebt"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useSimulateErc20PoolDrawDebt =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'drawDebt',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"flashLoan"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useSimulateErc20PoolFlashLoan =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'flashLoan',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"increaseLPAllowance"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useSimulateErc20PoolIncreaseLpAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'increaseLPAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useSimulateErc20PoolInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"kick"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useSimulateErc20PoolKick = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20PoolAbi, address: erc20PoolAddress, functionName: 'kick' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"kickReserveAuction"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useSimulateErc20PoolKickReserveAuction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'kickReserveAuction',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"lenderKick"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useSimulateErc20PoolLenderKick =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'lenderKick',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"moveQuoteToken"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useSimulateErc20PoolMoveQuoteToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'moveQuoteToken',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"multicall"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useSimulateErc20PoolMulticall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'multicall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"removeCollateral"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useSimulateErc20PoolRemoveCollateral =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'removeCollateral',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"removeQuoteToken"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useSimulateErc20PoolRemoveQuoteToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'removeQuoteToken',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"repayDebt"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useSimulateErc20PoolRepayDebt =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'repayDebt',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"revokeLPAllowance"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useSimulateErc20PoolRevokeLpAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'revokeLPAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"revokeLPTransferors"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useSimulateErc20PoolRevokeLpTransferors =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'revokeLPTransferors',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"settle"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useSimulateErc20PoolSettle =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'settle',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"stampLoan"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useSimulateErc20PoolStampLoan =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'stampLoan',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"take"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useSimulateErc20PoolTake = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20PoolAbi, address: erc20PoolAddress, functionName: 'take' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"takeReserves"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useSimulateErc20PoolTakeReserves =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'takeReserves',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"transferLP"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useSimulateErc20PoolTransferLp =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'transferLP',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"updateInterest"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useSimulateErc20PoolUpdateInterest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'updateInterest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolAbi}__ and `functionName` set to `"withdrawBonds"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useSimulateErc20PoolWithdrawBonds =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    functionName: 'withdrawBonds',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: erc20PoolAbi, address: erc20PoolAddress },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"AddCollateral"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolAddCollateralEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'AddCollateral',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"AddQuoteToken"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolAddQuoteTokenEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'AddQuoteToken',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"ApproveLPTransferors"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolApproveLpTransferorsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'ApproveLPTransferors',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"AuctionNFTSettle"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolAuctionNftSettleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'AuctionNFTSettle',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"AuctionSettle"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolAuctionSettleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'AuctionSettle',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"BondWithdrawn"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolBondWithdrawnEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'BondWithdrawn',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"BucketBankruptcy"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolBucketBankruptcyEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'BucketBankruptcy',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"BucketTake"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolBucketTakeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'BucketTake',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"BucketTakeLPAwarded"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolBucketTakeLpAwardedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'BucketTakeLPAwarded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"DecreaseLPAllowance"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolDecreaseLpAllowanceEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'DecreaseLPAllowance',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"DrawDebt"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolDrawDebtEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'DrawDebt',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"Flashloan"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolFlashloanEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'Flashloan',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"IncreaseLPAllowance"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolIncreaseLpAllowanceEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'IncreaseLPAllowance',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"InterestUpdateFailure"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolInterestUpdateFailureEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'InterestUpdateFailure',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"Kick"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolKickEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'Kick',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"KickReserveAuction"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolKickReserveAuctionEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'KickReserveAuction',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"LoanStamped"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolLoanStampedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'LoanStamped',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"MoveQuoteToken"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolMoveQuoteTokenEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'MoveQuoteToken',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"RemoveCollateral"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolRemoveCollateralEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'RemoveCollateral',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"RemoveQuoteToken"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolRemoveQuoteTokenEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'RemoveQuoteToken',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"RepayDebt"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolRepayDebtEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'RepayDebt',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"ReserveAuction"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolReserveAuctionEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'ReserveAuction',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"ResetInterestRate"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolResetInterestRateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'ResetInterestRate',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"RevokeLPAllowance"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolRevokeLpAllowanceEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'RevokeLPAllowance',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"RevokeLPTransferors"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolRevokeLpTransferorsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'RevokeLPTransferors',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"Settle"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolSettleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'Settle',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"Take"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolTakeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'Take',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"TransferLP"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolTransferLpEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'TransferLP',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolAbi}__ and `eventName` set to `"UpdateInterestRate"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4B3B9A972a884e37FD675ee57F6998da0BE47e26)
 */
export const useWatchErc20PoolUpdateInterestRateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolAbi,
    address: erc20PoolAddress,
    eventName: 'UpdateInterestRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolFactoryAbi}__
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625)
 */
export const useReadErc20PoolFactory = /*#__PURE__*/ createUseReadContract({
  abi: erc20PoolFactoryAbi,
  address: erc20PoolFactoryAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolFactoryAbi}__ and `functionName` set to `"ERC20_NON_SUBSET_HASH"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625)
 */
export const useReadErc20PoolFactoryErc20NonSubsetHash =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PoolFactoryAbi,
    address: erc20PoolFactoryAddress,
    functionName: 'ERC20_NON_SUBSET_HASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolFactoryAbi}__ and `functionName` set to `"MAX_RATE"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625)
 */
export const useReadErc20PoolFactoryMaxRate =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PoolFactoryAbi,
    address: erc20PoolFactoryAddress,
    functionName: 'MAX_RATE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolFactoryAbi}__ and `functionName` set to `"MIN_RATE"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625)
 */
export const useReadErc20PoolFactoryMinRate =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PoolFactoryAbi,
    address: erc20PoolFactoryAddress,
    functionName: 'MIN_RATE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolFactoryAbi}__ and `functionName` set to `"ajna"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625)
 */
export const useReadErc20PoolFactoryAjna = /*#__PURE__*/ createUseReadContract({
  abi: erc20PoolFactoryAbi,
  address: erc20PoolFactoryAddress,
  functionName: 'ajna',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolFactoryAbi}__ and `functionName` set to `"deployedPools"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625)
 */
export const useReadErc20PoolFactoryDeployedPools =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PoolFactoryAbi,
    address: erc20PoolFactoryAddress,
    functionName: 'deployedPools',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolFactoryAbi}__ and `functionName` set to `"deployedPoolsList"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625)
 */
export const useReadErc20PoolFactoryDeployedPoolsList =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PoolFactoryAbi,
    address: erc20PoolFactoryAddress,
    functionName: 'deployedPoolsList',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolFactoryAbi}__ and `functionName` set to `"getDeployedPoolsList"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625)
 */
export const useReadErc20PoolFactoryGetDeployedPoolsList =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PoolFactoryAbi,
    address: erc20PoolFactoryAddress,
    functionName: 'getDeployedPoolsList',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolFactoryAbi}__ and `functionName` set to `"getNumberOfDeployedPools"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625)
 */
export const useReadErc20PoolFactoryGetNumberOfDeployedPools =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PoolFactoryAbi,
    address: erc20PoolFactoryAddress,
    functionName: 'getNumberOfDeployedPools',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PoolFactoryAbi}__ and `functionName` set to `"implementation"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625)
 */
export const useReadErc20PoolFactoryImplementation =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PoolFactoryAbi,
    address: erc20PoolFactoryAddress,
    functionName: 'implementation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolFactoryAbi}__
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625)
 */
export const useWriteErc20PoolFactory = /*#__PURE__*/ createUseWriteContract({
  abi: erc20PoolFactoryAbi,
  address: erc20PoolFactoryAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PoolFactoryAbi}__ and `functionName` set to `"deployPool"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625)
 */
export const useWriteErc20PoolFactoryDeployPool =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20PoolFactoryAbi,
    address: erc20PoolFactoryAddress,
    functionName: 'deployPool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolFactoryAbi}__
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625)
 */
export const useSimulateErc20PoolFactory =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PoolFactoryAbi,
    address: erc20PoolFactoryAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PoolFactoryAbi}__ and `functionName` set to `"deployPool"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625)
 */
export const useSimulateErc20PoolFactoryDeployPool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PoolFactoryAbi,
    address: erc20PoolFactoryAddress,
    functionName: 'deployPool',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolFactoryAbi}__
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625)
 */
export const useWatchErc20PoolFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolFactoryAbi,
    address: erc20PoolFactoryAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PoolFactoryAbi}__ and `eventName` set to `"PoolCreated"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625)
 */
export const useWatchErc20PoolFactoryPoolCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PoolFactoryAbi,
    address: erc20PoolFactoryAddress,
    eventName: 'PoolCreated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolInfoUtilsAbi}__
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const useReadPoolInfoUtils = /*#__PURE__*/ createUseReadContract({
  abi: poolInfoUtilsAbi,
  address: poolInfoUtilsAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolInfoUtilsAbi}__ and `functionName` set to `"auctionInfo"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const useReadPoolInfoUtilsAuctionInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: poolInfoUtilsAbi,
    address: poolInfoUtilsAddress,
    functionName: 'auctionInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolInfoUtilsAbi}__ and `functionName` set to `"auctionStatus"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const useReadPoolInfoUtilsAuctionStatus =
  /*#__PURE__*/ createUseReadContract({
    abi: poolInfoUtilsAbi,
    address: poolInfoUtilsAddress,
    functionName: 'auctionStatus',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolInfoUtilsAbi}__ and `functionName` set to `"availableQuoteTokenAmount"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const useReadPoolInfoUtilsAvailableQuoteTokenAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: poolInfoUtilsAbi,
    address: poolInfoUtilsAddress,
    functionName: 'availableQuoteTokenAmount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolInfoUtilsAbi}__ and `functionName` set to `"borrowFeeRate"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const useReadPoolInfoUtilsBorrowFeeRate =
  /*#__PURE__*/ createUseReadContract({
    abi: poolInfoUtilsAbi,
    address: poolInfoUtilsAddress,
    functionName: 'borrowFeeRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolInfoUtilsAbi}__ and `functionName` set to `"borrowerInfo"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const useReadPoolInfoUtilsBorrowerInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: poolInfoUtilsAbi,
    address: poolInfoUtilsAddress,
    functionName: 'borrowerInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolInfoUtilsAbi}__ and `functionName` set to `"bucketInfo"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const useReadPoolInfoUtilsBucketInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: poolInfoUtilsAbi,
    address: poolInfoUtilsAddress,
    functionName: 'bucketInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolInfoUtilsAbi}__ and `functionName` set to `"depositFeeRate"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const useReadPoolInfoUtilsDepositFeeRate =
  /*#__PURE__*/ createUseReadContract({
    abi: poolInfoUtilsAbi,
    address: poolInfoUtilsAddress,
    functionName: 'depositFeeRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolInfoUtilsAbi}__ and `functionName` set to `"hpb"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const useReadPoolInfoUtilsHpb = /*#__PURE__*/ createUseReadContract({
  abi: poolInfoUtilsAbi,
  address: poolInfoUtilsAddress,
  functionName: 'hpb',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolInfoUtilsAbi}__ and `functionName` set to `"hpbIndex"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const useReadPoolInfoUtilsHpbIndex = /*#__PURE__*/ createUseReadContract(
  {
    abi: poolInfoUtilsAbi,
    address: poolInfoUtilsAddress,
    functionName: 'hpbIndex',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolInfoUtilsAbi}__ and `functionName` set to `"htp"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const useReadPoolInfoUtilsHtp = /*#__PURE__*/ createUseReadContract({
  abi: poolInfoUtilsAbi,
  address: poolInfoUtilsAddress,
  functionName: 'htp',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolInfoUtilsAbi}__ and `functionName` set to `"indexToPrice"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const useReadPoolInfoUtilsIndexToPrice =
  /*#__PURE__*/ createUseReadContract({
    abi: poolInfoUtilsAbi,
    address: poolInfoUtilsAddress,
    functionName: 'indexToPrice',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolInfoUtilsAbi}__ and `functionName` set to `"lenderInterestMargin"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const useReadPoolInfoUtilsLenderInterestMargin =
  /*#__PURE__*/ createUseReadContract({
    abi: poolInfoUtilsAbi,
    address: poolInfoUtilsAddress,
    functionName: 'lenderInterestMargin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolInfoUtilsAbi}__ and `functionName` set to `"lpToCollateral"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const useReadPoolInfoUtilsLpToCollateral =
  /*#__PURE__*/ createUseReadContract({
    abi: poolInfoUtilsAbi,
    address: poolInfoUtilsAddress,
    functionName: 'lpToCollateral',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolInfoUtilsAbi}__ and `functionName` set to `"lpToQuoteTokens"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const useReadPoolInfoUtilsLpToQuoteTokens =
  /*#__PURE__*/ createUseReadContract({
    abi: poolInfoUtilsAbi,
    address: poolInfoUtilsAddress,
    functionName: 'lpToQuoteTokens',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolInfoUtilsAbi}__ and `functionName` set to `"lup"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const useReadPoolInfoUtilsLup = /*#__PURE__*/ createUseReadContract({
  abi: poolInfoUtilsAbi,
  address: poolInfoUtilsAddress,
  functionName: 'lup',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolInfoUtilsAbi}__ and `functionName` set to `"lupIndex"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const useReadPoolInfoUtilsLupIndex = /*#__PURE__*/ createUseReadContract(
  {
    abi: poolInfoUtilsAbi,
    address: poolInfoUtilsAddress,
    functionName: 'lupIndex',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolInfoUtilsAbi}__ and `functionName` set to `"poolLoansInfo"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const useReadPoolInfoUtilsPoolLoansInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: poolInfoUtilsAbi,
    address: poolInfoUtilsAddress,
    functionName: 'poolLoansInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolInfoUtilsAbi}__ and `functionName` set to `"poolPricesInfo"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const useReadPoolInfoUtilsPoolPricesInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: poolInfoUtilsAbi,
    address: poolInfoUtilsAddress,
    functionName: 'poolPricesInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolInfoUtilsAbi}__ and `functionName` set to `"poolReservesInfo"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const useReadPoolInfoUtilsPoolReservesInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: poolInfoUtilsAbi,
    address: poolInfoUtilsAddress,
    functionName: 'poolReservesInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolInfoUtilsAbi}__ and `functionName` set to `"poolUtilizationInfo"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const useReadPoolInfoUtilsPoolUtilizationInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: poolInfoUtilsAbi,
    address: poolInfoUtilsAddress,
    functionName: 'poolUtilizationInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolInfoUtilsAbi}__ and `functionName` set to `"priceToIndex"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const useReadPoolInfoUtilsPriceToIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: poolInfoUtilsAbi,
    address: poolInfoUtilsAddress,
    functionName: 'priceToIndex',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolInfoUtilsAbi}__
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const useWritePoolInfoUtils = /*#__PURE__*/ createUseWriteContract({
  abi: poolInfoUtilsAbi,
  address: poolInfoUtilsAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolInfoUtilsAbi}__ and `functionName` set to `"multicall"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const useWritePoolInfoUtilsMulticall =
  /*#__PURE__*/ createUseWriteContract({
    abi: poolInfoUtilsAbi,
    address: poolInfoUtilsAddress,
    functionName: 'multicall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolInfoUtilsAbi}__
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const useSimulatePoolInfoUtils = /*#__PURE__*/ createUseSimulateContract(
  { abi: poolInfoUtilsAbi, address: poolInfoUtilsAddress },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolInfoUtilsAbi}__ and `functionName` set to `"multicall"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE)
 */
export const useSimulatePoolInfoUtilsMulticall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolInfoUtilsAbi,
    address: poolInfoUtilsAddress,
    functionName: 'multicall',
  })
