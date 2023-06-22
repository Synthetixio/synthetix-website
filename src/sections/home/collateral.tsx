import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { GradientText } from 'src/components';

export const Collateral = () => {
	return (
		<Flex w="100%" justifyContent="flex-end" mb="210px">
			<Flex flexDirection="column" width="55%">
				<Text
					fontSize="16px"
					lineHeight="24px"
					fontFamily="heading"
					color="gray.500"
					mb="16px"
				>
					SYNTHETIX STAKING
				</Text>
				<Text
					fontSize="48px"
					fontFamily="heading"
					lineHeight="57.6px"
					color="white"
					fontWeight={700}
					mb="16px"
				>
					<GradientText>Staking Collateral</GradientText> with Synthetix{' '}
					<GradientText>helps support deep liquidity</GradientText>, low
					slippage, and highly competitive trading fees for our derivatives
					markets. Stakers get <GradientText>rewarded</GradientText> for helping
					to support a more robust ecosystem.
				</Text>
				<Button p="10px" width="fit-content">
					Start Staking
				</Button>
			</Flex>
		</Flex>
	);
};
