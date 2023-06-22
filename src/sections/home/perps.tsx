import { Button, Flex, Text } from '@chakra-ui/react';
import { GradientText } from 'src/components';

export const Perps = () => {
	return (
		<Flex w="100%" mb="210px">
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
					lineHeight="57.6px"
					color="white"
					fontWeight={700}
					mb="16px"
				>
					Synthetix <GradientText>perpetual futures</GradientText> are a set of
					composable and decentralized smart contracts{' '}
					<GradientText>powering an ecosystem</GradientText> of derivatives
					projects
				</Text>
				<Button p="10px" width="fit-content">
					Explore all Integrators
				</Button>
			</Flex>
		</Flex>
	);
};
