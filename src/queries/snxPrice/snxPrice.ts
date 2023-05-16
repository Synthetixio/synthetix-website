import Synthetix from '@synthetixio/contracts-interface';
import { ethers } from 'ethers';

const getSnxPrice = async () => {
	const snxjs = Synthetix({ useOvm: false });
	const [snxPriceBn] = await snxjs.contracts.ExchangeRates.ratesForCurrencies([
		ethers.utils.formatBytes32String('SNX'),
	]);
	return parseFloat(ethers.utils.formatEther(snxPriceBn));
};
export default getSnxPrice;
