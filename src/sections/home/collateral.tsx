import { Box, Button, Flex, Link, Text } from '@chakra-ui/react';
import { GradientText } from 'src/components';
import { links } from 'src/utils/constants';

export const Collateral = () => {
	return (
		<Flex
			w="100%"
			justifyContent={{ base: 'flex-start', xl: 'flex-end' }}
			my={{ base: '60px', md: '100px' }}
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
					fontFamily="heading"
					color="white"
					mb="24px"
					as="div"
					textStyle="heading-2xl"
					width={{ base: '100%' }}
				>
					<GradientText>Depositing Collateral</GradientText> with Synthetix{' '}
					<GradientText>supports deep liquidity</GradientText>, low
					slippage, and highly competitive trading fees for our derivatives
					markets.{' '}
					<Box>
						<Text mt="40px" as="div">
							Depositors earn <GradientText>rewarded</GradientText> fees and incentives.
						</Text>
					</Box>
				</Text>
				<Link href={links.stakingV2} target="_blank">
					<Button
						w="fit-content"
						borderRadius="4px"
						fontWeight={700}
						fontSize="14px"
						padding="10px 16px"
						size={{ base: 'lg', md: 'md' }}
					>
						Start Staking
					</Button>
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
