import {
	Text,
	Flex,
	FlexProps,
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
		label: 'Revenue Share',
		description:
			'Integrators receive a share of the fees they process, based on a volume and paid in $SNX: 10% of first $1m in fees, 7.5% for $1M - $5M, and 5% for >$5M. Protocols have discretion to use these rewards as they see fit.',
	},
	{
		label: 'Capital Efficient',
		description:
			'The protocol supports leverage up to 25x on supported markets, making Synthetix Perps highly capital-efficient.',
	},
	{
		label: 'Wide Variety of Assets',
		description:
			'Synthetix Perps supports a wide array of synthetic assets, which is determined and updated by the decentralized governance process.',
	},
	{
		label: 'Easy to Integrate',
		description: [
			'Visit ',
			<Link
				href="https://docs.synthetix.io/synthetix-protocol/welcome-to-synthetix"
				color="cyan.500"
			>
				docs.synthetix.io
			</Link>,
			' for integration guides and code samples on how to integrate Synthetix Perps.',
		],
	},
	{
		label: 'Supported Launch',
		description:
			'There is a thriving ecosystem of integrators and related Synthetix protocols, to provide feedback, early testing and support.',
	},
];

export default function USP({ ...props }: FlexProps) {
	return (
		<Flex
			flexDirection="column"
			{...props}
			bg="navy.900"
			p="24px"
			pt="48px"
			mb="64px"
		>
			<Heading size="4xl" textAlign="center" mb="16px">
				Protocol Features
			</Heading>
			<Text textAlign="center" color="gray.500" mb="24px">
				Synthetix Perps offers integrators deep liquidity, low fees and
				additional resources for building your own front end.
			</Text>
			<Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}>
				{USPS.map(({ label, description }) => (
					<GridItem
						key={label}
						h={{ base: '250px', sm: '200px', md: '180px', lg: '160px' }}
						p="24px"
					>
						<Flex flexDir="column">
							<Text fontWeight="700" fontSize="lg">
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
