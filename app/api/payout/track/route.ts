import { NextRequest, NextResponse } from 'next/server'
import { PAYOUT_CONFIG } from '@/lib/payout-config'

// Simple in-memory store (replace with database for production)
let payoutHistory: Array<{
  id: string
  date: string
  totalAmount: number
  status: string
  txHash?: string
}> = []

export async function GET(request: NextRequest) {
  try {
    // Calculate current week's revenue
    const now = new Date()
    const weekStart = new Date(now)
    weekStart.setDate(now.getDate() - now.getDay())
    
    const weeklyRevenue = {
      tradingFees: 2150,
      liquidityFees: 1840,
      premiumSubscriptions: 3500,
      nftCommissions: 1250,
      sponsorships: 2100,
      apiAccess: 850,
    }
    
    const totalWeekly = Object.values(weeklyRevenue).reduce((a, b) => a + b, 0)
    
    const nextPayoutDate = new Date()
    if (nextPayoutDate.getDay() !== PAYOUT_CONFIG.PAYMENT_DAY) {
      nextPayoutDate.setDate(nextPayoutDate.getDate() + (PAYOUT_CONFIG.PAYMENT_DAY - nextPayoutDate.getDay() + 7) % 7)
    }
    nextPayoutDate.setHours(PAYOUT_CONFIG.PAYMENT_HOUR, 0, 0, 0)
    
    return NextResponse.json({
      ownerAddress: PAYOUT_CONFIG.OWNER_ADDRESS,
      currentWeekRevenue: totalWeekly,
      breakdown: weeklyRevenue,
      nextPayoutDate: nextPayoutDate.toISOString(),
      daysUntilPayout: Math.ceil((nextPayoutDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)),
      payoutHistory: payoutHistory.slice(-10), // Last 10 payouts
      totalPayoutsAllTime: payoutHistory.reduce((sum, p) => sum + p.totalAmount, 0),
    })
  } catch (error) {
    console.error('Error tracking payout:', error)
    return NextResponse.json({ error: 'Failed to track payout' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action } = body
    
    if (action === 'recordPayout') {
      // Record a completed payout
      const payout = {
        id: `payout_${Date.now()}`,
        date: new Date().toISOString(),
        totalAmount: body.amount,
        status: 'completed',
        txHash: body.txHash,
      }
      payoutHistory.push(payout)
      
      return NextResponse.json({
        success: true,
        message: 'Payout recorded',
        payout,
      })
    }
    
    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  } catch (error) {
    console.error('Error processing payout:', error)
    return NextResponse.json({ error: 'Failed to process payout' }, { status: 500 })
  }
}
