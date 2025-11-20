'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface PayoutData {
  ownerAddress: string
  currentWeekRevenue: number
  breakdown: {
    tradingFees: number
    liquidityFees: number
    premiumSubscriptions: number
    nftCommissions: number
    sponsorships: number
    apiAccess: number
  }
  nextPayoutDate: string
  daysUntilPayout: number
  payoutHistory: Array<{
    id: string
    date: string
    totalAmount: number
    status: string
    txHash?: string
  }>
  totalPayoutsAllTime: number
}

export function PayoutTracker() {
  const [payoutData, setPayoutData] = useState<PayoutData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPayoutData = async () => {
      try {
        const response = await fetch('/api/payout/track')
        if (!response.ok) throw new Error('Failed to fetch payout data')
        const data = await response.json()
        setPayoutData(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchPayoutData()
    const interval = setInterval(fetchPayoutData, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (loading) return <div className="text-white text-center">Loading payout data...</div>
  if (error) return <div className="text-red-400 text-center">Error: {error}</div>
  if (!payoutData) return <div className="text-white text-center">No data available</div>

  return (
    <div className="space-y-6">
      {/* Main Payout Card */}
      <Card className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border-blue-500/50">
        <CardHeader>
          <CardTitle className="text-2xl text-yellow-400">Automated Weekly Payouts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-white/70 text-sm">Owner Address</p>
              <p className="text-yellow-400 font-mono text-sm truncate">{payoutData.ownerAddress}</p>
            </div>
            <div>
              <p className="text-white/70 text-sm">Next Payout</p>
              <p className="text-green-400 font-bold">{payoutData.daysUntilPayout} days</p>
            </div>
          </div>

          <div className="bg-black/30 p-4 rounded-lg">
            <p className="text-white/70 text-sm mb-2">This Week's Earnings</p>
            <div className="text-4xl font-bold text-green-400 mb-2">${payoutData.currentWeekRevenue}</div>
            <p className="text-white/50 text-xs">Scheduled for {new Date(payoutData.nextPayoutDate).toLocaleDateString()}</p>
          </div>

          {/* Revenue Breakdown */}
          <div className="space-y-2">
            <p className="text-white/70 text-sm font-bold">Revenue Sources</p>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-white/60">
                <span>Trading Fees:</span>
                <span className="text-green-400">${payoutData.breakdown.tradingFees}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Liquidity Fees:</span>
                <span className="text-green-400">${payoutData.breakdown.liquidityFees}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Premium Subscriptions:</span>
                <span className="text-green-400">${payoutData.breakdown.premiumSubscriptions}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>NFT Commissions:</span>
                <span className="text-green-400">${payoutData.breakdown.nftCommissions}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Sponsorships:</span>
                <span className="text-green-400">${payoutData.breakdown.sponsorships}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>API Access:</span>
                <span className="text-green-400">${payoutData.breakdown.apiAccess}</span>
              </div>
            </div>
          </div>

          <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold">
            View Full Dashboard
          </Button>
        </CardContent>
      </Card>

      {/* Payout History */}
      <Card className="bg-black/40 border-white/10">
        <CardHeader>
          <CardTitle className="text-yellow-400">Payout History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {payoutData.payoutHistory.length > 0 ? (
              <>
                {payoutData.payoutHistory.map((payout) => (
                  <div key={payout.id} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <div>
                      <p className="text-white font-semibold">${payout.totalAmount}</p>
                      <p className="text-white/50 text-xs">{new Date(payout.date).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-xs font-bold ${payout.status === 'completed' ? 'text-green-400' : 'text-yellow-400'}`}>
                        {payout.status.toUpperCase()}
                      </p>
                      {payout.txHash && (
                        <a
                          href={`https://basescan.org/tx/${payout.txHash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 text-xs hover:underline"
                        >
                          View Tx
                        </a>
                      )}
                    </div>
                  </div>
                ))}
                <div className="border-t border-white/10 pt-3 mt-3">
                  <p className="text-white/70 text-sm">Total All-Time Payouts</p>
                  <p className="text-green-400 text-2xl font-bold">${payoutData.totalPayoutsAllTime}</p>
                </div>
              </>
            ) : (
              <p className="text-white/50 text-center py-4">No payouts yet. Your first payout will be {payoutData.daysUntilPayout} days</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
