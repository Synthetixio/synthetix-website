import { useQuery, UseQueryOptions } from 'react-query';
import { BigNumberish, ethers } from 'ethers';

import QUERY_KEYS from 'src/constants/queryKeys';
import { CurrencyKey } from 'src/constants/currency';
import { iStandardSynth, synthToAsset } from 'src/utils/currencies';
import getSNXJS from 'src/lib/snxjs';

export type Rates = Record<CurrencyKey, number>;
export type Fees = Record<CurrencyKey, number>;

type CurrencyRate = BigNumberish;
type SynthRatesTuple = [string[], CurrencyRate[]];

// Additional commonly used currencies to fetch, besides the one returned by the SynthUtil.synthsRates
const additionalCurrencies = ['SNX'].map(ethers.utils.formatBytes32String);

const useExchangeInfoQuery = (options?: UseQueryOptions<{ rates: Rates; fees: Fees }>) => {
	const snxjs = getSNXJS();
	return useQuery<{ rates: Rates; fees: Fees }>(
		QUERY_KEYS.Rates.ExchangeRates,
		async () => {
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
				const exchangeFee = await snxjs.contracts.SystemSettings.exchangeFeeRate(
					currencyKeyBytes32
				);
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

			synths.forEach(async (currencyKeyBytes32: CurrencyKey, idx: number) => {
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
		},
		options
	);
};

export default useExchangeInfoQuery;
