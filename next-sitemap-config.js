/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://edsonjaramillo.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
