import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Docs } from 'src/sections/governance/docs';

const FEATURES = [
	{
		title: 'Council Composition',
		description:
			'7 seats: Strategy, Ops, Technical, Treasury, and 3 Advisory roles. Each seat carries equal voting weight of 1.00.',
	},
	{
		title: 'Decision Making',
		description: [
			'4/7 signatures required for approval of SIPs, SCCPs, STPs, and Treasury Transactions, ensuring thorough consideration of all proposals.',
		],
	},
	{
		title: 'Election Cycle',
		description:
			'6-month terms for elected seats, with elections held in October and April, balancing continuity with fresh perspectives.',
	},
];

export default function GovernanceFeatures() {
	return (
		<Flex
			position="relative"
			flexDir="column"
			py={{ base: '60px', lg: '100px' }}
			alignItems="center"
		>
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
			<Heading
				w="100%"
				fontSize={{ base: '36px', md: '48px' }}
				lineHeight={{ base: '120%' }}
				mb={{ base: 1 }}
				zIndex={10}
			>
				How does Governance work?
			</Heading>

			<Flex
				flexDir={{ base: 'column', md: 'row' }}
				mt={{ base: 10 }}
				zIndex={10}
				flexWrap={{ md: 'wrap' }}
				gap={{ md: 4, '2xl': 6 }}
			>
				{FEATURES.map(feature => {
					return (
						<Box
							w={{
								base: '100%',
								md: '360px',
								lg: '304px',
								xl: '400px',
								'2xl': '480px',
							}}
							key={feature.title}
							p={{ base: 4, md: 6 }}
						>
							<Heading
								fontSize={{ base: '18px' }}
								lineHeight={{ base: '28px' }}
								mt={{ base: 8 }}
								mb={{ base: 4 }}
							>
								{feature.title}
							</Heading>
							{Array.isArray(feature.description) ? (
								feature.description.map((d, index) => {
									if (index % 2 === 1)
										return (
											<Text
												fontSize={{ base: '16px' }}
												color="cyan.500"
												key={d.concat(index.toString())}
												display="inline"
											>
												{d}
											</Text>
										);
									return (
										<Text
											fontSize={{ base: '16px' }}
											color="gray.500"
											key={d.concat(index.toString())}
											display="inline"
										>
											{d}
										</Text>
									);
								})
							) : (
								<Text fontSize={{ base: '16px' }} color="gray.500">
									{feature.description}
								</Text>
							)}
						</Box>
					);
				})}
			</Flex>
			<Docs />
		</Flex>
	);
}
