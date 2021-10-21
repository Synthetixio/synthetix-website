import { CurrencyKey } from 'src/constants/currency';

export const synthToAsset = (currencyKey: CurrencyKey) => currencyKey.replace(/^(i|s)/i, '');
export const iStandardSynth = (currencyKey: CurrencyKey) => currencyKey.startsWith('s');
