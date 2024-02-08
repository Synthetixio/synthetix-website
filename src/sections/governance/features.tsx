import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const FEATURES = [
	{
		title: 'Voting Power',
		description:
			"By staking SNX tokens, users gain the authority to vote within the Synthetix protocol, directly influencing its future direction. This voting power is crucial in electing representative councils that align with their vision for Synthetix's evolution.",
	},
	{
		title: 'Nomination Process',
		description: [
			'The nomination is open to all; anyone interested can self-nominate for a position on one of the four councils. Candidates must use the',
			' governance app ',
			'during the specified election period, providing details about their qualifications and experience.',
		],
	},
	{
		title: 'Election Cycle',
		description:
			'Elections occur every epoch, a period spanning four months. During this phase, SNX stakers cast their votes, selecting the individuals they believe are best suited to guide each council.',
	},
	{
		title: 'Decision-Making on Proposals',
		description: [
			'Once elected, Spartan Councillors have the responsibility to deliberate on',
			' Synthetix Improvement Proposals ',
			'(SIPs) and',
			' Synthetix Configuration Change Proposals ',
			'(SCCPs). These decisions are made after considering presentations and feedback from the community, gathered through the',
			' Synthetix Discord',
			'.',
		],
	},
	{
		title: 'Initiatives by Non-Governing Bodies ',
		description:
			"Apart from the governing councils, non-governing DAOs like the Treasury Council, Ambassadors, and Grants Committee undertake various initiatives within each epoch. These initiatives include allocating new grants, fostering partnerships, and managing the treasury's assets.",
	},
	{
		title: 'Ongoing Cycle',
		description:
			'The Synthetix governance cycle is continuous, with each epoch marking the beginning of a new phase. This cycle includes the nomination of candidates, the electoral process, and the ongoing execution of roles, ensuring the constant evolution and management of the Synthetix Protocol.',
	},
];

export default function GovernanceFeatures() {
	return (
		<Flex
			position="relative"
			flexDir="column"
			my={{ base: 10 }}
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
				fontSize={{ base: '36px' }}
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
				gap={{ md: 4 }}
			>
				{FEATURES.map(feature => {
					return (
						<Box
							w={{ base: '100%', md: '360px' }}
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
		</Flex>
	);
}
