# SLERF App - Complete Deployment Guide

## Quick Start

### 1. Prepare Your Environment

```bash
# Clone the repository
git clone https://github.com/Boomchainlab/slerfonbase-website.git
cd slerfonbase-website

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Edit .env.local with your values
nano .env.local
```

### 2. Deploy to Vercel (Web)

```bash
# Login to Vercel
npx vercel login

# Deploy
npx vercel

# For production
npx vercel --prod
```

Or use GitHub integration:
1. Push to GitHub
2. Connect GitHub to Vercel dashboard
3. Auto-deploys on every push to main

**Your URL:** https://slerf-app.vercel.app

### 3. Deploy to App Stores

#### iOS (Apple App Store)

1. Create Apple Developer account (99/year)
2. Update `public/app-store-config.json` with your Team ID
3. Get code signing certificates from Apple Developer
4. Build iOS app:
   ```bash
   xcodebuild -scheme SLERF -configuration Release \
     -archivePath build/SLERF.xcarchive archive
   ```
5. Upload to TestFlight first for testing
6. Submit to App Store review

**Store Link:** https://apps.apple.com/app/slerf

#### Android (Google Play Store)

1. Create Google Play Developer account ($25 one-time)
2. Generate signing key:
   ```bash
   keytool -genkey -v -keystore slerf-release.keystore \
     -keyalg RSA -keysize 2048 -validity 10000
   ```
3. Build signed APK/Bundle:
   ```bash
   ./gradlew bundleRelease
   ```
4. Upload to Google Play Console
5. Prepare store listing (app name, icons, screenshots, description)
6. Submit for review

**Store Link:** https://play.google.com/store/apps/details?id=com.slerfonbase.app

### 4. Set Up Web3 Infrastructure

```bash
# 1. Verify your smart contract is on Base:
# Contract: 0x233df63325933fa3f2dac8e695cd84bb2f91ab07
# Verify on: https://basescan.org

# 2. Test wallet connection with MetaMask
# Add Base network to MetaMask:
# - RPC: https://mainnet.base.org
# - Chain ID: 8453
# - Currency: ETH

# 3. Test game and farming features locally
npm run dev
# Open http://localhost:3000
```

### 5. Configure Social Links

Update these in your admin panel or environment variables:

- **Twitter:** https://twitter.com/slerf00
- **Telegram:** https://t.me/boomtokn
- **Discord:** Your Discord server
- **Website:** https://slerf.app
- **Docs:** https://docs.slerf.app

### 6. Set Up Monitoring

```bash
# 1. Vercel Analytics (included in Pro plan)
# Dashboard: https://vercel.com/dashboard

# 2. Optional: Google Analytics
# Add GA_ID to .env.local and uncomment in app/layout.tsx

# 3. Optional: Error Tracking (Sentry)
npm install @sentry/nextjs
# Configure SENTRY_DSN in .env.local
```

### 7. Create App Store Assets

Generate or upload these assets:

**Icons Required:**
- 192x192 (Android)
- 512x512 (Android)
- 1024x1024 (iOS)
- 1280x720 (Featured)

**Screenshots Required:**
- 2-5 screenshots per platform
- Show key features: Play, Earn, Dashboard
- Max 5 per platform

**Description:**
> SLERF - The viral DeFi token on Base blockchain. Play games and earn real SLERF tokens. Trade, farm yield, and join the revolution!

### 8. Production Checklist

Before launching, verify:

- [ ] Environment variables set in Vercel
- [ ] Smart contract address verified on BaseScan
- [ ] Wallet connection tested
- [ ] Game mechanics working
- [ ] Farming pools accessible
- [ ] Dashboard data loading
- [ ] Mobile responsive on iOS/Android
- [ ] PWA installable
- [ ] All links working
- [ ] Privacy policy published
- [ ] Terms of service published
- [ ] Support email configured
- [ ] Twitter/Telegram links active
- [ ] Error tracking enabled
- [ ] Analytics enabled

### 9. Post-Launch Monitoring

Daily:
- Check app store reviews
- Monitor error tracking
- Verify smart contract calls working

Weekly:
- Review analytics dashboard
- Check user engagement metrics
- Plan feature updates
- Monitor social media mentions

Monthly:
- Plan new features
- Review token metrics
- Community feedback session
- Scale infrastructure if needed

### 10. Update Deployment

To push updates:

```bash
# Web/PWA
git add .
git commit -m "Update: description of changes"
git push origin main
# Vercel auto-deploys in ~60 seconds

# iOS
# Submit new build to TestFlight/App Store
# Review takes 24-48 hours

# Android
# Upload new bundle to Play Console
# Review takes 2-4 hours
```

## Key Files

- `vercel.json` - Vercel deployment configuration
- `manifest.json` - PWA and app store manifest
- `public/app-store-config.json` - Store-specific configs
- `.env.example` - Environment variables template
- `app/layout.tsx` - App metadata and SEO
- `app/page.tsx` - Homepage
- `app/game/page.tsx` - Game page
- `app/farming/page.tsx` - Yield farming
- `app/dashboard/page.tsx` - Portfolio dashboard

## Support

- **Documentation:** https://docs.slerf.app
- **Issues:** https://github.com/Boomchainlab/slerfonbase-website/issues
- **Discord:** https://discord.gg/slerf
- **Twitter:** https://twitter.com/slerf00

## Troubleshooting

### Wallet connection fails
- Check MetaMask is on Base network
- Verify RPC URL in .env.local
- Clear browser cache

### App doesn't install on mobile
- Check manifest.json is valid
- Verify HTTPS is enabled
- Test in Chrome/Safari directly

### Smart contract calls fail
- Verify contract address is correct
- Check contract exists on Base at BaseScan
- Verify user has gas fee (ETH on Base)

---

**Version:** 1.0.0  
**Last Updated:** 2024  
**Deployment Status:** Production Ready
