import { Flex } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { Footer, Header } from '.';

export default function PageLayout({ children }: PropsWithChildren<{}>) {
	return (
		<Flex direction="column" alignItems="center" bg="navy.900" px="2">
			<Header />
			{children}
			<Footer />
		</Flex>
	);
}
