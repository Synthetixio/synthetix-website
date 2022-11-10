import {
	synthetix,
	Config,
	SynthetixJS,
	NetworkIdByName,
} from '@synthetixio/contracts-interface';
import { providers } from 'ethers';

const initSnxJS = (config: Config) => synthetix(config);

let snxjsL1: SynthetixJS;
let snxjsL2: SynthetixJS;

const getSNXJS = (config: Config) => {
	if (!config?.useOvm || !snxjsL1) {
		snxjsL1 = initSnxJS({
			networkId: NetworkIdByName.mainnet,
			provider: new providers.InfuraProvider(
				config?.networkId || NetworkIdByName.mainnet,
				{ projectId: process.env.NEXT_INFURA_PROJECT_ID },
			),
			...config,
		});
	}
	if (config?.useOvm || !snxjsL2) {
		snxjsL2 = initSnxJS({
			networkId: NetworkIdByName['mainnet-ovm'],
			provider: new providers.InfuraProvider(
				config?.networkId || NetworkIdByName['mainnet-ovm'],
				{ projectId: process.env.NEXT_INFURA_PROJECT_ID },
			),
			...config,
		});
	}
	if (config?.useOvm) {
		return snxjsL2;
	} else {
		return snxjsL1;
	}
};

export default getSNXJS;
