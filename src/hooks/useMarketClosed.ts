import { CurrencyKey } from 'src/constants/currency';

import useFrozenSynthsQuery from 'src/queries/synths/useFrozenSynthsQuery';
import useSynthSuspensionQuery, {
	SynthSuspensionReason,
} from 'src/queries/synths/useSynthSuspensionQuery';

export type MarketClosureReason = 'frozen' | SynthSuspensionReason;
export type MarketClosure = ReturnType<typeof useMarketClosed>;

const useMarketClosed = (currencyKey: CurrencyKey) => {
	const frozenSynthsQuery = useFrozenSynthsQuery(
		'https://mainnet.infura.io/v3/9428ac75c6694bf69d325e35e89bd266'
	);
	const currencySuspendedQuery = useSynthSuspensionQuery(currencyKey);

	const isCurrencyFrozen =
		currencyKey != null && frozenSynthsQuery.isSuccess && frozenSynthsQuery.data
			? frozenSynthsQuery.data.has(currencyKey)
			: false;

	const isCurrencySuspended =
		currencySuspendedQuery.isSuccess && currencySuspendedQuery.data
			? currencySuspendedQuery.data.isSuspended
			: false;

	return {
		isMarketClosed: isCurrencyFrozen || isCurrencySuspended,
		isCurrencyFrozen,
		isCurrencySuspended,
		marketClosureReason: isCurrencyFrozen
			? 'frozen'
			: (currencySuspendedQuery.data?.reason as MarketClosureReason),
	};
};

export default useMarketClosed;
