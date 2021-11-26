import {
	synthetix,
	Config,
	SynthetixJS,
	NetworkId,
	Network,
} from '@synthetixio/contracts-interface';
import { providers } from '@synthetixio/contracts-interface/node_modules/ethers';
import { DEFAULT_NETWORK_ID } from 'src/constants/defaults';

const initSnxJS = (config: Config) => synthetix(config);

let snxjs: SynthetixJS;

const getSNXJS = (config?: Config) => {
	if (!snxjs)
		return initSnxJS({
			networkId: DEFAULT_NETWORK_ID,
			provider: new providers.InfuraProvider(config?.network || DEFAULT_NETWORK_ID, {
				projectId: process.env.NEXT_PUBLIC_INFURA_PROJECT_ID,
				projectSecret: process.env.NEXT_INFURA_PROJECT_SECRET,
			}),
			...config,
		});
	else return snxjs;
};

export default getSNXJS;
