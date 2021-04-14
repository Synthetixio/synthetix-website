import styled from 'styled-components';
import { useMemo, useState } from 'react';

import snxjs from 'src/lib/snxjs';

import useSynthetixTokenList from 'src/queries/tokenLists/useSynthetixTokenList';

import SynthCard from './SynthCard';
import media from 'styled-media-query';
import { theme } from 'src/styles/theme';
import { resetButtonCSS } from 'src/styles/common';

enum SynthCategory {
	ALL = 'all',
	CRYPTO = 'crypto',
	FOREX = 'forex',
	EQUITIES = 'equities',
	COMMODITY = 'commodity',
}

const SYNTH_CATEGORIES = Object.values(SynthCategory);

const SynthsInfo = () => {
	const [synthCategory, setSynthCategory] = useState<SynthCategory>(SynthCategory.ALL);
	const synthetixTokenListQuery = useSynthetixTokenList();
	const synthetixTokensMap = synthetixTokenListQuery.isSuccess
		? synthetixTokenListQuery.data.tokensMap ?? null
		: null;
	const synths = snxjs.synths;

	const filteredSynths = useMemo(
		() =>
			synthCategory !== SynthCategory.ALL
				? synths.filter((synth) => synth.category === synthCategory)
				: synths,
		[synths, synthCategory]
	);

	return (
		<>
			<Categories>
				{SYNTH_CATEGORIES.map((category) => {
					const active = synthCategory === category;

					return (
						<Button
							key={category}
							onClick={() => {
								setSynthCategory(active ? SynthCategory.ALL : category);
							}}
							{...{ active }}
						>
							{category}
						</Button>
					);
				})}
			</Categories>
			<Cards>
				{filteredSynths.map((synth) => {
					const currencyKey = synth.name;

					const tokenInfo = synthetixTokensMap != null ? synthetixTokensMap[currencyKey] : null;

					return <SynthCard key={currencyKey} {...{ synth, tokenInfo }} />;
				})}
			</Cards>
		</>
	);
};
const Cards = styled.div`
	padding-bottom: 120px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 35px;

	${media.lessThan('medium')`
		grid-template-columns: 1fr;
		justify-items: center;
	`}
`;

const Categories = styled.div`
	display: grid;
	margin-bottom: 40px;
	grid-auto-flow: column;
	justify-content: start;
	grid-gap: 50px;

	${media.lessThan('small')`
		grid-auto-flow: initial;
    	grid-template-columns: auto auto;
    	margin-bottom: 20px;
		grid-gap: initial;
		justify-content: initial;
		justify-items: start;
	`}
`;

const Button = styled.button<{ active: boolean }>`
	${resetButtonCSS};
	${theme.fonts.tab};

	${media.lessThan('medium')`
		font-size: 12px;
		line-height: 48px;
		margin-right: 18px;
	`}
`;

export default SynthsInfo;
