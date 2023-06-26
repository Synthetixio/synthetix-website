import { Flex, Link, Text } from '@chakra-ui/react';
import { StakingLooper } from 'src/svg/StakingLooper';
import { links } from 'src/utils/constants';

export const Staking = () => {
	return (
		<Flex w="100%" mt="24px" mb="100px">
			<Flex
				bg="navy.700"
				p="48px"
				borderRadius="5px"
				border="1px"
				borderColor="gray.900"
				maxHeight="288px"
				position="relative"
				w="100%"
				justifyContent="flex-end"
			>
				<Flex flexDirection="column" width="72%">
					<Text
						fontSize="36px"
						lineHeight="120%"
						fontWeight={700}
						mb="16px"
						color="gray.50"
					>
						Synthetix Staking Guide
					</Text>
					<Text
						fontFamily="heading"
						fontSize="16px"
						lineHeight="24px"
						color="gray.500"
						mb="24px"
					>
						Learn more about the mechanics of staking with Synthetix. Staked
						collateral underwrites the liquidity of the protocol and powers our
						ecosystem. Stakers are rewarded for provisioning this liquidity.
					</Text>
					<Link
						p="10px 16px"
						width="fit-content"
						color="black"
						fontFamily="heading"
						fontWeight={700}
						_hover={{ textDecoration: 'none' }}
						href={links.stakingGuide}
						target="_blank"
						bgGradient="linear(to-r, #34EDB3, cyan.500)"
						borderRadius="4px"
					>
						<Text>Get Started</Text>
					</Link>
				</Flex>
				<StakingLooper
					height="100%"
					position="absolute"
					left="0"
					top="0"
					bottom="0"
				/>
			</Flex>
		</Flex>
	);
};
