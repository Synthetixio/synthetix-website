import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

export const Volume = () => {
	return (
		<Box width="100%" position="relative" my="100px">
			<Box zIndex={1} position="relative">
				<Flex flexDirection="column" width="100%">
					<Flex flexDirection="column">
						<Text
							fontSize="16px"
							lineHeight="24px"
							color="white"
							fontFamily="heading"
							mb="16px"
						>
							TRADING VOLUME
						</Text>
						<Heading
							fontFamily="heading"
							fontWeight={700}
							lineHeight="100px"
							fontSize="100px"
							color="gray.50"
						>
							3,586,302,420
						</Heading>
					</Flex>
					<Flex flexDirection="column" mt="45px">
						<Text
							fontSize="16px"
							lineHeight="24px"
							color="white"
							fontFamily="heading"
							mb="16px"
						>
							TOTAL VALUE LOCKED
						</Text>
						<Heading
							fontFamily="heading"
							fontWeight={700}
							lineHeight="100px"
							fontSize="100px"
							color="gray.50"
						>
							450,234,456
						</Heading>
					</Flex>
				</Flex>
				<Button
					gap="8px"
					bg="transparent"
					bgGradient="none"
					mt="34px"
					color="white"
					border="1px"
					borderColor="gray.900"
					_hover={{
						bg: 'gray.900',
					}}
					_active={{
						bg: 'gray.900',
					}}
				>
					See All Stats
				</Button>
			</Box>
		</Box>
	);
};
