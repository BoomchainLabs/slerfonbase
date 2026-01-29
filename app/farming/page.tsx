"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import Link from "next/link"

const FARMING_POOLS = [
  { name: "SLERF-ETH", apy: 145, liquidity: 2400000, volume: 450000 },
  { name: "SLERF-USDC", apy: 120, liquidity: 1800000, volume: 350000 },
  { name: "SLERF-BASE", apy: 95, liquidity: 1200000, volume: 220000 },
]

export default function FarmingPage() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [selectedPool, setSelectedPool] = useState<number | null>(null)
  const [stakeAmount, setStakeAmount] = useState("")

  const handleStake = () => {
    if (!stakeAmount) return
    alert(`Staking ${stakeAmount} in pool...`)
    setStakeAmount("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-black text-white">
      <div className="sticky top-0 z-40 bg-gradient-to-r from-blue-600 to-purple-600 border-b border-yellow-400/30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold hover:text-yellow-400">
            ← Back to Home
          </Link>
          <h1 className="text-lg font-bold text-yellow-400">Yield Farming</h1>
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
        <h2 className="title-3d text-4xl text-yellow-400 mb-2 text-center">High-Yield Farming</h2>
        <p className="text-center text-white/80 mb-12">Stake SLERF and earn rewards</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {FARMING_POOLS.map((pool, idx) => (
            <Card
              key={idx}
              className={`bg-gradient-to-br from-green-600/30 to-emerald-600/30 border-2 cursor-pointer transition-all ${
                selectedPool === idx ? "border-yellow-400" : "border-green-400/50"
              }`}
              onClick={() => setSelectedPool(idx)}
            >
              <CardContent className="p-6">
                <h3 className="text-yellow-400 text-xl font-bold mb-4">{pool.name}</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-white/80 text-sm">
                    <span>APY</span>
                    <span className="text-green-400 font-bold">{pool.apy}%</span>
                  </div>
                  <div className="flex justify-between text-white/80 text-sm">
                    <span>Liquidity</span>
                    <span className="text-white">${(pool.liquidity / 1000000).toFixed(2)}M</span>
                  </div>
                  <div className="flex justify-between text-white/80 text-sm">
                    <span>24h Volume</span>
                    <span className="text-white">${(pool.volume / 1000).toFixed(0)}K</span>
                  </div>
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold">
                  Select Pool
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedPool !== null && walletConnected && (
          <Card className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 border-2 border-yellow-400">
            <CardContent className="p-6">
              <h3 className="text-yellow-400 text-2xl font-bold mb-6">Stake in {FARMING_POOLS[selectedPool].name}</h3>

              <div className="mb-6">
                <label className="text-white/80 text-sm block mb-2">Amount to Stake</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={stakeAmount}
                    onChange={(e) => setStakeAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="flex-1 bg-black/50 border border-yellow-400/30 rounded px-4 py-2 text-white placeholder-white/50"
                  />
                  <Button
                    onClick={() => setStakeAmount("1000")}
                    className="bg-yellow-400/30 hover:bg-yellow-400/50 text-white px-4"
                  >
                    Max
                  </Button>
                </div>
              </div>

              <div className="bg-black/30 rounded-lg p-4 mb-6">
                <div className="flex justify-between text-white/80 mb-2">
                  <span>Est. Daily Rewards:</span>
                  <span className="text-green-400 font-bold">
                    {stakeAmount ? (parseFloat(stakeAmount) * FARMING_POOLS[selectedPool].apy / 365 / 100).toFixed(4) : "0"} SLERF
                  </span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Est. Yearly Rewards:</span>
                  <span className="text-green-400 font-bold">
                    {stakeAmount ? (parseFloat(stakeAmount) * FARMING_POOLS[selectedPool].apy / 100).toFixed(2) : "0"} SLERF
                  </span>
                </div>
              </div>

              <Button
                onClick={handleStake}
                disabled={!stakeAmount}
                className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-600 text-white font-bold py-3"
              >
                Stake {stakeAmount || "0"} SLERF
              </Button>
            </CardContent>
          </Card>
        )}

        {!walletConnected && (
          <Card className="bg-gradient-to-br from-red-600/30 to-pink-600/30 border-2 border-red-400/50">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-white text-xl font-bold mb-2">Connect Wallet to Stake</h3>
              <p className="text-white/80 mb-6">Please connect your wallet to participate in farming</p>
              <Button
                onClick={() => setWalletConnected(true)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6"
              >
                Connect Wallet
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
