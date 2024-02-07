import { Box, Flex, Heading } from '@chakra-ui/react';

export default function GovernanceFeatures() {
	return (
		<Flex position="relative" flexDir="column">
			<Box
				position="absolute"
				bgGradient="linear-gradient(44deg, #34EDB3 0%, #00D1FF 100%)"
				width="584px"
				height="536px"
				zIndex={0}
				borderRadius="100%"
				filter="blur(250px)"
				left="-300"
			/>
			<Heading
				fontSize={{ base: '36px' }}
				lineHeight={{ base: '120%' }}
				mb={{ base: 1 }}
				zIndex={10}
			>
				Protocol Features
			</Heading>
		</Flex>
	);
}
