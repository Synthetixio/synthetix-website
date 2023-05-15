import {
	Text,
	Flex,
	Grid,
	GridItem,
	Heading,
	Link,
	Box,
} from '@chakra-ui/react';

const USPS = [
	{
		label: 'Deep Liquidity & Low Fees',
		description:
			'All supported markets benefit from deep liquidity and low fees, thanks to the use of fully decentralized off-chain oracles and Synthetix liquidity.',
	},
	{
		label: 'Wide Variety of Assets',
		description:
			'Synthetix Perps supports a wide array of synthetic assets, which is determined and updated by the decentralized governance process.',
	},
	{
		label: 'Revenue Share',
		description:
			'Integrators receive a share of the fees they process, based on a volume and paid in $SNX: 10% of first $1m in fees, 7.5% for $1M - $5M, and 5% for >$5M. Protocols have discretion to use these rewards as they see fit.',
	},
	{
		label: 'Easy to Integrate',
		description: [
			'Visit ',
			<Link
				href="https://docs.synthetix.io/synthetix-protocol/welcome-to-synthetix"
				color="cyan.500"
				key="link-component"
			>
				docs.synthetix.io
			</Link>,
			' for integration guides and code samples on how to integrate Synthetix Perps.',
		],
	},
	{
		label: 'Capital Efficient',
		description:
			'The protocol supports leverage up to 25x on supported markets, making Synthetix Perps highly capital-efficient.',
	},
	{
		label: 'Supported Launch',
		description:
			'There is a thriving ecosystem of integrators and related Synthetix protocols, to provide feedback, early testing and support.',
	},
];

export default function USP() {
	return (
		<Flex
			flexDirection="column"
			h="100%"
			bg="navy.900"
			my={{ base: '62px', md: '100px' }}
		>
			<Heading
				fontSize={{ base: '36px', md: '48px' }}
				lineHeight={{ base: '43px' }}
				textAlign="start"
				mb="16px"
			>
				Protocol Features
			</Heading>
			<Grid
				templateColumns={{
					base: 'repeat(1, 1fr)',
					md: 'repeat(2, 1fr)',
					lg: 'repeat(3, 1fr)',
				}}
			>
				{USPS.map(({ label, description }) => (
					<GridItem
						key={label}
						mx={{ base: '8px', xl: '12px' }}
						my={{ base: '8px', md: '12px' }}
						p={{ base: '16px', md: '24px' }}
					>
						<Flex flexDir="column">
							<Text
								fontWeight="700"
								fontSize={{ base: 'lg' }}
								lineHeight={{ base: '28px' }}
								mb={{ base: '24px' }}
							>
								{label}
							</Text>
							<Box display="inline">
								{Array.isArray(description) ? (
									description.map(d => {
										if (typeof d === 'string') {
											return (
												<Text
													key={d.toString()}
													color="gray.500"
													display="inline"
													fontSize={{ base: 'md', lg: 'sm' }}
													lineHeight={{ base: '24px' }}
												>
													{d}
												</Text>
											);
										} else return d;
									})
								) : (
									<Text color="gray.500">{description}</Text>
								)}
							</Box>
						</Flex>
					</GridItem>
				))}
			</Grid>
		</Flex>
	);
}
