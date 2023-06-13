import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { VectorLine } from 'src/components';

const Volume = () => {
	return (
		<Box width="100%" position="relative" minHeight="400px" mt={6}>
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

			{/* These boxes are being used for aesthetic purposes in the background */}

			{/* Vertical Lines */}
			<VectorLine top="33%" left="-17.5%" />
			<VectorLine top="33%" left="-22.5%" />
			<VectorLine top="33%" left="-27.5%" />

			<VectorLine top="33%" left="27.5%" />

			<VectorLine top="33%" right="-12.5%" />
			<VectorLine top="33%" right="-17.5%" />
			<VectorLine top="33%" right="-22.5%" />
			<VectorLine top="33%" right="-27.5%" />

			{/* Horizontal Lines */}
			<VectorLine direction="horizontal" top="12%" left="0%" width="100%" />
			<VectorLine direction="horizontal" top="38%" left="0%" width="100%" />
		</Box>
	);
};

export default Volume;
