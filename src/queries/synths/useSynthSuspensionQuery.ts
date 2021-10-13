import { useQuery, UseQueryOptions } from 'react-query';
import { ethers } from 'ethers';

import QUERY_KEYS from 'src/constants/queryKeys';
import { CurrencyKey } from 'src/constants/currency';

import snxjs from 'src/lib/snxjs';
import getSNXJS from 'src/lib/snxjs';

/*
	Suspension Reasons:

	1: "System Upgrade"
	2: "Market Closure"
	3: "Circuit Breaker"
	55: "Circuit Breaker (Phase one)"
	65: "Decentralized Circuit Breaker (Phase two)"
	99999: "Emergency"
*/

export type SynthSuspensionReason =
	| 'system-upgrade'
	| 'market-closure'
	| 'circuit-breaker'
	| 'emergency';

const getReasonFromCode = (reasonCode: number): SynthSuspensionReason => {
	switch (reasonCode) {
		case 1:
			return 'system-upgrade';
		case 2:
			return 'market-closure';
		case 3:
		case 55:
		case 65:
			return 'circuit-breaker';
		case 99999:
			return 'emergency';
		default:
			return 'market-closure';
	}
};

export type SynthSuspended = {
	isSuspended: boolean;
	reasonCode: number;
	reason: SynthSuspensionReason | null;
};

const useSynthSuspensionQuery = (
	currencyKey: CurrencyKey,
	options?: UseQueryOptions<SynthSuspended>
) => {
	return useQuery<SynthSuspended>(
		QUERY_KEYS.Synths.Suspension(currencyKey),
		async () => {
			const [isSuspended, reason] = (await getSNXJS(
				'https://mainnet.infura.io/v3/9428ac75c6694bf69d325e35e89bd266'
			).contracts.SystemStatus.synthExchangeSuspension(
				ethers.utils.formatBytes32String(currencyKey!)
			)) as [boolean, ethers.BigNumber];

			const reasonCode = Number(reason);
			return {
				isSuspended,
				reasonCode,
				reason: isSuspended ? getReasonFromCode(reasonCode) : null,
			};
		},
		options
	);
};

export default useSynthSuspensionQuery;
