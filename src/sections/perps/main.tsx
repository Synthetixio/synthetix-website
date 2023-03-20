import { Text, Flex, Box, Link, FlexProps, Image } from '@chakra-ui/react';

export default function FuturesMain({ ...props }: FlexProps) {
	return (
		<Flex
			borderTop="1px solid #FFFFFF10"
			flexDirection="row"
			justifyContent="space-between"
			alignItems="center"
			minHeight={{ base: '450px', md: '630px' }}
			width="100%"
			position="relative"
			{...props}
		>
			<Box minW="40%" mb={10} zIndex={1}>
				<Text
					as="h1"
					fontFamily="GT America"
					fontSize={{ base: '26px', sm: '36px' }}
					lineHeight={{ base: '38px' }}
					fontStyle="normal"
					textTransform="uppercase"
					fontWeight={900}
					sx={{ fontStretch: 'expanded' }}
				>
					Decentralized <br />
					Perpetual <br />
					Futures
				</Text>
				<Text
					fontFamily="heading"
					fontSize="sm"
					mt={4}
					lineHeight="5"
					fontWeight="400"
					opacity={0.7}
					maxW="450px"
				>
					Many platforms already leverage the deep liquidity and composability
					of Synthetix to deliver better trades with lower slippage, hedging,
					and other unique use cases.&nbsp;
					<Text fontWeight="700" as="span">
						Synthetix perpetual futures are available to trade through various
						decentralized exchanges.
					</Text>
				</Text>
				<Flex mt={8}>
					<Link
						href="https://kwenta.eth.limo"
						borderRadius="4px"
						bg="cyan.500"
						boxShadow="0px 0px 10px rgba(0, 209, 255, 0.9)"
						py={4}
						width="147px"
						color="black"
						textTransform="uppercase"
						fontFamily="GT America"
						fontWeight="700"
						fontSize="14px"
						lineHeight="24px"
						textAlign="center"
						mr={8}
						target="_blank"
						_hover={{ textDecoration: 'none', bg: 'cyan.300' }}
					>
						Start Trading
					</Link>
					<Link
						href="https://discord.com/invite/AEdUHzt"
						borderRadius="4px"
						bg="cyan.500"
						boxShadow="0px 0px 10px rgba(0, 209, 255, 0.9)"
						width="147px"
						py={4}
						color="black"
						textTransform="uppercase"
						fontFamily="GT America"
						fontWeight="700"
						fontSize="14px"
						lineHeight="24px"
						textAlign="center"
						_hover={{ textDecoration: 'none', bg: 'cyan.300' }}
						target="_blank"
					>
						Discord
					</Link>
				</Flex>
			</Box>
			<Box
				width="55%"
				position="absolute"
				top="20"
				right="-20"
				display={{ base: 'none', md: 'block' }}
			>
				<Box
					position="absolute"
					zIndex={0}
					bottom="0"
					height="40%"
					width="100%"
					bgGradient="linear(to-b, rgba(11,11,34,0), rgba(14,5,45,1))"
				/>
				<Image src="/perps/perps.png" />
			</Box>
		</Flex>
	);
}
