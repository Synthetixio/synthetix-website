import { synthetix, Config, SynthetixJS, NetworkId } from '@synthetixio/contracts-interface';
import { providers } from 'ethers';

const initSnxJS = (config: Config) => synthetix(config);

let snxjs: SynthetixJS;

const getSNXJS = (config?: Config) => {
	if (config || !snxjs) {
		snxjs = initSnxJS({
			networkId: NetworkId.Mainnet,
			// @ts-ignore TODO #152
			provider: new providers.InfuraProvider(config?.networkId || NetworkId.Mainnet, {
				projectId: process.env.NEXT_INFURA_PROJECT_ID,
				projectSecret: process.env.NEXT_INFURA_PROJECT_SECRET,
			}),
			...config,
		});
	}
	return snxjs;
};

export default getSNXJS;
