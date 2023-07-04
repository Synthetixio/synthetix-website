import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { GradientText } from 'src/components';

export const Perps = () => {
	let onClick = () => {};

	if (typeof window !== 'undefined') {
		onClick = () => {
			const ecosystem = document.getElementById('ecosystem');
			if (ecosystem) {
				ecosystem.scrollIntoView({ behavior: 'smooth' });
			}
		};
	}

	return (
		<Flex w="100%" my={{ base: '60px', lg: '100px' }} position="relative">
			<Flex flexDirection="column" width="800px" zIndex="1">
				<Text
					fontSize="16px"
					lineHeight="24px"
					fontFamily="heading"
					color="gray.500"
					mb="16px"
				>
					SYNTHETIX PERPS
				</Text>
				<Text
					fontFamily="heading"
					color="white"
					mb="24px"
					as="div"
					textStyle="heading-2xl"
				>
					Synthetix <GradientText>perpetual futures</GradientText> are a set of
					composable and decentralized smart contracts{' '}
					<GradientText>powering an ecosystem</GradientText> of derivatives
					projects
				</Text>
				<Button
					p="10px 16px"
					borderRadius="base"
					onClick={onClick}
					width="fit-content"
					size={{ base: 'lg', md: 'md' }}
				>
					Explore all Integrators
				</Button>
			</Flex>
			<Box
				position="absolute"
				bgGradient="linear-gradient(44deg, #EE2EFF 0%, #5744EA 100%)"
				width="584px"
				height="536px"
				zIndex={0}
				borderRadius="100%"
				filter="blur(250px)"
				right="0"
			/>
		</Flex>
	);
};
