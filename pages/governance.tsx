import Head from 'next/head';
import { PageLayout } from 'src/components';
import GovernanceCallout from 'src/sections/governance/callout';
import GovernanceHeader from 'src/sections/governance/header';

export default function Governance() {
	return (
		<>
			<Head>
				<title>Synthetix - Governance</title>
			</Head>
			<PageLayout>
				<GovernanceHeader />
				<GovernanceCallout />
			</PageLayout>
		</>
	);
}
