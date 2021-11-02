import Head from 'next/head';
import styled from 'styled-components';
import SynthsInfo from 'src/sections/synths/SynthsInfo';
import { Section, SectionTitle, Line } from 'src/styles/common';
import { PageLayout } from 'src/components';

const Synths = () => (
	<>
		<Head>
			<title>Synthetix - Synths</title>
		</Head>
		<StyledPageLayout>
			<Section>
				<SectionTitle>Synths</SectionTitle>
				<StyledPageCopy>
					Synths are derivative tokens providing exposure to a range of assets. They can be traded
					with infinite liquidity and zero slippage by leveraging the Synthetix protocol’s unique
					pooled collateral model. Trades between Synths generate a small fee that is distributed to
					SNX collateral providers.
				</StyledPageCopy>
				<SynthsInfo />
			</Section>
			<Line showOnMobile />
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

const StyledPageLayout = styled(PageLayout)`
	max-width: 1200px;
	background: linear-gradient(180deg, #08021e 0%, #120446 146.21%);
`;

export default Synths;
