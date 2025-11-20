// Configuration for automated weekly payouts
export const PAYOUT_CONFIG = {
  OWNER_ADDRESS: '0xFfb6505912FCE95B42be4860477201bb4e204E9f',
  PAYMENT_DAY: 0, // Sunday
  PAYMENT_HOUR: 12, // 12 PM UTC
  MIN_PAYOUT: 100, // Minimum $100 to trigger payout
  SLERF_CONTRACT: '0x233df63325933fa3f2dac8e695cd84bb2f91ab07',
  BASE_RPC: process.env.NEXT_PUBLIC_BASE_RPC_URL,
  PRIVATE_KEY: process.env.PAYOUT_BOT_PRIVATE_KEY, // Store securely in Vercel env vars
}

export interface PayoutRecord {
  id: string
  date: string
  totalAmount: number
  breakdown: {
    tradingFees: number
    liquidityFees: number
    premiumSubscriptions: number
    nftCommissions: number
    sponsorships: number
    apiAccess: number
  }
  txHash?: string
  status: 'pending' | 'completed' | 'failed'
  timestamp: number
}
