import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { InterestedLooper } from 'src/svg/InterestedLooper';
import { StakingLooper } from 'src/svg/StakingLooper';

export const Staking = () => {
	return (
		<Flex my="200px" w="100%">
			<Flex
				bg="#0E052F"
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
					<Heading textStyle="heading-4xl" mb="16px">
						Synthetix Staking Guide
					</Heading>
					<Text
						fontFamily="heading"
						fontSize="12px"
						lineHeight="16px"
						color="gray.500"
						mb="24px"
					>
						Learn more about the mechanics of staking with Synthetix. Staked
						collateral underwrites the liquidity of the protocol and powers our
						ecosystem. Stakers are rewarded for provisioning this liquidity.
					</Text>
					<Button p="10px" width="fit-content">
						Get Started
					</Button>
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
