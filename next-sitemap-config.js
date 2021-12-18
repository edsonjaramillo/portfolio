module.exports = {
  siteUrl: 'https://edson-portfolio.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
      },
      { userAgent: '*', allow: '/' },
    ],
  },
};
