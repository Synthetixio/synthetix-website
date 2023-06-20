import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

export const Volume = () => {
	return (
		<Box width="100%" position="relative" minHeight="550px" mt={6}>
			<Box zIndex={1} position="relative">
				<Flex flexDirection="column" width="100%">
					<Flex flexDirection="column">
						<Text
							fontSize="24px"
							lineHeight="32px"
							color="white"
							fontFamily="heading"
							mb="16px"
							fontWeight={400}
						>
							Trading Volume
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
							fontSize="24px"
							lineHeight="32px"
							color="white"
							fontFamily="heading"
							mb="16px"
							fontWeight={400}
						>
							Total Value Locked
						</Text>
						<Heading
							fontFamily="heading"
							fontWeight={700}
							lineHeight="100px"
							fontSize="100px"
							color="gray.50"
						>
							24
						</Heading>
					</Flex>
				</Flex>
				<Button
					padding="16px 8px 16px 8px"
					mt="34px"
					variant="link"
					color="cyan.500"
				>
					See All Stats
				</Button>
			</Box>
		</Box>
	);
};
