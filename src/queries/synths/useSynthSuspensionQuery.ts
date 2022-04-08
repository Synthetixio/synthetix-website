import { NetworkIdByName } from '@synthetixio/contracts-interface';
import { ethers } from 'ethers';
import { CurrencyKey } from 'src/constants/currency';
import getSNXJS from 'src/lib/snxjs';

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

const useSynthSuspensionQuery = async (currencyKey: CurrencyKey) => {
	const snxjs = getSNXJS({ useOvm: false, networkId: NetworkIdByName.mainnet });

	const [isSuspended, reason] = (await snxjs.contracts.SystemStatus.synthExchangeSuspension(
		ethers.utils.formatBytes32String(currencyKey!)
	)) as [boolean, ethers.BigNumber];

	const reasonCode = Number(reason);
	return {
		isSuspended,
		reasonCode,
		reason: isSuspended ? getReasonFromCode(reasonCode) : null,
	};
};

export default useSynthSuspensionQuery;
