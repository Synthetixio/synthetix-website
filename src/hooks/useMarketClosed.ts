import { CurrencyKey } from 'src/constants/currency';
import useSynthSuspensionQuery, {
	SynthSuspensionReason,
} from 'src/queries/synths/useSynthSuspensionQuery';

export type MarketClosureReason = 'frozen' | SynthSuspensionReason;
export type MarketClosure = ReturnType<typeof useMarketClosed>;

const useMarketClosed = async (currencyKey: CurrencyKey, useOvm?: boolean) => {
	const currencySuspendedQuery = await useSynthSuspensionQuery(currencyKey, useOvm);

	const isCurrencySuspended = currencySuspendedQuery ? currencySuspendedQuery.isSuspended : false;

	return {
		isMarketClosed: isCurrencySuspended,
		isCurrencySuspended,
		marketClosureReason: currencySuspendedQuery.reason as MarketClosureReason,
	};
};

export default useMarketClosed;
