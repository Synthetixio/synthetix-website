module.exports = {
	siteUrl: 'https://synthetix.io',
	changefreq: 'daily',
	priority: 0.9,
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/_next/static/'],
			},
		],
	},
};
