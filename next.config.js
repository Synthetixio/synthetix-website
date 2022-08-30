const packageJson = require('./package');
const execSync = require('child_process').execSync;
const lastCommitCommand = 'git rev-parse HEAD';

const date = new Date();

console.debug(
	`Building Next with NODE_ENV="${process.env.NODE_ENV}" NEXT_PUBLIC_APP_STAGE="${process.env.NEXT_PUBLIC_APP_STAGE}"`
);
/**
 * @type {import('next').NextConfig}
 */
module.exports = {
	async generateBuildId() {
		return execSync(lastCommitCommand).toString().trim();
	},
	async redirects() {
		return [{ source: '/build/:slug', destination: '/', permanent: false }];
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
	webpack5: true,
	webpack: (config, { isServer, buildId }) => {
		if (isServer) {
			// IS_SERVER_INITIAL_BUILD is meant to be defined only at build time and not at run time, and therefore must not be "made public"
			process.env.IS_SERVER_INITIAL_BUILD = '1';
		}

		const APP_VERSION_RELEASE = `${packageJson.version}_${buildId}`;
		config.plugins.map((plugin) => {
			if (plugin.definitions) {
				// If it has a "definitions" key, then we consider it's the DefinePlugin where ENV vars are stored
				// Dynamically add some "public env" variables that will be replaced during the build through "DefinePlugin"
				// Those variables are considered public because they are available at build time and at run time (they'll be replaced during initial build, by their value)
				plugin.definitions['process.env.NEXT_PUBLIC_APP_BUILD_ID'] = JSON.stringify(buildId);
				plugin.definitions['process.env.NEXT_PUBLIC_APP_VERSION_RELEASE'] =
					JSON.stringify(APP_VERSION_RELEASE);
			}
		});

		if (isServer) {
			// Trick to only log once
			console.debug(
				`[webpack] Building release "${APP_VERSION_RELEASE}" using NODE_ENV="${
					process.env.NODE_ENV
				}" ${process.env.IS_SERVER_INITIAL_BUILD ? 'with IS_SERVER_INITIAL_BUILD="1"' : ''}`
			);
		}

		return config;
	},
};
