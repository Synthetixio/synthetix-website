import Head from 'next/head';
import styled from 'styled-components';

import SynthsInfo from 'src/sections/synths/SynthsInfo';

import { PageTitle, PageCopy, PageLayout } from 'src/styles/common';

const Synths = () => (
	<>
		<Head>
			<title>Synthetix - Synths</title>
		</Head>
		<StyledPageLayout>
			<PageTitle>Synths</PageTitle>
			<StyledPageCopy>
				Synths are derivative tokens providing exposure to a range of assets. They can be traded
				with infinite liquidity and zero slippage by leveraging the Synthetix protocol’s unique
				pooled collateral model. Trades between Synths generate a small fee that is distributed to
				SNX collateral providers.
			</StyledPageCopy>
			<SynthsInfo />
		</StyledPageLayout>
	</>
);

const StyledPageCopy = styled(PageCopy)`
	max-width: 560px;
`;

const StyledPageLayout = styled(PageLayout)`
	background: linear-gradient(180deg, #08021e 0%, #120446 146.21%);
	.container {
		min-height: 1500px;
	}
	.footer {
		&::before {
			content: '';
			background: linear-gradient(0deg, rgba(14, 4, 53, 0.29), rgba(14, 4, 53, 0.29)),
				linear-gradient(88.63deg, #00d1ff -14.83%, #ed1eff 108.22%);
			opacity: 0.5;
			height: 2px;
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
		}
	}
`;

export default Synths;
