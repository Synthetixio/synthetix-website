import Head from 'next/head';
import styled from 'styled-components';
import SynthsInfo from 'src/sections/synths/SynthsInfo';
import { SectionTitle } from 'src/styles/common';
import { Layout } from 'src/components';
import media from 'styled-media-query';

const Synths = () => (
	<>
		<Head>
			<title>Synthetix - Synths</title>
		</Head>
		<StyledPageLayout>
			<SectionTitle>Synths</SectionTitle>
			<StyledPageCopy>
				Synths are derivative tokens providing exposure to a range of assets. They can be traded
				with infinite liqiduity and zero slippage by leveraging the Synthetix protocol’s unique
				pooled collateral model. Trades between Synths generate a small fee that is distributed to
				SNX collateral providers.
			</StyledPageCopy>
			<SynthsInfo />
		</StyledPageLayout>
	</>
);

const StyledPageCopy = styled.div`
	max-width: 560px;
	margin: 0;
	font-size: 14px;
	line-height: 20px;
	padding-bottom: 35px;
`;

const StyledPageLayout = styled(Layout)`
	background: linear-gradient(180deg, #08021e 0%, #120446 146.21%);
	.container {
		justify-content: initial;
		align-items: initial;
		max-width: 1200px;
		margin: 0 auto;
		padding: 125px 20px 0 20px;

		${media.lessThan('medium')`
			padding-top: 85px;
		`}
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
