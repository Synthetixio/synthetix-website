import { CurrencyKey } from 'src/constants/currency';
import useFrozenSynthsQuery from 'src/queries/synths/useFrozenSynthsQuery';
import useSynthSuspensionQuery, {
	SynthSuspensionReason,
} from 'src/queries/synths/useSynthSuspensionQuery';

export type MarketClosureReason = 'frozen' | SynthSuspensionReason;
export type MarketClosure = ReturnType<typeof useMarketClosed>;

const useMarketClosed = async (currencyKey: CurrencyKey) => {
	const frozenSynthsQuery = await useFrozenSynthsQuery();
	const currencySuspendedQuery = await useSynthSuspensionQuery(currencyKey);

	const isCurrencyFrozen = frozenSynthsQuery ? frozenSynthsQuery.has(currencyKey) : false;

	const isCurrencySuspended = currencySuspendedQuery ? currencySuspendedQuery.isSuspended : false;

	return {
		isMarketClosed: isCurrencyFrozen || isCurrencySuspended,
		isCurrencyFrozen,
		isCurrencySuspended,
		marketClosureReason: isCurrencyFrozen
			? 'frozen'
			: (currencySuspendedQuery.reason as MarketClosureReason),
	};
};

export default useMarketClosed;
