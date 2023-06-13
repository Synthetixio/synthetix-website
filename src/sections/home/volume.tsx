import { Box, Button, Divider, Flex, Heading, Text } from '@chakra-ui/react';

const Volume = () => {
	return (
		<Box width="100%" position="relative">
			<Flex justifyContent="space-between" width="100%">
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
				<Flex flexDirection="column">
					<Text
						fontSize="24px"
						lineHeight="32px"
						color="white"
						fontFamily="heading"
						mb="16px"
						fontWeight={400}
					>
						Markets
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
			<Button mt={8} variant="link" color="cyan.500">
				See All Stats
			</Button>

			{/* Dividers are being used for aesthetic purposes */}
			<Box
				position="absolute"
				top="20px"
				right="-10%"
				height="1px"
				width="500px"
				bg="gray.50"
				// opacity={0.1}
				sx={{
					transform: 'rotate(90deg)',
				}}
			/>
		</Box>
	);
};

export default Volume;
