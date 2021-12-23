module.exports = {
  siteUrl: 'https://edson-portfolio.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [, { userAgent: '*', allow: '/', disallow: ['/terms', '/privacy'] }],
  },
  exclude: ['/terms', '/privacy'],
};
