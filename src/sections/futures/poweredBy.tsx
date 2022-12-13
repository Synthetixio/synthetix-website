import { Flex, Box, Text, Image, FlexProps } from '@chakra-ui/react';

export interface PoweredByProps extends FlexProps {
	openInterest: number;
	tradingVolume: number;
	trades: number;
}

export default function PoweredBy({
	openInterest,
	tradingVolume,
	trades,
	...props
}: PoweredByProps) {
	return (
		<Flex
			flexDirection="column"
			minHeight="260px"
			my={16}
			width="100%"
			{...props}
		>
			<Box>
				<Text
					fontFamily="GT America"
					fontWeight="700"
					fontSize="14px"
					lineHeight="20px"
					textTransform="uppercase"
				>
					Powered By
				</Text>
				<Image mt={2} src="logo.svg" />
			</Box>
			<Flex
				justifyContent="space-between"
				mt={8}
				flexDirection={{ base: 'column', md: 'row' }}
				alignItems="center"
			>
				<Flex
					w="348px"
					h="112px"
					borderWidth="1px"
					borderStyle="solid"
					borderColor="cyan.500"
					borderRadius="5px"
					boxShadow="0px 0px 14px #00D1FF"
					flexDirection="column"
					justifyContent="center"
					alignItems={{ base: 'center', md: 'flex-start' }}
					fontWeight="700"
					px={6}
					py={4}
					mr={{ base: 0, md: 4 }}
					mt={{ base: 4, md: 0 }}
				>
					<Text
						color="cyan.500"
						textTransform="uppercase"
						fontFamily="GT America"
						fontSize="14px"
					>
						Trades
					</Text>
					<Text
						color="cyan.500"
						fontFamily="GT America"
						fontSize="24px"
						lineHeight="48px"
						sx={{ fontStretch: 'expanded' }}
					>
						{trades}
					</Text>
					<Text color="white" fontFamily="GT America" fontSize="14px">
						LAST
						<Text as="span" ml={2}>
							24h
						</Text>
					</Text>
				</Flex>
				<Flex
					w="348px"
					h="112px"
					borderWidth="1px"
					borderStyle="solid"
					borderColor="pink.500"
					borderRadius="5px"
					boxShadow="0px 0px 14px #ED1EFF"
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					fontWeight="700"
					px={6}
					py={4}
					mx={{ base: 0, md: 4 }}
					mt={{ base: 4, md: 0 }}
				>
					<Text
						color="pink.500"
						textTransform="uppercase"
						fontFamily="GT America"
						fontSize="14px"
					>
						Trading Volume
					</Text>
					<Text
						color="pink.500"
						fontFamily="GT America"
						fontSize="24px"
						lineHeight="48px"
						sx={{ fontStretch: 'expanded' }}
					>
						${tradingVolume}
					</Text>
					<Text color="white" fontFamily="GT America" fontSize="14px">
						LAST
						<Text as="span" ml={2}>
							24h
						</Text>
					</Text>
				</Flex>
				<Flex
					w="348px"
					h="112px"
					borderWidth="1px"
					borderStyle="solid"
					borderColor="green.500"
					borderRadius="5px"
					boxShadow="0px 0px 14px #31D8A4"
					flexDirection="column"
					justifyContent="center"
					alignItems={{ base: 'center', md: 'flex-end' }}
					fontWeight="700"
					px={6}
					py={4}
					ml={{ base: 0, md: 4 }}
					mt={{ base: 4, md: 0 }}
				>
					<Text
						color="green.500"
						textTransform="uppercase"
						fontFamily="GT America"
						fontSize="14px"
					>
						Open Interest
					</Text>
					<Text
						color="green.500"
						fontFamily="GT America"
						fontSize="24px"
						lineHeight="48px"
						sx={{ fontStretch: 'expanded' }}
					>
						${openInterest}
					</Text>
					<Text color="white" fontFamily="GT America" fontSize="14px">
						LAST
						<Text as="span" ml={2}>
							24h
						</Text>
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
}
