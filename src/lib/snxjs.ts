import { synthetix, Config, Network } from '@synthetixio/contracts-interface';

const initSnxJS = (config: Config) => synthetix(config);

const snxjs = initSnxJS({ network: Network.Mainnet });

export default snxjs;
