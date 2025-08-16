"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"

export default function SlerfonbasePage() {
  const [holderCount, setHolderCount] = useState(12847)
  const [volume24h, setVolume24h] = useState(2.4)
  const [clickCount, setClickCount] = useState(0)
  const [userLevel, setUserLevel] = useState(1)
  const [achievements, setAchievements] = useState<string[]>([])

  const [liveTransactions, setLiveTransactions] = useState([
    { id: 1, type: "buy", amount: "1.2K", wallet: "0x7a9f...3d2e", time: "2s ago", isWhale: false },
    { id: 2, type: "sell", amount: "850", wallet: "0x4b1c...8f9a", time: "5s ago", isWhale: false },
    { id: 3, type: "buy", amount: "15.7K", wallet: "0x9e2d...1a4b", time: "12s ago", isWhale: true },
  ])
  const [trendingMentions, setTrendingMentions] = useState(1247)
  const [whaleAlerts, setWhaleAlerts] = useState([
    { id: 1, type: "buy", amount: "50K", wallet: "0x1a2b...9c8d", time: "3m ago" },
    { id: 2, type: "buy", amount: "75K", wallet: "0x5f6e...2d1c", time: "8m ago" },
  ])
  const [milestoneAlert, setMilestoneAlert] = useState<string | null>(null)

  const [currentPrice, setCurrentPrice] = useState(0.00234)
  const [portfolioAmount, setPortfolioAmount] = useState(50000)
  const [portfolioBuyPrice, setPortfolioBuyPrice] = useState(0.0018)
  const [profitCalcAmount, setProfitCalcAmount] = useState(1000)
  const [profitCalcDate, setProfitCalcDate] = useState("2024-01-15")
  const [priceAlerts, setPriceAlerts] = useState([
    { id: 1, price: 0.005, type: "above", active: true },
    { id: 2, price: 0.002, type: "below", active: true },
  ])
  const [newAlertPrice, setNewAlertPrice] = useState("")
  const [newAlertType, setNewAlertType] = useState<"above" | "below">("above")
  const [dexPrices] = useState([
    { name: "Uniswap", price: 0.00234, liquidity: "$1.2M", volume: "$450K" },
    { name: "PancakeSwap", price: 0.00231, liquidity: "$890K", volume: "$320K" },
    { name: "SushiSwap", price: 0.00236, liquidity: "$650K", volume: "$180K" },
    { name: "BaseSwap", price: 0.00233, liquidity: "$420K", volume: "$95K" },
  ])

  const [isHolderVerified, setIsHolderVerified] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: "SlerfWhale", message: "Just bought another 100K SLERF! 🚀", time: "2m ago", verified: true },
    { id: 2, user: "DiamondHands", message: "This community is amazing!", time: "5m ago", verified: false },
    { id: 3, user: "SlothLover", message: "SLERF to the moon! 🌙", time: "8m ago", verified: true },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [activePolls, setActivePolls] = useState([
    {
      id: 1,
      question: "What should be our next major milestone?",
      options: [
        { text: "CEX Listing", votes: 234 },
        { text: "NFT Collection", votes: 189 },
        { text: "Staking Platform", votes: 156 },
        { text: "Mobile App", votes: 98 },
      ],
      totalVotes: 677,
      userVoted: false,
    },
    {
      id: 2,
      question: "Which partnership would benefit SLERF most?",
      options: [
        { text: "Gaming Platform", votes: 145 },
        { text: "DeFi Protocol", votes: 203 },
        { text: "Social Media", votes: 87 },
      ],
      totalVotes: 435,
      userVoted: true,
    },
  ])
  const [exclusiveContent] = useState([
    {
      id: 1,
      title: "Alpha: Upcoming CEX Listing",
      content: "Major exchange announcement coming next week...",
      type: "alpha",
      minHolding: 10000,
    },
    {
      id: 2,
      title: "Technical Analysis Report",
      content: "Detailed TA showing bullish patterns...",
      type: "analysis",
      minHolding: 5000,
    },
    {
      id: 3,
      title: "Team AMA Highlights",
      content: "Key insights from yesterday's AMA...",
      type: "news",
      minHolding: 1000,
    },
  ])

  const [isPWAInstalled, setIsPWAInstalled] = useState(false)
  const [shareCount, setShareCount] = useState(0)
  const [memeTemplates] = useState([
    { id: 1, name: "SLERF Rocket", template: "🚀 SLERF TO THE MOON! 🚀" },
    { id: 2, name: "Diamond Hands", template: "💎🙌 HOLDING SLERF FOREVER 💎🙌" },
    { id: 3, name: "Sloth Power", template: "🦥 SLOW AND STEADY WINS THE RACE 🦥" },
  ])
  const [selectedMeme, setSelectedMeme] = useState("")
  const [customMemeText, setCustomMemeText] = useState("")
  const [communitySuggestions, setCommunitySuggestions] = useState([
    { id: 1, suggestion: "Add NFT marketplace integration", votes: 45, userVoted: false },
    { id: 2, suggestion: "Create SLERF mobile game", votes: 32, userVoted: false },
    { id: 3, suggestion: "Launch merchandise store", votes: 28, userVoted: true },
  ])
  const [newSuggestion, setNewSuggestion] = useState("")
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)

  const [dailyChallenges, setDailyChallenges] = useState([
    { id: 1, task: "Click SLERF logo 25 times", progress: 0, target: 25, reward: "50 XP", completed: false },
    { id: 2, task: "Share on social media", progress: 0, target: 1, reward: "100 XP", completed: false },
    { id: 3, task: "Invite 3 friends", progress: 0, target: 3, reward: "200 XP", completed: false },
  ])
  const [userXP, setUserXP] = useState(0)
  const [referralCode, setReferralCode] = useState("SLERF" + Math.random().toString(36).substr(2, 6).toUpperCase())
  const [referralCount, setReferralCount] = useState(0)
  const [stakingAmount, setStakingAmount] = useState(1000)
  const [stakingDays, setStakingDays] = useState(30)
  const [raidActive, setRaidActive] = useState(true)
  const [raidParticipants, setRaidParticipants] = useState(847)

  useEffect(() => {
    const interval = setInterval(() => {
      const prevHolderCount = holderCount
      setHolderCount((prev) => prev + Math.floor(Math.random() * 3))
      setVolume24h((prev) => prev + (Math.random() * 0.1 - 0.05))
      setTrendingMentions((prev) => prev + Math.floor(Math.random() * 5))

      setCurrentPrice((prev) => {
        const change = (Math.random() - 0.5) * 0.0001
        return Math.max(0.001, prev + change)
      })

      if (raidActive) {
        setRaidParticipants((prev) => prev + Math.floor(Math.random() * 2))
      }

      if (Math.random() < 0.3) {
        const users = ["CryptoKing", "SlerfFan", "MoonBoy", "DiamondHands", "SlothArmy"]
        const messages = [
          "SLERF is pumping! 🚀",
          "Great community here!",
          "Holding strong 💎",
          "Just bought more!",
          "LFG SLERF! 🔥",
        ]
        const newChatMessage = {
          id: Date.now(),
          user: users[Math.floor(Math.random() * users.length)],
          message: messages[Math.floor(Math.random() * messages.length)],
          time: "now",
          verified: Math.random() < 0.3,
        }
        setChatMessages((prev) => [newChatMessage, ...prev.slice(0, 4)])
      }

      // Generate new live transactions
      const transactionTypes = ["buy", "sell"]
      const amounts = ["250", "500", "1.2K", "2.5K", "5K", "10K", "25K"]
      const whaleAmounts = ["50K", "100K", "250K", "500K"]

      const isWhaleTransaction = Math.random() < 0.1
      const newTransaction = {
        id: Date.now(),
        type: transactionTypes[Math.floor(Math.random() * transactionTypes.length)] as "buy" | "sell",
        amount: isWhaleTransaction
          ? whaleAmounts[Math.floor(Math.random() * whaleAmounts.length)]
          : amounts[Math.floor(Math.random() * amounts.length)],
        wallet: `0x${Math.random().toString(16).substr(2, 4)}...${Math.random().toString(16).substr(2, 4)}`,
        time: "now",
        isWhale: isWhaleTransaction,
      }

      setLiveTransactions((prev) => [newTransaction, ...prev.slice(0, 4)])

      // Add whale alerts for large transactions
      if (isWhaleTransaction) {
        const whaleAlert = {
          id: Date.now(),
          type: newTransaction.type as "buy" | "sell",
          amount: newTransaction.amount,
          wallet: newTransaction.wallet,
          time: "now",
        }
        setWhaleAlerts((prev) => [whaleAlert, ...prev.slice(0, 2)])
      }

      // Check for milestone achievements
      const newHolderCount = prevHolderCount + Math.floor(Math.random() * 3)
      if (Math.floor(prevHolderCount / 1000) < Math.floor(newHolderCount / 1000)) {
        setMilestoneAlert(`🎉 ${Math.floor(newHolderCount / 1000)}K HOLDERS MILESTONE REACHED!`)
        setTimeout(() => setMilestoneAlert(null), 5000)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [raidActive, holderCount])

  const handleSlerfClick = () => {
    const newCount = clickCount + 1
    setClickCount(newCount)

    // Level up system
    if (newCount >= userLevel * 10) {
      setUserLevel((prev) => prev + 1)
      setUserXP((prev) => prev + 50)
    }

    setDailyChallenges((prev) =>
      prev.map((challenge) =>
        challenge.id === 1 && !challenge.completed
          ? { ...challenge, progress: Math.min(challenge.progress + 1, challenge.target) }
          : challenge,
      ),
    )

    // Achievement system
    if (newCount === 10 && !achievements.includes("First Steps")) {
      setAchievements((prev) => [...prev, "First Steps"])
    }
    if (newCount === 50 && !achievements.includes("SLERF Enthusiast")) {
      setAchievements((prev) => [...prev, "SLERF Enthusiast"])
    }
    if (newCount === 100 && !achievements.includes("SLERF Champion")) {
      setAchievements((prev) => [...prev, "SLERF Champion"])
    }
  }

  const completeChallenge = (challengeId: number) => {
    setDailyChallenges((prev) =>
      prev.map((challenge) =>
        challenge.id === challengeId && challenge.progress >= challenge.target
          ? { ...challenge, completed: true }
          : challenge,
      ),
    )

    if (challengeId === 1) setUserXP((prev) => prev + 50)
    if (challengeId === 2) setUserXP((prev) => prev + 100)
    if (challengeId === 3) setUserXP((prev) => prev + 200)
  }

  const calculateStakingRewards = () => {
    const apy = 15 // 15% APY
    const dailyRate = apy / 365 / 100
    return (stakingAmount * dailyRate * stakingDays).toFixed(2)
  }

  const calculatePortfolioPnL = () => {
    const currentValue = portfolioAmount * currentPrice
    const buyValue = portfolioAmount * portfolioBuyPrice
    const pnl = currentValue - buyValue
    const pnlPercentage = ((currentValue - buyValue) / buyValue) * 100
    return { pnl, pnlPercentage, currentValue }
  }

  const calculateProfitScenario = () => {
    const daysSince = Math.floor((new Date().getTime() - new Date(profitCalcDate).getTime()) / (1000 * 60 * 60 * 24))
    const historicalPrice = 0.0015 // Simulated historical price
    const currentValue = profitCalcAmount * currentPrice
    const historicalValue = profitCalcAmount * historicalPrice
    const profit = currentValue - historicalValue
    const profitPercentage = ((currentValue - historicalValue) / historicalValue) * 100
    return { profit, profitPercentage, daysSince, historicalPrice }
  }

  const addPriceAlert = () => {
    if (newAlertPrice && !isNaN(Number(newAlertPrice))) {
      const newAlert = {
        id: Date.now(),
        price: Number(newAlertPrice),
        type: newAlertType,
        active: true,
      }
      setPriceAlerts((prev) => [...prev, newAlert])
      setNewAlertPrice("")
    }
  }

  const toggleAlert = (id: number) => {
    setPriceAlerts((prev) => prev.map((alert) => (alert.id === id ? { ...alert, active: !alert.active } : alert)))
  }

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        user: isHolderVerified ? "You (Verified)" : "You",
        message: newMessage,
        time: "now",
        verified: isHolderVerified,
      }
      setChatMessages((prev) => [message, ...prev.slice(0, 4)])
      setNewMessage("")
    }
  }

  const voteOnPoll = (pollId: number, optionIndex: number) => {
    setActivePolls((prev) =>
      prev.map((poll) => {
        if (poll.id === pollId && !poll.userVoted) {
          const updatedOptions = poll.options.map((option, index) =>
            index === optionIndex ? { ...option, votes: option.votes + 1 } : option,
          )
          return {
            ...poll,
            options: updatedOptions,
            totalVotes: poll.totalVotes + 1,
            userVoted: true,
          }
        }
        return poll
      }),
    )
  }

  const verifyHolder = () => {
    // Simulate wallet verification
    setIsHolderVerified(true)
    setAchievements((prev) => [...prev, "Verified Holder"])
  }

  const installPWA = () => {
    setIsPWAInstalled(true)
    setAchievements((prev) => [...prev, "Mobile App Installed"])
    setUserXP((prev) => prev + 100)
  }

  const shareToEarn = (platform: string) => {
    setShareCount((prev) => prev + 1)
    setUserXP((prev) => prev + 25)

    // Update share challenge progress
    setDailyChallenges((prev) =>
      prev.map((challenge) =>
        challenge.id === 2 && !challenge.completed
          ? { ...challenge, progress: Math.min(challenge.progress + 1, challenge.target) }
          : challenge,
      ),
    )

    if (shareCount + 1 === 5 && !achievements.includes("Social Influencer")) {
      setAchievements((prev) => [...prev, "Social Influencer"])
    }
  }

  const generateMeme = () => {
    const memeText = customMemeText || selectedMeme
    if (memeText) {
      // Simulate meme generation
      setUserXP((prev) => prev + 15)
      if (!achievements.includes("Meme Creator")) {
        setAchievements((prev) => [...prev, "Meme Creator"])
      }
    }
  }

  const submitSuggestion = () => {
    if (newSuggestion.trim()) {
      const suggestion = {
        id: Date.now(),
        suggestion: newSuggestion,
        votes: 1,
        userVoted: true,
      }
      setCommunitySuggestions((prev) => [suggestion, ...prev])
      setNewSuggestion("")
      setUserXP((prev) => prev + 50)
    }
  }

  const voteOnSuggestion = (id: number) => {
    setCommunitySuggestions((prev) =>
      prev.map((suggestion) =>
        suggestion.id === id && !suggestion.userVoted
          ? { ...suggestion, votes: suggestion.votes + 1, userVoted: true }
          : suggestion,
      ),
    )
    setUserXP((prev) => prev + 10)
  }

  const enableNotifications = () => {
    setNotificationsEnabled(true)
    setAchievements((prev) => [...prev, "Notification Subscriber"])
  }

  const portfolioData = calculatePortfolioPnL()
  const profitData = calculateProfitScenario()

  return (
    <div className="min-h-screen text-white">
      {milestoneAlert && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold text-lg animate-bounce">
          {milestoneAlert}
        </div>
      )}

      {/* Hero Section with SLERF Logo and Title */}
      <div className="text-center py-12 px-4">
        <div className="mb-8">
          <h1 className="title-3d text-6xl md:text-8xl text-yellow-400 mb-8 tracking-wider">SLERFONBASE</h1>
        </div>

        {/* SLERF Logo */}
        <div className="flex justify-center mb-8">
          <div
            className="golden-border p-2 cursor-pointer transform transition-transform hover:scale-105"
            onClick={handleSlerfClick}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7BB94169-C510-4081-97BB-0741B6A94421-JtHdDIWUW5AjGxwTtn6ETOipUcgyk0.png"
              alt="SLERF Token Logo"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-6xl mx-auto mb-8">
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400">{holderCount.toLocaleString()}</div>
              <div className="text-sm text-white/80">Holders</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400">${volume24h.toFixed(2)}M</div>
              <div className="text-sm text-white/80">24h Volume</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400">${currentPrice.toFixed(6)}</div>
              <div className="text-sm text-white/80">Price</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400">{trendingMentions.toLocaleString()}</div>
              <div className="text-sm text-white/80">Social Mentions</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400">Level {userLevel}</div>
              <div className="text-sm text-white/80">Your Level</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400">{userXP}</div>
              <div className="text-sm text-white/80">Total XP</div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-7xl mx-auto mb-8">
          <h2 className="title-3d text-4xl md:text-5xl text-yellow-400 mb-8 tracking-wider">MOBILE & ENGAGEMENT</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* PWA Installation */}
            <Card className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border-indigo-400/50">
              <CardContent className="p-6">
                <h3 className="text-indigo-400 text-xl font-bold mb-4">📱 Mobile App</h3>
                {!isPWAInstalled ? (
                  <div className="text-center">
                    <div className="mb-4">
                      <div className="text-sm text-white/80 mb-2">Install SLERF as a mobile app:</div>
                      <ul className="text-xs text-white/60 space-y-1">
                        <li>• Instant access from home screen</li>
                        <li>• Push notifications for price alerts</li>
                        <li>• Offline functionality</li>
                        <li>• Native mobile experience</li>
                      </ul>
                    </div>
                    <Button
                      onClick={installPWA}
                      className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-6"
                    >
                      Install Mobile App
                    </Button>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-green-400 text-2xl mb-2">✓ App Installed</div>
                    <div className="text-sm text-white/80 mb-4">SLERF is now available on your home screen!</div>
                    <div className="space-y-2">
                      <Button
                        onClick={enableNotifications}
                        className={`w-full ${
                          notificationsEnabled ? "bg-green-500" : "bg-indigo-500 hover:bg-indigo-600"
                        } text-white py-2`}
                      >
                        {notificationsEnabled ? "🔔 Notifications Enabled" : "Enable Push Notifications"}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Share to Earn */}
            <Card className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 backdrop-blur-sm border-pink-400/50">
              <CardContent className="p-6">
                <h3 className="text-pink-400 text-xl font-bold mb-4">🚀 Share to Earn</h3>
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-pink-400">{shareCount}</div>
                  <div className="text-sm text-white/80">Total Shares</div>
                  <div className="text-xs text-white/60">+25 XP per share</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    onClick={() => {
                      shareToEarn("twitter")
                      window.open('https://twitter.com/slerf00', '_blank')
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-2"
                  >
                    Share on X
                  </Button>
                  <Button
                    onClick={() => {
                      shareToEarn("telegram")
                      window.open('https://t.me/boomtokn', '_blank')
                    }}
                    className="bg-blue-400 hover:bg-blue-500 text-white text-sm py-2"
                  >
                    Share on TG
                  </Button>
                  <Button
                    onClick={() => shareToEarn("discord")}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm py-2"
                  >
                    Share on Discord
                  </Button>
                  <Button
                    onClick={() => shareToEarn("reddit")}
                    className="bg-orange-500 hover:bg-orange-600 text-white text-sm py-2"
                  >
                    Share on Reddit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Meme Generator */}
            <Card className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border-yellow-400/50">
              <CardContent className="p-6">
                <h3 className="text-yellow-400 text-xl font-bold mb-4">🎨 Meme Generator</h3>
                <div className="space-y-3 mb-4">
                  <div>
                    <label className="text-sm text-white/80 mb-2 block">Choose Template:</label>
                    <select
                      value={selectedMeme}
                      onChange={(e) => setSelectedMeme(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg p-2 text-white text-sm"
                    >
                      <option value="">Select a template...</option>
                      {memeTemplates.map((template) => (
                        <option key={template.id} value={template.template}>
                          {template.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-white/80 mb-2 block">Or Create Custom:</label>
                    <input
                      type="text"
                      placeholder="Your custom meme text..."
                      value={customMemeText}
                      onChange={(e) => setCustomMemeText(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg p-2 text-white text-sm"
                    />
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3 mb-4 min-h-16 flex items-center justify-center">
                  <div className="text-center text-yellow-400 font-bold">
                    {customMemeText || selectedMeme || "Your meme will appear here..."}
                  </div>
                </div>
                <Button
                  onClick={generateMeme}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2"
                >
                  Generate & Share Meme (+15 XP)
                </Button>
              </CardContent>
            </Card>

            {/* Community Suggestions */}
            <Card className="bg-gradient-to-r from-teal-500/20 to-green-500/20 backdrop-blur-sm border-teal-400/50">
              <CardContent className="p-6">
                <h3 className="text-teal-400 text-xl font-bold mb-4">💡 Voice of Community</h3>
                <div className="mb-4">
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      placeholder="Suggest a new feature..."
                      value={newSuggestion}
                      onChange={(e) => setNewSuggestion(e.target.value)}
                      className="flex-1 bg-gray-800 border border-gray-600 rounded-lg p-2 text-white text-sm"
                    />
                    <Button onClick={submitSuggestion} className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2">
                      Submit
                    </Button>
                  </div>
                </div>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {communitySuggestions.map((suggestion) => (
                    <div key={suggestion.id} className="bg-gray-800/50 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="text-sm font-medium">{suggestion.suggestion}</div>
                          <div className="text-xs text-white/60">{suggestion.votes} votes</div>
                        </div>
                        {!suggestion.userVoted && (
                          <Button
                            onClick={() => voteOnSuggestion(suggestion.id)}
                            className="bg-teal-500 hover:bg-teal-600 text-white text-xs py-1 px-2 ml-2"
                          >
                            Vote
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mb-8">
          <h2 className="title-3d text-4xl md:text-5xl text-yellow-400 mb-8 tracking-wider">COMMUNITY HUB</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Live Chat */}
            <Card className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border-cyan-400/50">
              <CardContent className="p-6">
                <h3 className="text-cyan-400 text-xl font-bold mb-4 flex items-center">
                  💬 Live Community Chat
                  <span className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                </h3>
                <div className="space-y-3 max-h-48 overflow-y-auto mb-4">
                  {chatMessages.map((msg) => (
                    <div key={msg.id} className="bg-gray-800/50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-bold text-cyan-400">{msg.user}</span>
                          {msg.verified && <span className="text-yellow-400 text-xs">✓</span>}
                        </div>
                        <span className="text-xs text-white/60">{msg.time}</span>
                      </div>
                      <div className="text-sm text-white">{msg.message}</div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                    className="flex-1 bg-gray-800 border border-gray-600 rounded-lg p-2 text-white text-sm"
                  />
                  <Button onClick={sendMessage} className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2">
                    Send
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Holder Verification */}
            <Card className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-sm border-emerald-400/50">
              <CardContent className="p-6">
                <h3 className="text-emerald-400 text-xl font-bold mb-4">🔐 Holder Verification</h3>
                {!isHolderVerified ? (
                  <div className="text-center">
                    <div className="mb-4">
                      <div className="text-sm text-white/80 mb-2">Verify your SLERF holdings to unlock:</div>
                      <ul className="text-xs text-white/60 space-y-1">
                        <li>• Exclusive alpha content</li>
                        <li>• Verified badge in chat</li>
                        <li>• Early access to features</li>
                        <li>• Community voting rights</li>
                      </ul>
                    </div>
                    <Button
                      onClick={verifyHolder}
                      className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-6"
                    >
                      Connect Wallet & Verify
                    </Button>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-green-400 text-2xl mb-2">✓ Verified Holder</div>
                    <div className="text-sm text-white/80 mb-4">You have access to all exclusive content!</div>
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <div className="text-xs text-white/60">Your Holdings</div>
                      <div className="text-lg font-bold text-green-400">{portfolioAmount.toLocaleString()} SLERF</div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Community Polls */}
            <Card className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 backdrop-blur-sm border-violet-400/50">
              <CardContent className="p-6">
                <h3 className="text-violet-400 text-xl font-bold mb-4">🗳️ Community Polls</h3>
                <div className="space-y-4 max-h-64 overflow-y-auto">
                  {activePolls.map((poll) => (
                    <div key={poll.id} className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-sm font-bold mb-3">{poll.question}</div>
                      <div className="space-y-2">
                        {poll.options.map((option, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs">{option.text}</span>
                                <span className="text-xs text-violet-400">{option.votes} votes</span>
                              </div>
                              <div className="w-full bg-gray-700 rounded-full h-2">
                                <div
                                  className="bg-gradient-to-r from-violet-400 to-purple-500 h-2 rounded-full"
                                  style={{ width: `${(option.votes / poll.totalVotes) * 100}%` }}
                                />
                              </div>
                            </div>
                            {!poll.userVoted && isHolderVerified && (
                              <Button
                                onClick={() => voteOnPoll(poll.id, index)}
                                className="ml-2 bg-violet-500 hover:bg-violet-600 text-white text-xs py-1 px-2"
                              >
                                Vote
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="text-xs text-white/60 mt-2">
                        Total votes: {poll.totalVotes} •{" "}
                        {poll.userVoted ? "You voted" : "Verification required to vote"}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Exclusive Content */}
            <Card className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border-amber-400/50">
              <CardContent className="p-6">
                <h3 className="text-amber-400 text-xl font-bold mb-4">🔒 Exclusive Content</h3>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {exclusiveContent.map((content) => (
                    <div key={content.id} className="bg-gray-800/50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-bold">{content.title}</div>
                        <div className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded">
                          {content.type.toUpperCase()}
                        </div>
                      </div>
                      {isHolderVerified && portfolioAmount >= content.minHolding ? (
                        <div className="text-xs text-white/80">{content.content}</div>
                      ) : (
                        <div className="text-xs text-white/60">
                          🔒 Requires {content.minHolding.toLocaleString()} SLERF minimum holding
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {!isHolderVerified && (
                  <div className="text-center mt-4">
                    <Button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-4 text-sm">
                      Verify Holdings to Unlock
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mb-8">
          <h2 className="title-3d text-4xl md:text-5xl text-yellow-400 mb-8 tracking-wider">TRADING TOOLS</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Portfolio Tracker */}
            <Card className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border-green-400/50">
              <CardContent className="p-6">
                <h3 className="text-green-400 text-xl font-bold mb-4">💼 Portfolio Tracker</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-sm text-white/80 mb-2 block">SLERF Amount</label>
                    <input
                      type="number"
                      value={portfolioAmount}
                      onChange={(e) => setPortfolioAmount(Number(e.target.value))}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg p-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white/80 mb-2 block">Buy Price</label>
                    <input
                      type="number"
                      step="0.000001"
                      value={portfolioBuyPrice}
                      onChange={(e) => setPortfolioBuyPrice(Number(e.target.value))}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg p-2 text-white"
                    />
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-sm text-white/80">Current Value</div>
                      <div className="text-lg font-bold text-white">${portfolioData.currentValue.toFixed(2)}</div>
                    </div>
                    <div>
                      <div className="text-sm text-white/80">P&L</div>
                      <div
                        className={`text-lg font-bold ${portfolioData.pnl >= 0 ? "text-green-400" : "text-red-400"}`}
                      >
                        ${portfolioData.pnl.toFixed(2)} ({portfolioData.pnlPercentage.toFixed(2)}%)
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2">
                  Connect Wallet
                </Button>
              </CardContent>
            </Card>

            {/* Profit Calculator */}
            <Card className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border-orange-400/50">
              <CardContent className="p-6">
                <h3 className="text-orange-400 text-xl font-bold mb-4">📊 Profit Calculator</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-sm text-white/80 mb-2 block">Investment Amount</label>
                    <input
                      type="number"
                      value={profitCalcAmount}
                      onChange={(e) => setProfitCalcAmount(Number(e.target.value))}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg p-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white/80 mb-2 block">Buy Date</label>
                    <input
                      type="date"
                      value={profitCalcDate}
                      onChange={(e) => setProfitCalcDate(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg p-2 text-white"
                    />
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-center mb-2">
                    <div className="text-sm text-white/80">If you bought {profitData.daysSince} days ago</div>
                    <div className="text-xs text-white/60">Price then: ${profitData.historicalPrice.toFixed(6)}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-white/80">Your profit would be</div>
                    <div className={`text-2xl font-bold ${profitData.profit >= 0 ? "text-green-400" : "text-red-400"}`}>
                      ${profitData.profit.toFixed(2)} ({profitData.profitPercentage.toFixed(2)}%)
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Price Alerts */}
            <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border-purple-400/50">
              <CardContent className="p-6">
                <h3 className="text-purple-400 text-xl font-bold mb-4">🔔 Price Alerts</h3>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <input
                    type="number"
                    step="0.000001"
                    placeholder="Price"
                    value={newAlertPrice}
                    onChange={(e) => setNewAlertPrice(e.target.value)}
                    className="bg-gray-800 border border-gray-600 rounded-lg p-2 text-white text-sm"
                  />
                  <select
                    value={newAlertType}
                    onChange={(e) => setNewAlertType(e.target.value as "above" | "below")}
                    className="bg-gray-800 border border-gray-600 rounded-lg p-2 text-white text-sm"
                  >
                    <option value="above">Above</option>
                    <option value="below">Below</option>
                  </select>
                  <Button onClick={addPriceAlert} className="bg-purple-500 hover:bg-purple-600 text-white text-sm py-1">
                    Add
                  </Button>
                </div>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {priceAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-center justify-between bg-gray-800/50 rounded-lg p-2">
                      <div className="text-sm">
                        {alert.type === "above" ? "📈" : "📉"} ${alert.price.toFixed(6)}
                      </div>
                      <Button
                        onClick={() => toggleAlert(alert.id)}
                        className={`text-xs py-1 px-2 ${alert.active ? "bg-green-500 hover:bg-green-600" : "bg-gray-500 hover:bg-gray-600"}`}
                      >
                        {alert.active ? "ON" : "OFF"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Multi-DEX Comparison */}
            <Card className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border-blue-400/50">
              <CardContent className="p-6">
                <h3 className="text-blue-400 text-xl font-bold mb-4">🔄 DEX Comparison</h3>
                <div className="space-y-3">
                  {dexPrices.map((dex, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-white">{dex.name}</div>
                        <div className="text-yellow-400 font-bold">${dex.price.toFixed(6)}</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-xs text-white/60">
                        <div>Liquidity: {dex.liquidity}</div>
                        <div>24h Vol: {dex.volume}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2">
                  Find Best Price
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-8">
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
            <CardContent className="p-6">
              <h3 className="text-yellow-400 text-xl font-bold mb-4 flex items-center">
                🔴 Live Transactions
                <span className="ml-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </h3>
              <div className="space-y-3 max-h-48 overflow-y-auto">
                {liveTransactions.map((tx) => (
                  <div key={tx.id} className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${tx.type === "buy" ? "bg-green-400" : "bg-red-400"}`} />
                      <div>
                        <div className="text-sm font-bold">
                          {tx.type.toUpperCase()} {tx.amount} SLERF
                          {tx.isWhale && <span className="ml-2 text-yellow-400">🐋</span>}
                        </div>
                        <div className="text-xs text-white/60">
                          {tx.wallet} • {tx.time}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border-purple-400/50">
            <CardContent className="p-6">
              <h3 className="text-purple-400 text-xl font-bold mb-4">🐋 Whale Tracker</h3>
              <div className="space-y-3">
                {whaleAlerts.map((whale) => (
                  <div key={whale.id} className="bg-gray-800/50 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-yellow-400">
                          WHALE {whale.type.toUpperCase()}: {whale.amount} SLERF
                        </div>
                        <div className="text-xs text-white/60">
                          {whale.wallet} • {whale.time}
                        </div>
                      </div>
                      <div className="text-2xl">🚨</div>
                    </div>
                  </div>
                ))}
                <div className="text-center">
                  <Button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full text-sm">
                    Enable Whale Alerts
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <h3 className="text-yellow-400 text-2xl font-bold mb-4">Daily Challenges</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dailyChallenges.map((challenge) => (
              <Card key={challenge.id} className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
                <CardContent className="p-4">
                  <div className="text-sm font-bold mb-2">{challenge.task}</div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs">
                      {challenge.progress}/{challenge.target}
                    </span>
                    <span className="text-yellow-400 text-xs">{challenge.reward}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                    <div
                      className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full"
                      style={{ width: `${(challenge.progress / challenge.target) * 100}%` }}
                    />
                  </div>
                  {challenge.completed ? (
                    <div className="text-green-400 text-xs font-bold">✓ COMPLETED</div>
                  ) : challenge.progress >= challenge.target ? (
                    <Button
                      onClick={() => completeChallenge(challenge.id)}
                      className="w-full bg-yellow-400 hover:bg-yellow-500 text-black text-xs py-1"
                    >
                      CLAIM REWARD
                    </Button>
                  ) : (
                    <div className="text-white/60 text-xs">In Progress...</div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {raidActive && (
          <div className="max-w-2xl mx-auto mb-8">
            <Card className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border-red-400/50">
              <CardContent className="p-6 text-center">
                <h3 className="text-red-400 text-xl font-bold mb-2">🔥 COMMUNITY RAID ACTIVE</h3>
                <p className="mb-4">Join the Twitter raid! Like, retweet, and comment on our latest post</p>
                <p className="text-sm text-blue-300 mb-4">Follow @slerf00 for updates</p>
                <div className="flex justify-between items-center mb-4">
                  <span>Participants: {raidParticipants}</span>
                  <span className="text-yellow-400">Goal: 1000</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                  <div
                    className="bg-gradient-to-r from-red-400 to-orange-500 h-3 rounded-full"
                    style={{ width: `${Math.min((raidParticipants / 1000) * 100, 100)}%` }}
                  />
                </div>
                <Button 
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full"
                  onClick={() => window.open('https://twitter.com/slerf00', '_blank')}
                >
                  JOIN RAID
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="max-w-2xl mx-auto mb-8">
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
            <CardContent className="p-6">
              <h3 className="text-yellow-400 text-xl font-bold mb-4">Referral Program</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">{referralCount}</div>
                  <div className="text-sm text-white/80">Friends Referred</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">{referralCount * 100}</div>
                  <div className="text-sm text-white/80">XP Earned</div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-3 mb-4">
                <div className="text-xs text-white/60 mb-1">Your Referral Code:</div>
                <div className="text-yellow-400 font-mono text-lg">{referralCode}</div>
              </div>
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2">
                SHARE REFERRAL LINK
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto mb-8">
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
            <CardContent className="p-6">
              <h3 className="text-yellow-400 text-xl font-bold mb-4">Staking Simulator</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm text-white/80 mb-2 block">SLERF Amount</label>
                  <input
                    type="number"
                    value={stakingAmount}
                    onChange={(e) => setStakingAmount(Number(e.target.value))}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg p-2 text-white"
                  />
                </div>
                <div>
                  <label className="text-sm text-white/80 mb-2 block">Days</label>
                  <input
                    type="number"
                    value={stakingDays}
                    onChange={(e) => setStakingDays(Number(e.target.value))}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg p-2 text-white"
                  />
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-4 mb-4">
                <div className="text-center">
                  <div className="text-sm text-white/80">Estimated Rewards</div>
                  <div className="text-2xl font-bold text-green-400">{calculateStakingRewards()} SLERF</div>
                  <div className="text-xs text-white/60">15% APY</div>
                </div>
              </div>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2">
                START STAKING (Coming Soon)
              </Button>
            </CardContent>
          </Card>
        </div>

        {achievements.length > 0 && (
          <div className="mb-8">
            <h3 className="text-yellow-400 text-xl font-bold mb-4">🏆 Achievements Unlocked</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {achievements.map((achievement, index) => (
                <span key={index} className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {achievement}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        <p className="text-xl md:text-2xl font-semibold mb-12 max-w-2xl mx-auto leading-relaxed">
          SLERF the Sloth is a laid back meme token spreading good vibes on the base chain
        </p>

        {/* Social Media Buttons */}
        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto mb-12">
          <Button className="social-button bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-6 rounded-full text-lg">
            🍌 APESTORE
          </Button>
          <Button className="social-button bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-6 rounded-full text-lg">
            🔍 DEXSCREENER
          </Button>
          <Button 
            className="social-button bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-full text-lg"
            onClick={() => window.open('https://t.me/boomtokn', '_blank')}
          >
            ✈️ TELEGRAM
          </Button>
          <Button className="social-button bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-6 rounded-full text-lg">
            🦄 UNISWAP
          </Button>
          <Button className="social-button bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-full text-lg">
            👻 PHANTOM
          </Button>
          <Button 
            className="social-button bg-blue-400 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-full text-lg"
            onClick={() => window.open('https://twitter.com/slerf00', '_blank')}
          >
            🐦 TWITTER
          </Button>
        </div>

        <div className="text-center py-12 px-4">
          <h2 className="title-3d text-4xl md:text-5xl text-yellow-400 mb-8 tracking-wider">TRADE SLERF</h2>
          <p className="text-xl mb-8">Swap tokens instantly with the best rates</p>

          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-yellow-400/30">
              <iframe
                id="dextswap-aggregator-widget"
                title="DEXTswap Aggregator"
                width="400"
                height="420"
                src="https://www.dextools.io/widget-aggregator/en/swap/base/0x233df63325933fa3f2dac8e695cd84bb2f91ab07"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="text-center py-12 px-4">
          <h2 className="title-3d text-4xl md:text-5xl text-yellow-400 mb-8 tracking-wider">COMMUNITY GOALS</h2>

        <div className="max-w-2xl mx-auto space-y-6">
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold">15K Holders Goal</span>
                <span className="text-yellow-400">{Math.round((holderCount / 15000) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${Math.min((holderCount / 15000) * 100, 100)}%` }}
                />
              </div>
              <p className="text-sm text-white/80 mt-2">Unlock exclusive NFT rewards!</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold">$10M Market Cap</span>
                <span className="text-yellow-400">73%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full w-3/4" />
              </div>
              <p className="text-sm text-white/80 mt-2">Unlock staking rewards!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tokenomics Section */}
      <div className="text-center py-12 px-4">
        <h2 className="title-3d text-5xl md:text-6xl text-yellow-400 mb-8 tracking-wider">TOKENOMICS</h2>

        <div className="max-w-4xl mx-auto">
          <img
            src="/tokenomics-chart.png"
            alt="Tokenomics Chart"
            className="w-full h-64 md:h-80 object-cover rounded-2xl mb-8"
          />
        </div>
      </div>

      {/* Project Info Sections */}
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Launch Section */}
        <div className="text-left">
          <h3 className="text-yellow-400 text-2xl font-bold mb-4">LAUNCH</h3>
          <p className="text-lg leading-relaxed">
            SLERF The Sloth is fair launched on Base.store with 1 billion token supply with 30% team allocation. SLERF
            is 100% rug-free with liquidity locked, providing investor confidence and protection against dumps.
          </p>
        </div>

        {/* Vision Section */}
        <div className="text-left">
          <h3 className="text-yellow-400 text-2xl font-bold mb-4">VISION</h3>
          <p className="text-lg leading-relaxed">
            SLERF The Sloth aims to be the most trusted and approachable meme token on the Base blockchain, fostering a
            transparent, community-driven ecosystem that prioritizes security and positive engagement.
          </p>
        </div>

        {/* Plan Section */}
        <div className="text-left">
          <h3 className="text-yellow-400 text-2xl font-bold mb-4">PLAN</h3>
          <p className="text-lg leading-relaxed">
            Establish SLERF The Sloth as the leading meme token on the Base blockchain, known for its integrity,
            community focus, and ability to bring people together in a secure, positive space.
          </p>
        </div>
      </div>

      {/* How to Buy Section */}
      <div className="text-center py-16 px-4">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-12">How to Buy SLERF</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {/* Step 1 */}
          <Card className="step-card">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-black mb-4">GET A WALLET</h3>
              <p className="text-black">DOWNLOAD METAMASK OR YOUR PREFERRED CRYPTO WALLET</p>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="step-card">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-black mb-4">BUY ETH</h3>
              <p className="text-black">PURCHASE ETHEREUM FROM ANY MAJOR EXCHANGE</p>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="step-card">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-black mb-4">CONNECT TO DEX</h3>
              <p className="text-black">CONNECT YOUR WALLET TO UNISWAP OR PANCAKESWAP</p>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card className="step-card">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-black mb-4">SWAP FOR SLERF</h3>
              <p className="text-black">EXCHANGE YOUR ETH FOR SLERF TOKENS</p>
            </CardContent>
          </Card>
        </div>

        {/* Buy Button */}
        <Button className="social-button bg-white hover:bg-gray-100 text-black font-bold py-4 px-12 rounded-full text-xl border-2 border-black">
          BUY $SLERF
        </Button>
      </div>

      {/* Footer */}
      <div className="text-center py-8 px-4">
        <p className="text-white/80">© 2024 SLERFONBASE. All rights reserved.</p>
      </div>
    </div>
  )\
}
