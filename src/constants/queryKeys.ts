import { CurrencyKey } from './currency';

export const QUERY_KEYS = {
	Rates: {
		ExchangeRates: ['rates', 'exchangeRates'],
	},
	Fees: {
		ExchangeFees: ['fees', 'exchangeFees'],
	},
	Synths: {
		FrozenSynths: ['synths', 'frozenSynths'],
		Suspension: (currencyKey: CurrencyKey) => ['synths', 'suspension', currencyKey],
	},
	TokenLists: {
		Synthetix: ['tokenLists', 'synthetix'],
	},
};

export default QUERY_KEYS;
