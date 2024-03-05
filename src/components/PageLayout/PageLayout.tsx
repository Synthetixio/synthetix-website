import { Divider, Flex, FlexProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { Footer, Header } from '..';

interface PageLayoutProps extends PropsWithChildren, FlexProps {}

export function PageLayout({ children, ...props }: PageLayoutProps) {
	return (
		<Flex minW="100vw" bg="navy.900" justifyContent="center">
			<Flex
				direction="column"
				alignItems="center"
				w="100%"
				maxW={{
					base: '100vw',
					md: '48rem',
					lg: '62rem',
					xl: '80rem',
					'2xl': '96rem',
				}}
				px={{ base: '16px', lg: '24px' }}
				{...props}
			>
				<Header />
				{children}
				<Divider minW="100vw" borderColor="gray.900" />
				<Footer />
			</Flex>
		</Flex>
	);
}
