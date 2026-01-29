# SLERF App - Deployment Guide

## Production Deployment Steps

### 1. Vercel Deployment (Web)
```bash
# Already configured via GitHub integration
# Just push to main branch and Vercel auto-deploys
git push origin main
```

Visit: https://vercel.com/dashboard

### 2. iOS App Store Deployment

#### Prerequisites:
- Apple Developer Account ($99/year)
- Xcode installed
- TestFlight access enabled

#### Steps:
1. Update `public/app-store-config.json` with your Team ID
2. Build iOS app using Xcode
3. Use Xcode Cloud or manual build:
   ```bash
   xcodebuild -scheme SLERF -configuration Release -archivePath build/SLERF.xcarchive archive
   xcodebuild -exportArchive -archivePath build/SLERF.xcarchive -exportPath build/Release -exportOptionsPlist exportOptions.plist
   ```
4. Upload to App Store Connect
5. Complete app store submission form
6. Submit for review (typically 24-48 hours)

### 3. Google Play Store Deployment

#### Prerequisites:
- Google Play Developer Account ($25 one-time)
- Android Studio installed
- Keystore created

#### Steps:
1. Update `public/app-store-config.json` with package name
2. Build Android app:
   ```bash
   ./gradlew bundleRelease
   ```
3. Sign with release keystore
4. Upload to Google Play Console
5. Fill app details and screenshots
6. Submit for review (typically 2-4 hours)

### 4. App Store Optimization (ASO)

#### Keywords:
- SLERF token
- Crypto games
- Play to earn
- DeFi gaming
- Base blockchain

#### Description Template:
"SLERF - The viral token on Base blockchain. Play games, earn real tokens, and farm high yields. Connect your wallet, play, and start earning SLERF tokens today!"

### 5. PWA Installation

Users can install directly from:
- Chrome/Edge: Menu → "Install app"
- Safari (iOS): Share → "Add to Home Screen"
- Samsung Internet: Menu → "Install app"

### 6. Critical Links

**Update in your admin panel:**
- Twitter: @slerf00
- Telegram: @boomtokn
- Discord: [Your server]
- Website: slerf.app
- Docs: docs.slerf.app

### 7. Analytics Setup

Add to `app/layout.tsx`:
```typescript
// Google Analytics
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" async />
<Script id="google-analytics">
  {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'GA_ID');`}
</Script>

// Amplitude
import * as Amplitude from '@amplitude/analytics-browser';
Amplitude.init('YOUR_API_KEY');
```

### 8. Monitoring & Maintenance

- Set up error tracking (Sentry)
- Enable performance monitoring (Vercel Analytics)
- Monitor app store reviews
- Plan updates for app store guidelines

### 9. Version Management

Current versions:
- Web (Vercel): Auto-deployed
- iOS: Managed via App Store Connect
- Android: Managed via Google Play Console

Update `package.json` version before each release:
```json
"version": "1.0.1"
```

## Production Checklist

- [ ] All mock data removed
- [ ] Smart contract addresses verified
- [ ] Wallet connection tested
- [ ] API endpoints live
- [ ] SSL certificate active
- [ ] PWA manifest updated
- [ ] App icons created (all sizes)
- [ ] Screenshots prepared
- [ ] Privacy policy published
- [ ] Terms of service published
- [ ] Support contact info added
- [ ] Bug bounty program info (optional)
- [ ] Analytics enabled
- [ ] Error tracking enabled
- [ ] Performance monitoring enabled
- [ ] App store accounts created
- [ ] Builds tested on devices
- [ ] Review apps submitted

## Post-Launch

1. Monitor app store reviews
2. Plan feature updates
3. Scale infrastructure
4. Track key metrics
5. Engage community
6. Plan marketing campaigns
