import { synthetix, Config, SynthetixJS, NetworkIdByName } from '@synthetixio/contracts-interface';
import { providers } from 'ethers';

const initSnxJS = (config: Config) => synthetix(config);

let snxjs: SynthetixJS;

const getSNXJS = (config?: Config) => {
	if (config || !snxjs) {
		snxjs = initSnxJS({
			networkId: NetworkIdByName.mainnet,
			provider: new providers.InfuraProvider(config?.networkId || NetworkIdByName.mainnet, {
				projectId: process.env.NEXT_INFURA_PROJECT_ID,
				projectSecret: process.env.NEXT_INFURA_PROJECT_SECRET,
			}),
			...config,
		});
	}
	return snxjs;
};

export default getSNXJS;
