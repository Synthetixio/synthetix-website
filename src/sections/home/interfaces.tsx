import {
	Flex,
	Text,
	Box,
	Tag,
	TagLabel,
	LinkBox,
	LinkOverlay,
} from '@chakra-ui/react';
import { Logo } from 'src/components';
import { ArrowDiagonal } from 'src/svg';
import { links } from 'src/utils/constants';

export const Interfaces = () => {
	return (
		<Box>
			<Text
				fontFamily="heading"
				fontSize="16px"
				color="gray.500"
				lineHeight="28px"
				mb="16px"
			>
				STAKING INTERFACES
			</Text>
			<Flex
				flexDirection={{ base: 'column', md: 'row' }}
				justifyContent="space-between"
			>
				<Flex
					flexDirection="column"
					bg="navy.700"
					p="24px"
					width={{
						base: '100%',
						md: 'calc(50% - 12px)',
					}}
					borderRadius="5px"
					border="1px"
					borderColor="gray.900"
					mb={{ base: '16px', md: '0px' }}
				>
					<Logo small />
					<Text my="16px" fontFamily="heading" textStyle="heading-xl">
						Staking Interface V2
					</Text>
					<Text
						fontFamily="heading"
						fontSize="16px"
						lineHeight="24px"
						color="gray.500"
					>
						Stake your collateral via the Synthetix staking dapp to provide
						liquidity to the Synthetix ecosystem. Earn weekly inflation
						incentives and fees generated from your liquidity.
					</Text>
					<LinkBox mt="16px">
						<Flex
							alignItems="center"
							p="10px 16px"
							bg="transparent"
							border="1px"
							borderColor="cyan.500"
							borderRadius="4px"
							width="fit-content"
						>
							<LinkOverlay href={links.stakingV2} target="_blank">
								<Text
									fontSize="14px"
									fontFamily="heading"
									fontWeight={700}
									lineHeight="20px"
									color="cyan.500"
								>
									Stake SNX
								</Text>
							</LinkOverlay>
							<ArrowDiagonal ml={2} />
						</Flex>
					</LinkBox>
				</Flex>
				<Flex
					flexDirection="column"
					bg="navy.700"
					p="24px"
					width={{
						base: '100%',
						md: 'calc(50% - 12px)',
					}}
					borderRadius="5px"
					border="1px"
					borderColor="gray.900"
				>
					<Flex width="100%" justifyContent="space-between">
						<Logo small />
					</Flex>
					<Text
						my="16px"
						color="gray.50"
						fontFamily="heading"
						textStyle="heading-xl"
					>
						Liquidity Interface for V3
					</Text>
					<Text
						fontFamily="heading"
						fontSize="16px"
						lineHeight="24px"
						color="gray.500"
					>
						V3 staking is now live. Provide liquidity directly to the V3 system
						with greater flexibility over which pools and markets you have
						exposure to.
					</Text>
					<LinkBox mt="16px">
						<Flex
							alignItems="center"
							p="10px 16px"
							bg="transparent"
							border="1px"
							borderColor="cyan.500"
							borderRadius="4px"
							width="fit-content"
						>
							<LinkOverlay href={links.liquidityApp} target="_blank">
								<Text
									fontSize="14px"
									fontFamily="heading"
									fontWeight={700}
									lineHeight="20px"
									color="cyan.500"
								>
									Deposit Liquidity
								</Text>
							</LinkOverlay>
							<ArrowDiagonal ml={2} />
						</Flex>
					</LinkBox>
				</Flex>
			</Flex>
		</Box>
	);
};
