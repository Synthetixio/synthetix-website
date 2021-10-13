import { synthetix, Config, SynthetixJS } from '@synthetixio/contracts-interface';
import { providers } from '@synthetixio/contracts-interface/node_modules/ethers';
import { DEFAULT_NETWORK_ID } from 'src/constants/defaults';

const initSnxJS = (config: Config) => synthetix(config);

let snxjs: SynthetixJS;

const getSNXJS = (infuraURL: string) => {
	if (!snxjs)
		return initSnxJS({
			networkId: DEFAULT_NETWORK_ID,
			provider: new providers.JsonRpcProvider(infuraURL),
		});
	else return snxjs;
};

export default getSNXJS;
