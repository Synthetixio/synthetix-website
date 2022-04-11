import { BigNumberish, ethers } from 'ethers';
import { CurrencyKey } from 'src/constants/currency';
import getSNXJS from 'src/lib/snxjs';

export type Rates = Record<CurrencyKey, number>;
export type Fees = Record<CurrencyKey, number>;

type CurrencyRate = BigNumberish;
type SynthRatesTuple = [string[], CurrencyRate[]];

const synthToAsset = (currencyKey: CurrencyKey) => currencyKey.replace(/^(i|s)/i, '');
const iStandardSynth = (currencyKey: CurrencyKey) => currencyKey.startsWith('s');

// Additional commonly used currencies to fetch, besides the one returned by the SynthUtil.synthsRates
const additionalCurrencies = ['SNX'].map(ethers.utils.formatBytes32String);

const getExchangeInfo = async (useOvm?: boolean) => {
	const snxjs = getSNXJS({ useOvm });
	const exchangeRates: Rates = {};
	const exchangeFees: Fees = {};
	const [synthsRates, ratesForCurrencies] = (await Promise.all([
		snxjs.contracts.SynthUtil.synthsRates(),
		snxjs.contracts.ExchangeRates.ratesForCurrencies(additionalCurrencies),
	])) as [SynthRatesTuple, CurrencyRate[]];
	const synths = [...synthsRates[0], ...additionalCurrencies] as string[];
	const rates = [...synthsRates[1], ...ratesForCurrencies] as CurrencyRate[];
	const fees = synths.map(async (currencyKeyBytes32: CurrencyKey) => {
		const currencyKey = ethers.utils.parseBytes32String(currencyKeyBytes32);
		const exchangeFee = await snxjs.contracts.SystemSettings.exchangeFeeRate(currencyKeyBytes32);
		const fees = Number(ethers.utils.formatEther(exchangeFee));
		return {
			currencyKey,
			fees,
		};
	});

	const feesResolved = await Promise.all(fees);

	feesResolved.forEach((e) => {
		exchangeFees[e.currencyKey] = e.fees;
	});

	synths.forEach((currencyKeyBytes32: CurrencyKey, idx: number) => {
		const currencyKey = ethers.utils.parseBytes32String(currencyKeyBytes32);
		// @ts-ignore
		const rate = Number(ethers.utils.formatEther(rates[idx]));

		exchangeRates[currencyKey] = rate;
		// only interested in the standard synths (sETH -> ETH, etc)
		if (iStandardSynth(currencyKey)) {
			exchangeRates[synthToAsset(currencyKey)] = rate;
		}
	});

	return { rates: exchangeRates, fees: exchangeFees };
};

const exchangeInfoQuery = async () => {
	const [infoL1, infoL2] = await Promise.all([getExchangeInfo(), getExchangeInfo(true)]);

	return { exchangeInfoL1: infoL1, exchangeInfoL2: infoL2 };
};

export default exchangeInfoQuery;
