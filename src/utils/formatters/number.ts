import BigNumber from 'bignumber.js';

import { CurrencyKey } from 'src/constants/currency';
import {
	DEFAULT_CRYPTO_DECIMALS,
	DEFAULT_FIAT_DECIMALS,
	DEFAULT_NUMBER_DECIMALS,
	DEFAULT_TOKEN_DECIMALS,
} from 'src/constants/defaults';

BigNumber.config({ DECIMAL_PLACES: DEFAULT_TOKEN_DECIMALS });

export type NumericValue = BigNumber | string | number;

export type FormatNumberOptions = {
	minDecimals?: number;
	maxDecimals?: number;
	prefix?: string;
	suffix?: string;
};

export type FormatCurrencyOptions = {
	minDecimals?: number;
	maxDecimals?: number;
	sign?: string;
	currencyKey?: CurrencyKey;
};

export const getDecimalPlaces = (value: NumericValue) =>
	(value.toString().split('.')[1] || '').length;

export const toBigNumber = (value: NumericValue) => new BigNumber(value);

export const zeroBN = toBigNumber(0);

// TODO: implement max decimals
export const formatNumber = (value: NumericValue, options?: FormatNumberOptions) => {
	const prefix = options?.prefix;
	const suffix = options?.suffix;

	const formattedValue = [];
	if (prefix) {
		formattedValue.push(prefix);
	}

	formattedValue.push(toBigNumber(value).toFormat(options?.minDecimals ?? DEFAULT_NUMBER_DECIMALS));
	if (suffix) {
		formattedValue.push(` ${suffix}`);
	}

	return formattedValue.join('');
};

export const formatCryptoCurrency = (value: NumericValue, options?: FormatCurrencyOptions) =>
	formatNumber(value, {
		prefix: options?.sign,
		suffix: options?.currencyKey,
		minDecimals: options?.minDecimals ?? DEFAULT_CRYPTO_DECIMALS,
		maxDecimals: options?.maxDecimals,
	});

export const formatFiatCurrency = (value: NumericValue, options?: FormatCurrencyOptions) =>
	formatNumber(value, {
		prefix: options?.sign,
		suffix: options?.currencyKey,
		minDecimals: options?.minDecimals ?? DEFAULT_FIAT_DECIMALS,
		maxDecimals: options?.maxDecimals,
	});

export const formatPercent = (value: NumericValue, options?: { minDecimals: number }) => {
	const decimals = options?.minDecimals ?? 2;

	return `${toBigNumber(value).multipliedBy(100).toFixed(decimals)}%`;
};
