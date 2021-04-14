import { NetworkId } from '@synthetixio/contracts-interface';

// network defaults
export const DEFAULT_NETWORK_ID = NetworkId.Mainnet;

export const DEFAULT_GAS_BUFFER = 5000;
export const DEFAULT_GAS_LIMIT = 500000;

// ui defaults
export const DEFAULT_SEARCH_DEBOUNCE_MS = 300;
export const DEFAULT_REQUEST_REFRESH_INTERVAL = 30000; // 30s
export const DEFAULT_CRYPTO_DECIMALS = 4;
export const DEFAULT_FIAT_DECIMALS = 2;
export const DEFAULT_NUMBER_DECIMALS = 2;
export const DEFAULT_PERCENT_DECIMALS = 2;
export const DEFAULT_TOKEN_DECIMALS = 18;
// for DEX aggregators like 1inch
export const DEFAULT_SLIPPAGE = 1;
