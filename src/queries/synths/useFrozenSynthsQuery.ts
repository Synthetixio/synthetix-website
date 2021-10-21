import { UseQueryOptions, useQuery } from 'react-query';
import compact from 'lodash/compact';
import { ethers } from 'ethers';

import QUERY_KEYS from 'src/constants/queryKeys';
import { CurrencyKey } from 'src/constants/currency';

import getSNXJS from 'src/lib/snxjs';

export type FrozenSynths = Set<CurrencyKey>;

const useFrozenSynthsQuery = (options?: UseQueryOptions<FrozenSynths>) => {
	const snxjs = getSNXJS();
	return useQuery<FrozenSynths>(
		QUERY_KEYS.Synths.FrozenSynths,
		async () => {
			const frozenSynths = await snxjs.contracts.SynthUtil!.frozenSynths();

			return new Set<CurrencyKey>([
				...compact(frozenSynths.map(ethers.utils.parseBytes32String)),
			] as CurrencyKey[]);
		},
		options
	);
};

export default useFrozenSynthsQuery;
