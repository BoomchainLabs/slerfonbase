export const viralMechanics = {
  // Referral bonus structure (exponential rewards)
  referralBonuses: {
    tier1: 0.05, // 5% of referee's volume
    tier2: 0.07, // 7% after 10 referrals
    tier3: 0.10, // 10% after 50 referrals
    tier4: 0.15, // 15% after 100+ referrals
  },

  // Viral coefficient calculation (how many new users per existing user)
  viralCoefficient: {
    baseRate: 0.8, // 80% of users refer at least 1 person
    incentiveMultiplier: 1.5, // 50% boost from referral rewards
    shareBonus: 0.3, // 30% bonus for social shares
  },

  // Network effect multipliers
  networkEffects: {
    holderMilestone: {
      '10k': 1.2, // 20% boost at 10k holders
      '50k': 1.4, // 40% boost at 50k holders
      '100k': 1.8, // 80% boost at 100k holders
      '500k': 2.5, // 150% boost at 500k holders
      '1m': 3.0, // 200% boost at 1m holders
    },
    volumeMilestone: {
      '10m': 1.15,
      '50m': 1.4,
      '100m': 1.8,
      '500m': 2.2,
      '1b': 3.0,
    },
  },

  // Gamification virality drivers
  gamification: {
    dailyChallengeShare: 0.25, // 25% share daily challenge results
    leaderboardShare: 0.4, // 40% of top 10 share their status
    achievementShare: 0.6, // 60% share achievement unlock
    memeGenShare: 0.8, // 80% share generated memes
  },

  // Social media amplification
  socialAmplification: {
    twitter: {
      reachMultiplier: 2.5,
      engagementRate: 0.08,
      shareability: 0.7,
    },
    telegram: {
      reachMultiplier: 3.0,
      engagementRate: 0.12,
      shareability: 0.9,
    },
    discord: {
      reachMultiplier: 2.0,
      engagementRate: 0.15,
      shareability: 0.8,
    },
  },

  // Viral loop triggers
  triggers: {
    firstTrade: { reward: 100, share_incentive: 50 },
    firstReferral: { reward: 250, unlock_tier2: true },
    tenReferrals: { reward: 1000, unlock_tier3: true },
    fiftyReferrals: { reward: 5000, unlock_tier4: true },
    milestoneCelebration: { reward: 500, global_notification: true },
    topLeaderboard: { reward: 2000, badge: 'Elite Trader' },
  },

  // Explosive growth predictions
  projections: {
    week1: { users: 1000, volume: 500000 },
    week2: { users: 3500, volume: 2500000 },
    week3: { users: 15000, volume: 12500000 },
    week4: { users: 75000, volume: 75000000 },
    month2: { users: 250000, volume: 500000000 },
    month3: { users: 1000000, volume: 2000000000 },
  },
}

// Viral coefficient calculator (R = C × Conv × S × N)
export function calculateViralCoefficient(
  campaignSize: number,
  conversionRate: number,
  shareRate: number,
  networkMultiplier: number
) {
  return campaignSize * conversionRate * shareRate * networkMultiplier
}

// Exponential growth calculator
export function projectGrowth(
  initialUsers: number,
  viralCoeff: number,
  weeks: number
) {
  return initialUsers * Math.pow(viralCoeff, weeks)
}
