import Head from 'next/head';
import { PageLayout } from 'src/components';
import FuturesMain from 'src/sections/perps/main';
import USP from 'src/sections/perps/usp';
import { EmailSection } from 'src/sections/email/EmailSection';
import FrontEnds from 'src/sections/perps/frontends';
import { Divider } from '@chakra-ui/react';

export default function DecentralizedPerpetualFutures() {
	return (
		<>
			<Head>
				<title>Synthetix - Decentralized Perps</title>
			</Head>
			<PageLayout px={0} bg="#0e052d">
				<FuturesMain px={{ base: 10, sm: 10, md: 16, lg: 36 }} />
				<EmailSection
					innerProps={{
						justifyContent: 'space-between',
						px: { base: 10, sm: 10, md: 16, lg: 36 },
					}}
					minH={['220px', '220px', '180px', '158px']}
					byline="Get Updates on Perps Trading"
				/>
				<USP mt={20} px={{ base: 10, sm: 10, md: 16, lg: 36 }} />
				<FrontEnds px={{ base: 10, sm: 10, md: 16, lg: 36 }} mt={20} />
				<Divider
					color="transparent"
					height="1px"
					bgGradient="linear-gradient(0deg, rgba(14, 4, 53, 0.29), rgba(14, 4, 53, 0.29)), linear-gradient(88.63deg, #00D1FF -14.83%, #ED1EFF 108.22%);"
				/>
			</PageLayout>
		</>
	);
}
