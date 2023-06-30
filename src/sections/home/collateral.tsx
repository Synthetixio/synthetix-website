import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { GradientText } from 'src/components';
import { links } from 'src/utils/constants';

export const Collateral = () => {
	return (
		<Flex w="100%" justifyContent="flex-end" my="100px" position="relative">
			<Flex flexDirection="column" width="55%" zIndex={1}>
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
					as="div"
				>
					<GradientText>Staking Collateral</GradientText> with Synthetix{' '}
					<GradientText>helps support deep liquidity</GradientText>, low
					slippage, and highly competitive trading fees for our derivatives
					markets.
					<Text mt="40px" as="div">
						Stakers get <GradientText>rewarded</GradientText> for helping to
						support a more robust ecosystem.
					</Text>
				</Text>
				<Link
					href={links.stakingV2}
					target="_blank"
					bgGradient="linear(to-r, #34EDB3, cyan.500)"
					mt="16px"
					gap="8px"
					p="10px 16px"
					borderRadius="4px"
					width="fit-content"
					color="black"
					fontWeight={700}
					_hover={{ textDecoration: 'none', opacity: 0.8 }}
				>
					Start Staking
				</Link>
			</Flex>
			<Box
				position="absolute"
				bgGradient="linear-gradient(44deg, #34EDB3 0%, #00D1FF 100%)"
				width="584px"
				height="536px"
				zIndex={0}
				borderRadius="100%"
				filter="blur(250px)"
				left="-300"
			/>
		</Flex>
	);
};
