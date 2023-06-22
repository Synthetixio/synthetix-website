import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { Spartan } from 'src/svg/Spartan';

export const Governance = () => {
	return (
		<Flex w="100%" mb="210px" position="relative">
			<Flex flexDirection="column" width="55%">
				<Text
					fontSize="16px"
					lineHeight="24px"
					fontFamily="heading"
					color="gray.500"
					mb="16px"
				>
					SYNTHETIX GOVERNANCE
				</Text>
				<Heading
					fontFamily="heading"
					fontWeight={700}
					fontSize="48px"
					lineHeight="57.6px"
					color="gray.50"
					mb="16px"
				>
					Protocol Governance
				</Heading>
				<Text
					fontSize="16px"
					fontFamily="heading"
					lineHeight="24px"
					color="gray.500"
					width="57%"
					mb="16px"
				>
					The Synthetix protocol is governed by a decentralized set of
					representative councils that are voted on by stakers. The protocol and
					ecosystem is more broadly maintained and improved by a combination of
					core contributors, ecosystem partners, and community members.
				</Text>
				<Box mt="16px">
					<Button px="16px" py="8px" width="fit-content">
						Learn More
					</Button>
					<Button
						ml="24px"
						bgGradient="none"
						color="white"
						bg="navy.900"
						border="1px"
						borderColor="gray.900"
						px="16px"
						py="8px"
						width="fit-content"
						_hover={{
							bg: 'navy.900',
							opacity: 0.8,
						}}
						_active={{
							bg: 'navy.900',
							opacity: 0.8,
						}}
					>
						Governance App
					</Button>
				</Box>
			</Flex>
			<Spartan position="absolute" right="-100" top="-100" />
		</Flex>
	);
};
