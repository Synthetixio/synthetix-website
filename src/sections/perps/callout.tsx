import { Box, Flex, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

export default function Callout() {
	return (
		<Flex as="section" direction="column" w="100%" mb="68px" p={{ lg: '24px' }}>
			<Text mb="16px" color="gray.500" fontSize="sm" fontWeight="400">
				SYNTHETIX PERPS
			</Text>
			<Text fontWeight="700" fontSize="36px" lineHeight="40px" maxW="800px">
				Synthetix <GradientText>perpetual futures</GradientText> are a set of
				permissionless and decentralized smart contracts, offering{' '}
				<GradientText>deep liquidity and low trading fees</GradientText> on a
				range of synthetic assets. Third party integrators have decided to
				integrate with Synthetix.
			</Text>
		</Flex>
	);
}

const GradientText = ({ children }: { children: ReactNode }) => {
	return (
		<Box
			display="inline"
			bg="linear-gradient(73.6deg, #34EDB3 2.11%, #00D1FF 100%)"
			backgroundClip="text"
			text-fill-color="transparent"
		>
			{children}
		</Box>
	);
};
