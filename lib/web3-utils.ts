/**
 * Web3 Utility Functions for interacting with smart contracts
 * Handles wallet connections, contract reads, and transactions
 */

import { SLERF_CONTRACT_ADDRESS, SLERF_ABI, BASE_CHAIN_ID } from "./slerf-contract"

// Format token amounts from wei to readable format
export const formatTokenAmount = (
  amount: bigint | string | number,
  decimals: number = 18
): string => {
  const numAmount = typeof amount === "string" ? BigInt(amount) : amount
  const divisor = BigInt(10 ** decimals)
  const whole = numAmount / divisor
  const fractional = numAmount % divisor
  const fractionalStr = fractional.toString().padStart(decimals, "0")
  return `${whole}.${fractionalStr.slice(0, 6)}`
}

// Parse token amounts from readable format to wei
export const parseTokenAmount = (
  amount: string | number,
  decimals: number = 18
): bigint => {
  const str = amount.toString()
  const [whole, fractional] = str.split(".")
  const wholeBigInt = BigInt(whole || 0)
  const fractionalBigInt = BigInt((fractional || "").padEnd(decimals, "0"))
  return wholeBigInt * BigInt(10 ** decimals) + fractionalBigInt
}

// Validate Ethereum address format
export const isValidAddress = (address: string): boolean => {
  return /^0x[a-fA-F0-9]{40}$/.test(address)
}

// Shorten address for display (0x1234...5678)
export const shortenAddress = (address: string, chars: number = 4): string => {
  if (!isValidAddress(address)) return ""
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`
}

// Check if wallet is connected to Base network
export const isBaseNetwork = (chainId: number | string): boolean => {
  const id = typeof chainId === "string" ? parseInt(chainId) : chainId
  return id === BASE_CHAIN_ID
}

// Get network name by chain ID
export const getNetworkName = (chainId: number): string => {
  const networks: { [key: number]: string } = {
    1: "Ethereum",
    8453: "Base",
    137: "Polygon",
    42161: "Arbitrum",
    10: "Optimism",
  }
  return networks[chainId] || "Unknown"
}

// Calculate token value in USD
export const calculateTokenValue = (
  amount: string | number,
  pricePerToken: number,
  decimals: number = 18
): number => {
  const tokenAmount = typeof amount === "string" ? parseFloat(amount) : amount
  return tokenAmount * pricePerToken
}

// Format currency (USD)
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

// Estimate gas for transaction (placeholder - use ethers.js or web3.js for real calculation)
export const estimateGasCost = (gasPrice: number, gasLimit: number): bigint => {
  return BigInt(gasPrice) * BigInt(gasLimit)
}
