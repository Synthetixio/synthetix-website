import { synthetix, Config, SynthetixJS } from '@synthetixio/contracts-interface';
import { providers } from '@synthetixio/contracts-interface/node_modules/ethers';
import { DEFAULT_NETWORK_ID } from 'src/constants/defaults';

const initSnxJS = (config: Config) => synthetix(config);

let snxjs: SynthetixJS;

const getSNXJS = (config?: Config) => {
	if (config || !snxjs) {
		snxjs = initSnxJS({
			networkId: DEFAULT_NETWORK_ID,
			provider: new providers.JsonRpcProvider(
				'https://optimism-mainnet.infura.io/v3/72131adfd0024cfc9e20510875bf0ad2'

				/* 	config?.network || DEFAULT_NETWORK_ID, {
					projectId: process.env.NEXT_INFURA_PROJECT_ID,
					projectSecret: process.env.NEXT_INFURA_PROJECT_SECRET, 
				}
				*/
			),
			...config,
		});
	}
	return snxjs;
};

export default getSNXJS;
