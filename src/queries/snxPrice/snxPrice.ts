import getSNXJS from 'src/lib/snxjs';
import { ethers } from 'ethers';

const getSnxPrice = async () => {
	const snxjs = getSNXJS({ useOvm: false });
	const [snxPriceBn] = await snxjs.contracts.ExchangeRates.ratesForCurrencies([
		ethers.utils.formatBytes32String('SNX'),
	]);
	return parseFloat(ethers.utils.formatEther(snxPriceBn));
};
export default getSnxPrice;
