import Head from 'next/head';
import { PageLayout } from 'src/components';
import GovernanceMain from 'src/sections/governance/main';
import { Line } from 'src/styles/common';

export default function Governance() {
	return (
		<>
			<Head>
				<title>Synthetix - Governance</title>
			</Head>
			<PageLayout>
				<GovernanceMain />
				<Line showOnMobile />
			</PageLayout>
		</>
	);
}
