import { Logo, Menu, Socials } from './';
import { Flex } from '@chakra-ui/react';

export default function Footer() {
	return (
		<Flex as="footer" w="100%" p="10" maxW="8xl" alignItems="center">
			<Logo small={true} mr="auto" />
			<Menu isHeader={false} />
			<Socials />
		</Flex>
	);
}
