import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export default function GovernanceEcosystem() {
	return (
		<Flex flexDir="column" w="100%" my={{ base: 10 }}>
			<Box
				position="absolute"
				top="0px"
				right="0px"
				bottom="0px"
				left="0px"
				bgGradient="radial-gradient(to-tr, pink.500, cyan.500)"
			></Box>
			<Text
				color="gray.500"
				fontSize={{ base: '16px' }}
				mb={{ base: 1 }}
				zIndex={10}
			>
				SYNTHETIX ECOSYSTEM
			</Text>
			<Heading
				fontSize={{ base: '48px' }}
				lineHeight={{ base: '120%' }}
				mb={{ base: 1 }}
				zIndex={10}
			>
				Governing Councils
			</Heading>
			<Text
				color="gray.500"
				fontSize={{ base: '14px' }}
				mb={{ base: 4 }}
				zIndex={10}
			>
				The Synthetix Protocol is governed by four councils, each responsible
				for a core aspect of a DAO.
			</Text>
		</Flex>
	);
}
