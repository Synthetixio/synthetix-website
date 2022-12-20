const packageJson = require('./package');
const execSync = require('child_process').execSync;
const lastCommitCommand = 'git rev-parse HEAD';

const date = new Date();

console.debug(
	`Building Next with NODE_ENV="${process.env.NODE_ENV}" NEXT_PUBLIC_APP_STAGE="${process.env.NEXT_PUBLIC_APP_STAGE}"`,
);
/**
 * @type {import('next').NextConfig}
 */
module.exports = {
	async generateBuildId() {
		return execSync(lastCommitCommand).toString().trim();
	},
	async redirects() {
		return [
			{ source: '/build/:slug', destination: '/', permanent: false },
			{ source: '/futures', destination: '/perps', permanent: false },
		];
	},
	env: {
		// Dynamic env variables
		NEXT_PUBLIC_BUILD_TIME: date.toString(),
		NEXT_PUBLIC_BUILD_TIMESTAMP: +date,
		NEXT_PUBLIC_APP_NAME: packageJson.name,
		NEXT_PUBLIC_APP_VERSION: packageJson.version,
		NEXT_PUBLIC_MATOMO_URL: process.env.NEXT_PUBLIC_MATOMO_URL,
		NEXT_PUBLIC_MATOMO_SITE_ID: process.env.NEXT_PUBLIC_MATOMO_SITE_ID,
	},
	images: {
		domains: ['cdn.sanity.io'],
	},
	productionBrowserSourceMaps: true,
};
