import { synthetix, Config } from '@synthetixio/contracts-interface';

import { DEFAULT_NETWORK_ID } from 'src/constants/defaults';

const initSnxJS = (config: Config) => synthetix(config);

const snxjs = initSnxJS({ networkId: DEFAULT_NETWORK_ID });

export default snxjs;
