import { Flex } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { Footer, Header } from '.';

export default function PageLayout({ children }: PropsWithChildren<{}>) {
	return (
		<Flex flexDirection="column" alignItems="center" as="main" bg="navy.900">
			<Header />
			{children}
			<Footer />
		</Flex>
	);
}
