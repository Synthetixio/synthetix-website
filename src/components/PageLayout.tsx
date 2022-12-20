import { Flex, FlexProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { Footer, Header } from '.';

interface PageLayoutProps extends PropsWithChildren, FlexProps {}

export default function PageLayout({ children, ...props }: PageLayoutProps) {
	return (
		<Flex
			direction="column"
			alignItems="center"
			bg="navy.900"
			px="2"
			{...props}
		>
			<Header />
			{children}
			<Footer />
		</Flex>
	);
}
