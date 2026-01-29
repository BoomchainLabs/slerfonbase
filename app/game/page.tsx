"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import Link from "next/link"

export default function GamePage() {
  const [gameSessionActive, setGameSessionActive] = useState(false)
  const [gameScore, setGameScore] = useState(0)
  const [gameHealth, setGameHealth] = useState(100)
  const [slothPosition, setSlothPosition] = useState(50)
  const [totalGameTokens, setTotalGameTokens] = useState(0)
  const [gameLevel, setGameLevel] = useState(1)
  const [gameHistory, setGameHistory] = useState<{ date: string; tokensEarned: number }[]>([])

  const startGameSession = () => {
    setGameSessionActive(true)
    setGameScore(0)
    setGameHealth(100)
    setSlothPosition(50)
  }

  const endGameSession = () => {
    const tokensEarned = Math.floor(gameScore * 0.5 + gameLevel * 100)
    setGameSessionActive(false)
    setTotalGameTokens((prev) => prev + tokensEarned)

    const newEntry = {
      date: new Date().toLocaleDateString(),
      tokensEarned,
    }
    setGameHistory((prev) => [newEntry, ...prev.slice(0, 4)])

    if (gameScore > gameLevel * 500) {
      setGameLevel((prev) => prev + 1)
    }

    setGameScore(0)
  }

  const handleGameInput = (direction: "left" | "right") => {
    if (!gameSessionActive) return
    setSlothPosition((prev) => {
      if (direction === "left") return Math.max(0, prev - 8)
      return Math.min(100, prev + 8)
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-black text-white">
      <div className="sticky top-0 z-40 bg-gradient-to-r from-blue-600 to-purple-600 border-b border-yellow-400/30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold hover:text-yellow-400">
            ← Back to Home
          </Link>
          <h1 className="text-lg font-bold text-yellow-400">SLERF Game</h1>
          <div className="w-20"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="title-3d text-4xl text-yellow-400 mb-8 text-center tracking-wider">PLAY & EARN SLERF</h2>

        <Card className="bg-gradient-to-b from-indigo-600 to-blue-600 border-2 border-yellow-400 mb-8">
          <CardContent className="p-6">
            {!gameSessionActive ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4 animate-bounce">🦥</div>
                <h3 className="text-white text-2xl font-bold mb-4">SLERF Adventure Game</h3>
                <p className="text-white/80 mb-6">Move the sloth and earn real tokens!</p>
                <div className="bg-white/10 rounded-lg p-4 mb-6 inline-block">
                  <div className="text-yellow-400 text-lg font-bold">{totalGameTokens} SLERF Earned</div>
                </div>
                <Button
                  onClick={startGameSession}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full text-lg transform transition-transform hover:scale-105"
                >
                  START GAME
                </Button>
              </div>
            ) : (
              <div>
                <div className="bg-gradient-to-b from-sky-400 to-sky-200 rounded-lg p-4 mb-4 relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 right-4 flex justify-between text-white font-bold">
                    <div>Score: {gameScore}</div>
                    <div>Level: {gameLevel}</div>
                    <div>Health: {gameHealth}%</div>
                  </div>
                  <div className="flex justify-center h-full items-end pb-8">
                    <div style={{ left: `${slothPosition}%` }} className="text-6xl relative transition-all">
                      🦥
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 justify-center mb-4">
                  <Button
                    onClick={() => handleGameInput("left")}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2"
                  >
                    ← LEFT
                  </Button>
                  <Button
                    onClick={() => handleGameInput("right")}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2"
                  >
                    RIGHT →
                  </Button>
                </div>

                <Button
                  onClick={endGameSession}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2"
                >
                  END GAME - Claim {Math.floor(gameScore * 0.5 + gameLevel * 100)} SLERF
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {gameHistory.length > 0 && (
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
            <CardContent className="p-6">
              <h3 className="text-yellow-400 text-lg font-bold mb-4">Recent Games</h3>
              <div className="space-y-2">
                {gameHistory.map((game, idx) => (
                  <div key={idx} className="flex justify-between text-white/80 text-sm">
                    <span>{game.date}</span>
                    <span className="text-yellow-400 font-bold">+{game.tokensEarned} SLERF</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
