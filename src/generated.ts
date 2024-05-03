import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
} from 'wagmi/codegen'

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
