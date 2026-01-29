"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import Link from "next/link"

export default function DashboardPage() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [walletAddress] = useState("0x742d...7e3f")

  const portfolioData = {
    totalBalance: 125430.45,
    balanceChange: 12450.20,
    percentChange: 11.01,
    holdings: [
      { symbol: "SLERF", amount: 125000, value: 292.50, change: 15.2 },
      { symbol: "ETH", amount: 2.5, value: 6050, change: -2.1 },
      { symbol: "USDC", amount: 5000, value: 5000, change: 0 },
    ],
    stakedTokens: 50000,
    stakedValue: 117,
    pendingRewards: 450.25,
    farmingPools: [
      { pool: "SLERF-ETH", staked: 30000, value: 70.20, apy: 145, dailyReward: 11.52 },
      { pool: "SLERF-USDC", staked: 20000, value: 46.80, apy: 120, dailyReward: 6.58 },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-black text-white">
      <div className="sticky top-0 z-40 bg-gradient-to-r from-blue-600 to-purple-600 border-b border-yellow-400/30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold hover:text-yellow-400">
            ← Back to Home
          </Link>
          <h1 className="text-lg font-bold text-yellow-400">Portfolio Dashboard</h1>
          {!walletConnected && (
            <Button
              onClick={() => setWalletConnected(true)}
              className="bg-green-500 hover:bg-green-600 text-white text-sm py-2 px-4"
            >
              Connect Wallet
            </Button>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {walletConnected ? (
          <>
            {/* Portfolio Summary */}
            <div className="mb-8">
              <Card className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 border-2 border-yellow-400">
                <CardContent className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-white/80 text-sm mb-2">Total Portfolio Value</p>
                      <h2 className="text-5xl font-bold text-yellow-400">${portfolioData.totalBalance.toLocaleString()}</h2>
                    </div>
                    <div className="text-right">
                      <p className="text-white/80 text-sm">24h Change</p>
                      <p className="text-3xl font-bold text-green-400">
                        +${portfolioData.balanceChange.toLocaleString()} ({portfolioData.percentChange}%)
                      </p>
                    </div>
                  </div>
                  <div className="text-white/70 text-sm">Wallet: {walletAddress}</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Holdings */}
              <Card className="bg-white/10 backdrop-blur-sm border-blue-400/30 md:col-span-2">
                <CardContent className="p-6">
                  <h3 className="text-yellow-400 text-lg font-bold mb-6">Your Holdings</h3>
                  <div className="space-y-4">
                    {portfolioData.holdings.map((holding, idx) => (
                      <div key={idx} className="flex justify-between items-center pb-4 border-b border-white/10">
                        <div>
                          <div className="font-bold text-white">{holding.symbol}</div>
                          <div className="text-white/60 text-sm">{holding.amount.toLocaleString()} tokens</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-white">${holding.value.toLocaleString()}</div>
                          <div className={`text-sm ${holding.change >= 0 ? "text-green-400" : "text-red-400"}`}>
                            {holding.change >= 0 ? "+" : ""}{holding.change}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Staking Summary */}
              <Card className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 border-green-400/50">
                <CardContent className="p-6">
                  <h3 className="text-green-400 text-lg font-bold mb-6">Staking Summary</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-white/80 text-sm">Tokens Staked</p>
                      <p className="text-2xl font-bold text-green-400">{portfolioData.stakedTokens.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">Staked Value</p>
                      <p className="text-2xl font-bold text-white">${portfolioData.stakedValue.toLocaleString()}</p>
                    </div>
                    <div className="bg-black/30 rounded p-3">
                      <p className="text-white/80 text-sm">Pending Rewards</p>
                      <p className="text-2xl font-bold text-yellow-400">${portfolioData.pendingRewards.toFixed(2)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Farming Pools */}
            <Card className="bg-white/10 backdrop-blur-sm border-green-400/30">
              <CardContent className="p-6">
                <h3 className="text-yellow-400 text-lg font-bold mb-6">Active Farming Pools</h3>
                <div className="space-y-4">
                  {portfolioData.farmingPools.map((farm, idx) => (
                    <div key={idx} className="bg-black/30 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-bold text-white">{farm.pool}</h4>
                          <p className="text-white/60 text-sm">Staked: {farm.staked.toLocaleString()} SLERF</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-white">${farm.value.toFixed(2)}</p>
                          <p className="text-green-400 text-sm font-bold">APY: {farm.apy}%</p>
                        </div>
                      </div>
                      <div className="flex justify-between text-white/80 text-sm">
                        <span>Daily Reward:</span>
                        <span className="text-yellow-400">{farm.dailyReward.toFixed(2)} SLERF</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          <Card className="bg-gradient-to-br from-red-600/30 to-pink-600/30 border-2 border-red-400/50">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">🔐</div>
              <h3 className="text-white text-2xl font-bold mb-4">Connect Wallet to View Dashboard</h3>
              <p className="text-white/80 mb-8 text-lg">Access your portfolio, staking position, and farming rewards</p>
              <Button
                onClick={() => setWalletConnected(true)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 text-lg"
              >
                Connect Wallet Now
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
