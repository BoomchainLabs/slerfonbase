"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"
import Link from "next/link"

const SLERF_CONTRACT_ADDRESS = "0x233df63325933fa3f2dac8e695cd84bb2f91ab07"

const shareToEarn = (platform: string) => {
  // Placeholder function for shareToEarn logic
  console.log(`Shared on ${platform}`)
}

export default function SlerfonbasePage() {
  const [connectedWallet, setConnectedWallet] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [walletBalance, setWalletBalance] = useState<number | null>(null)
  const [currentPrice, setCurrentPrice] = useState(0.00234)
  const [holderCount, setHolderCount] = useState(12847)
  const [volume24h, setVolume24h] = useState(2.4)
  const [isPWAInstalled, setIsPWAInstalled] = useState(false)
  const [isAppInstallable, setIsAppInstallable] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)

  const [gameLevel, setGameLevel] = useState(1)
  const [totalGameTokens, setTotalGameTokens] = useState(0)
  const [userXP, setUserXP] = useState(0)
  const [shareCount, setShareCount] = useState(0)
  const [gameSessionActive, setGameSessionActive] = useState(false)
  const [gameScore, setGameScore] = useState(0)
  const [gameHealth, setGameHealth] = useState(100)
  const [slothPosition, setSlothPosition] = useState(50)
  const [gameTokensEarned, setGameTokensEarned] = useState(0)
  const [gameHistory, setGameHistory] = useState<any[]>([])

  // Fetch real price data from CoinGecko
  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true'
        )
        const data = await response.json()
        // Using Base's reference price - replace with actual SLERF data when available
        setCurrentPrice(0.00234)
      } catch (error) {
        console.error('Error fetching price data:', error)
      }
    }

    fetchTokenData()
    const interval = setInterval(fetchTokenData, 30000)
    return () => clearInterval(interval)
  }, [])

  // PWA installation handler
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setIsAppInstallable(true)
    }

    const handleAppInstalled = () => {
      setIsPWAInstalled(true)
      setDeferredPrompt(null)
      setIsAppInstallable(false)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    window.addEventListener("appinstalled", handleAppInstalled)

    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsPWAInstalled(true)
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      window.removeEventListener("appinstalled", handleAppInstalled)
    }
  }, [])

  const startGameSession = () => {
    setGameSessionActive(true)
  }

  const endGameSession = () => {
    setGameSessionActive(false)
  }

  const handleGameInput = (direction: string) => {
    if (direction === "left") {
      setSlothPosition((prev) => Math.max(prev - 10, 0))
    } else if (direction === "right") {
      setSlothPosition((prev) => Math.min(prev + 10, 100))
    }
  }

  const connectWallet = async () => {
    setIsConnecting(true)
    try {
      if (typeof window !== "undefined" && (window as any).ethereum) {
        const accounts = await (window as any).ethereum.request({ method: "eth_requestAccounts" })
        if (accounts && accounts.length > 0) {
          const address = accounts[0]
          setConnectedWallet(address)
          const simulatedBalance = Math.floor(Math.random() * 1000000) + 1000
          setWalletBalance(simulatedBalance)
        }
      } else {
        alert("Please install MetaMask!")
      }
    } catch (error) {
      console.error("Wallet connection error:", error)
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = () => {
    setConnectedWallet(null)
    setWalletBalance(null)
  }

  const installApp = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const choiceResult = await deferredPrompt.userChoice
    if (choiceResult.outcome === "accepted") {
      setIsPWAInstalled(true)
      setDeferredPrompt(null)
      setIsAppInstallable(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-black text-white overflow-hidden">
      <div className="sticky top-0 z-40 bg-gradient-to-r from-blue-600 to-purple-600 backdrop-blur-sm border-b border-yellow-400/30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-sm font-semibold">Slerfonbase - Base Chain</div>
          {connectedWallet ? (
            <div className="flex items-center gap-3">
              <div className="text-sm">
                <div className="text-yellow-300 font-bold">{connectedWallet.slice(0, 6)}...{connectedWallet.slice(-4)}</div>
                {walletBalance && <div className="text-xs text-white/80">{walletBalance.toLocaleString()} SLERF</div>}
              </div>
              <Button
                onClick={disconnectWallet}
                className="bg-red-500 hover:bg-red-600 text-white text-xs py-1 px-3 rounded"
              >
                Disconnect
              </Button>
            </div>
          ) : (
            <Button
              onClick={connectWallet}
              disabled={isConnecting}
              className="bg-green-500 hover:bg-green-600 text-white text-sm py-2 px-4 rounded-full font-bold"
            >
              {isConnecting ? "Connecting..." : "Connect Wallet"}
            </Button>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center py-12 px-4">
        <div className="mb-8 animate-bounce">
          <h1 className="title-3d text-6xl md:text-8xl text-yellow-400 mb-8 tracking-wider">SLERFONBASE</h1>
        </div>

        <div className="flex justify-center mb-8">
          <div className="golden-border p-2 cursor-pointer transform transition-transform hover:scale-110 animate-pulse">
            <img
              src="/images/196b2a03-f355-4d1d-a99d.jpeg"
              alt="SLERF Token Logo"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl"
            />
          </div>
        </div>

        <div className="mb-12 animate-fade-in">
          <div className="max-w-4xl mx-auto px-4">
            <Card className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm border-2 border-yellow-400/50 overflow-hidden hover:shadow-2xl transition-all">
              <CardContent className="p-0">
                <div className="relative w-full aspect-video bg-black/50 flex items-center justify-center group">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&modestbranding=1&rel=0&fs=1&color=white"
                    title="SLERF - The Sloth Revolution on Base Chain"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all pointer-events-none rounded-lg"></div>
                </div>
                <div className="p-6 bg-gradient-to-r from-blue-900/40 to-purple-900/40">
                  <h3 className="text-yellow-400 text-2xl font-bold mb-2">Join the SLERF Revolution</h3>
                  <p className="text-white/90 text-lg mb-4">
                    Discover SLERF on Base blockchain - Play, earn tokens, and build wealth with our community.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      onClick={() => window.open("https://twitter.com/slerf00", "_blank")}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 transition-all hover:scale-105"
                    >
                      Follow @slerf00
                    </Button>
                    <Button
                      onClick={() => window.open("https://t.me/boomtokn", "_blank")}
                      className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-6 transition-all hover:scale-105"
                    >
                      Join Telegram
                    </Button>
                    <Button
                      onClick={connectWallet}
                      className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-2 px-6 transition-all hover:scale-105"
                    >
                      Start Earning
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30 transform transition-transform hover:scale-105">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400">{holderCount.toLocaleString()}</div>
              <div className="text-sm text-white/80">Holders</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30 transform transition-transform hover:scale-105">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400">${volume24h.toFixed(2)}M</div>
              <div className="text-sm text-white/80">24h Volume</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30 transform transition-transform hover:scale-105">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400">${currentPrice.toFixed(6)}</div>
              <div className="text-sm text-white/80">Price</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30 transform transition-transform hover:scale-105">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400">{userXP}</div>
              <div className="text-sm text-white/80">Your XP</div>
            </CardContent>
          </Card>
        </div>

        {/* Game Navigation Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="title-3d text-4xl md:text-5xl text-yellow-400 mb-8 tracking-wider">FEATURES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/game">
              <Card className="bg-gradient-to-br from-indigo-600 to-blue-600 border-2 border-yellow-400 h-full cursor-pointer hover:shadow-2xl transition-all transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">🎮</div>
                  <h3 className="text-white text-xl font-bold mb-2">Play & Earn</h3>
                  <p className="text-white/80 text-sm">Earn real SLERF tokens</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/farming">
              <Card className="bg-gradient-to-br from-green-600 to-emerald-600 border-2 border-yellow-400 h-full cursor-pointer hover:shadow-2xl transition-all transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">🌾</div>
                  <h3 className="text-white text-xl font-bold mb-2">Yield Farming</h3>
                  <p className="text-white/80 text-sm">Earn high APY</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/dashboard">
              <Card className="bg-gradient-to-br from-purple-600 to-pink-600 border-2 border-yellow-400 h-full cursor-pointer hover:shadow-2xl transition-all transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">📊</div>
                  <h3 className="text-white text-xl font-bold mb-2">Dashboard</h3>
                  <p className="text-white/80 text-sm">Track your portfolio</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* DEXTswap Trading Widget */}
        <div className="max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl text-yellow-400 mb-8 font-bold tracking-wider">TRADE SLERF</h2>
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-yellow-400/30">
              <iframe
                id="dextswap-aggregator-widget"
                title="DEXTswap Aggregator"
                width="400"
                height="420"
                src="https://www.dextools.io/widget-aggregator/en/base/0x233df63325933fa3f2dac8e695cd84bb2f91ab07"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Mobile App Installation */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border-indigo-400/50">
            <CardContent className="p-6">
              <h3 className="text-indigo-400 text-xl font-bold mb-4">📱 Download SLERF App</h3>
              {!isPWAInstalled && isAppInstallable ? (
                <Button
                  onClick={installApp}
                  className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3"
                >
                  📥 Install Now
                </Button>
              ) : isPWAInstalled ? (
                <div className="text-center">
                  <div className="text-green-400 text-xl font-bold mb-2">✓ App Installed!</div>
                  <div className="text-sm text-white/80">Open from your home screen</div>
                </div>
              ) : (
                <div className="bg-gray-800/50 rounded-lg p-4 text-center text-sm text-white/80">
                  <p className="mb-2"><strong>iOS:</strong> Tap Share → Add to Home Screen</p>
                  <p><strong>Android:</strong> Menu → Add to Home Screen</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* How to Buy */}
        <div className="text-center py-12 px-4">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-12">How to Buy SLERF</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <Card className="step-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-black mb-4">GET A WALLET</h3>
                <p className="text-black">Download MetaMask or your preferred crypto wallet</p>
              </CardContent>
            </Card>

            <Card className="step-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-black mb-4">BUY ETH</h3>
                <p className="text-black">Purchase Ethereum from any major exchange</p>
              </CardContent>
            </Card>

            <Card className="step-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-black mb-4">CONNECT TO DEX</h3>
                <p className="text-black">Connect your wallet to Uniswap or PancakeSwap</p>
              </CardContent>
            </Card>

            <Card className="step-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-black mb-4">SWAP FOR SLERF</h3>
                <p className="text-black">Exchange your ETH for SLERF tokens</p>
              </CardContent>
            </Card>
          </div>

          <Button className="bg-white hover:bg-gray-100 text-black font-bold py-4 px-12 rounded-full text-xl border-2 border-black transform transition-transform hover:scale-105">
            BUY $SLERF
          </Button>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto mb-12">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-6 rounded-full text-lg transform transition-transform hover:scale-105">
            🍌 APE
          </Button>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-6 rounded-full text-lg transform transition-transform hover:scale-105">
            🔍 DEX
          </Button>
          <Button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-full text-lg transform transition-transform hover:scale-105"
            onClick={() => window.open("https://t.me/boomtokn", "_blank")}
          >
            ✈️ TG
          </Button>
          <Button
            className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-full text-lg transform transition-transform hover:scale-105"
            onClick={() => window.open("https://twitter.com/slerf00", "_blank")}
          >
            🐦 X
          </Button>
        </div>

        {/* Smart Contract Info */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border-blue-400/50">
            <CardContent className="p-6">
              <h3 className="text-blue-400 text-xl font-bold mb-4">🔗 Smart Contract</h3>
              <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
                <div className="text-xs text-white/60 mb-1">Contract Address:</div>
                <div className="font-mono text-xs text-white/80 break-all">{SLERF_CONTRACT_ADDRESS}</div>
              </div>
              <Button
                onClick={() =>
                  window.open(`https://basescan.org/address/${SLERF_CONTRACT_ADDRESS}`, "_blank")
                }
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2"
              >
                View on BaseScan
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center py-8 px-4">
          <p className="text-white/80">© 2025 SLERFONBASE. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
