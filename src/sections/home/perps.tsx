import { Button, Flex, Text } from '@chakra-ui/react';
import { GradientText } from 'src/components';

export const Perps = () => {
	const onClick = () => {
		const ecosystem = document.getElementById('ecosystem');
		if (ecosystem) {
			ecosystem.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<Flex w="100%" my="100px">
			<Flex flexDirection="column" width="55%">
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
					fontSize="48px"
					fontFamily="heading"
					lineHeight="120%"
					color="white"
					fontWeight={700}
					mb="24px"
				>
					Synthetix <GradientText>perpetual futures</GradientText> are a set of
					composable and decentralized smart contracts{' '}
					<GradientText>powering an ecosystem</GradientText> of derivatives
					projects
				</Text>
				<Button p="10px 16px" onClick={onClick} width="fit-content">
					Explore all Integrators
				</Button>
			</Flex>
		</Flex>
	);
};
