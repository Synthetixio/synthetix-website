import Head from 'next/head';
import { PageLayout } from 'src/components';
import GovernanceAction from 'src/sections/governance/action';
import GovernanceCallout from 'src/sections/governance/callout';
import GovernanceEcosystem from 'src/sections/governance/ecosystem';
import GovernanceFeatures from 'src/sections/governance/features';
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
				<GovernanceEcosystem />
				<GovernanceFeatures />
				<GovernanceAction />
			</PageLayout>
		</>
	);
}
