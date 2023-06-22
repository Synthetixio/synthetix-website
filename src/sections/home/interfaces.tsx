import { Button, Flex, Text, Box, Tag, TagLabel } from '@chakra-ui/react';
import { Logo } from 'src/components';
import { ArrowDiagonal } from 'src/svg';

export const Interfaces = () => {
	return (
		<Box>
			<Text
				fontFamily="heading"
				fontSize="48px"
				color="gray.50"
				lineHeight="57.6px"
				mb="24px"
				fontWeight={700}
			>
				Staking Interfaces
			</Text>
			<Flex justifyContent="space-between">
				<Flex
					flexDirection="column"
					bg="#0E052F"
					p="24px"
					width="49.5%"
					borderRadius="5px"
					border="1px"
					borderColor="gray.900"
				>
					<Logo small />
					<Text
						my="16px"
						color="gray.50"
						fontWeight={700}
						fontSize="18px"
						lineHeight="28px"
						fontFamily="heading"
					>
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
					<Button
						mt="16px"
						width="fit-content"
						variant="outline"
						rightIcon={<ArrowDiagonal />}
					>
						Stake on V2
					</Button>
				</Flex>
				<Flex
					flexDirection="column"
					bg="#0E052F"
					p="24px"
					width="49.5%"
					borderRadius="5px"
					border="1px"
					borderColor="gray.900"
				>
					<Flex width="100%" justifyContent="space-between">
						<Logo small />
						<Tag bgColor="whiteAlpha.500">
							<TagLabel
								color="white"
								fontSize="12px"
								lineHeight="16px"
								fontWeight={500}
								fontFamily="heading"
							>
								COMING SOON
							</TagLabel>
						</Tag>
					</Flex>
					<Text
						my="16px"
						color="gray.50"
						fontWeight={700}
						fontSize="18px"
						lineHeight="28px"
						fontFamily="heading"
					>
						Staking Interface V3 (experimental)
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
				</Flex>
			</Flex>
		</Box>
	);
};
