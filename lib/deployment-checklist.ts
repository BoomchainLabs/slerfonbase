export const deploymentChecklist = {
  security: {
    contractAudit: { completed: false, priority: 'CRITICAL' },
    smartContractVerified: { completed: false, priority: 'CRITICAL' },
    walletSecurity: { completed: false, priority: 'CRITICAL' },
    sslCertificate: { completed: false, priority: 'HIGH' },
    domainSSL: { completed: false, priority: 'HIGH' },
    rateLimiting: { completed: false, priority: 'MEDIUM' },
  },

  performance: {
    pagespeedInsights90plus: { completed: false, target: 95 },
    bundleSizeOptimized: { completed: false, target: '< 200KB' },
    imageCDN: { completed: false, priority: 'HIGH' },
    caching: { completed: false, strategy: 'aggressive' },
    compression: { completed: false, target: 'gzip+brotli' },
  },

  seo: {
    metatags: { completed: false, priority: 'HIGH' },
    sitemap: { completed: false, file: 'public/sitemap.xml' },
    robots: { completed: false, file: 'public/robots.txt' },
    structuredData: { completed: false, format: 'JSON-LD' },
    openGraph: { completed: false, priority: 'HIGH' },
  },

  marketing: {
    socialMetaTags: { completed: false, priority: 'CRITICAL' },
    twitterCard: { completed: false, handle: '@slerf00' },
    telegramBotSetup: { completed: false, handle: '@boomtokn' },
    discordServer: { completed: false, priority: 'HIGH' },
    email: { completed: false, service: 'SendGrid or Mailgun' },
  },

  monitoring: {
    vercelAnalytics: { completed: false, priority: 'HIGH' },
    errorTracking: { completed: false, service: 'Sentry' },
    performanceMonitoring: { completed: false, service: 'DataDog' },
    alerting: { completed: false, priority: 'HIGH' },
  },

  compliance: {
    termsOfService: { completed: false, priority: 'CRITICAL' },
    privacyPolicy: { completed: false, priority: 'CRITICAL' },
    disclaimers: { completed: false, priority: 'CRITICAL' },
    kyc: { completed: false, priority: 'MEDIUM' },
  },
}
