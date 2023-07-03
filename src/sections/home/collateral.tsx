import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { GradientText } from 'src/components';
import { links } from 'src/utils/constants';

export const Collateral = () => {
	return (
		<Flex
			w="100%"
			justifyContent={{ base: 'flex-start', lg: 'flex-end' }}
			my={{ base: '64px', lg: '100px' }}
			position="relative"
		>
			<Flex
				flexDirection="column"
				width={{ base: '100%', lg: '800px' }}
				zIndex={1}
			>
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
					fontSize={{ base: '36px', lg: '48px' }}
					fontFamily="heading"
					lineHeight="120%"
					color="white"
					fontWeight={700}
					mb="24px"
					as="div"
					width={{ base: '100%' }}
				>
					<GradientText>Staking Collateral</GradientText> with Synthetix{' '}
					<GradientText>helps support deep liquidity</GradientText>, low
					slippage, and highly competitive trading fees for our derivatives
					markets.{' '}
					<Text display={{ base: 'unset', lg: 'none' }}>
						Stakers get <GradientText>rewarded</GradientText> for helping to
						support a more robust ecosystem.
					</Text>
					<Box display={{ base: 'none', lg: 'unset' }}>
						<Text mt="40px">
							Stakers get <GradientText>rewarded</GradientText> for helping to
							support a more robust ecosystem.
						</Text>
					</Box>
				</Text>
				<Link
					href={links.stakingV2}
					target="_blank"
					bgGradient="linear(to-r, #34EDB3, cyan.500)"
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
