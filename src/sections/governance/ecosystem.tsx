import { Box, Button, Flex, Heading, Text, Grid } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { Vision } from 'src/sections/governance/vision';
import TrasuryIcon from 'src/svg/treasury.svg';
import AdvisoryIcon from 'src/svg/advisory.svg';
import StrategyIcon from 'src/svg/strategy.svg';
import OperationsIcon from 'src/svg/operations.svg';
import TechnicalIcon from 'src/svg/technical.svg';

function SeatCard({
	title,
	link,
	icon,
	description,
}: {
	title: string;
	link: string;
	icon: React.ReactNode;
	description: React.ReactNode;
}) {
	return (
		<Flex
			maxW={{ lg: '460px', xl: '604px', '2xl': '732px' }}
			flexDir="column"
			rounded="base"
			justify-content="space-between"
			boxShadow="dark-lg"
			bg="navy.700"
			border="1px solid"
			borderColor="gray.900"
			p={{ base: '6', lg: '12' }}
			my={{ base: 4, lg: 'unset' }}
			zIndex={1}
			// height={{ md: '400px', lg: '390px', xl: '400px' }}
			height="100%"
		>
			{icon}
			<Heading fontSize={{ base: '36px', md: '30' }} my={{ base: 4 }}>
				{title}
			</Heading>
			<Box>
				<Text display="inline" fontSize={{ base: '16px' }} color="gray.500">
					{description}
				</Text>
			</Box>
			<Link
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				style={{ marginTop: 'auto' }}
			>
				<Button
					variant="outline"
					colorScheme="gray"
					color="white"
					mt="24px"
					rightIcon={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
						>
							<g clipPath="url(#clip0_6845_45)">
								<path
									d="M11.6733 5.7487L5.98387 5.7487L5.98387 4.24892L14.2337 4.24892L14.2337 12.4987L12.7339 12.4987L12.7339 6.80936L5.29308 14.5607L4.23242 13.5L11.6733 5.7487Z"
									fill="white"
								/>
							</g>
							<defs>
								<clipPath id="clip0_6845_45">
									<rect width="18" height="18" fill="white" />
								</clipPath>
							</defs>
						</svg>
					}
				>
					View Seat
				</Button>
			</Link>
		</Flex>
	);
}

export default function GovernanceEcosystem() {
	return (
		<Flex
			flexDir="column"
			w="100%"
			py={{ base: '60px', lg: '100px' }}
			position="relative"
			alignItems="center"
		>
			<Box
				position="absolute"
				bgGradient="linear-gradient(44deg, #EE2EFF 0%, #5744EA 100%)"
				width="584px"
				height="536px"
				zIndex={0}
				borderRadius="100%"
				filter="blur(250px)"
				top="300px"
				left={{ base: '-200px', md: '-100px' }}
			/>
			<Text
				color="gray.500"
				fontSize={{ base: '16px' }}
				mb={{ base: 1 }}
				zIndex={10}
				w="100%"
			>
				GOVERNING STRUCTURE
			</Text>
			<Heading
				fontSize={{ base: '36px', md: '48px' }}
				lineHeight={{ base: '120%' }}
				mb={{ base: 1 }}
				zIndex={10}
				w="100%"
			>
				Spartan Council
			</Heading>
			<Text
				w="100%"
				color="gray.500"
				fontSize={{ base: '14px', lg: '16px' }}
				mb={{ base: 4, lg: 6 }}
				zIndex={10}
			>
				A consolidated council of 7 delegates, each with equal voting power,
				replacing the previous multi-council structure for more effective
				decision-making
			</Text>
			<Grid
				templateColumns={{
					base: 'repeat(1, 1fr)',
					lg: 'repeat(2, 1fr)',
				}}
				gap={{ base: '4', lg: '6' }}
				alignItems="start"
				justifyContent="center"
				w="100%"
				mb={{ base: 4, md: 4, lg: 6 }}
			>
				<SeatCard
					icon={
						<>
							<Image alt="Treasury Seat" {...TrasuryIcon} />
						</>
					}
					title="1 Treasury Seat"
					link="https://governance.synthetix.io/#/councils/treasury"
					description={
						<>
							Manages protocol-owned assets and oversees financial stability,
							serving as a required signer for all Treasury-related proposals
							and transactions
						</>
					}
				/>

				<SeatCard
					icon={
						<Flex>
							<Image alt="Advisory Seat" {...AdvisoryIcon} />
							<Image alt="Advisory Seat" {...AdvisoryIcon} />
							<Image alt="Advisory Seat" {...AdvisoryIcon} />
						</Flex>
					}
					title="3 Advisory Seats"
					link="https://governance.synthetix.io/#/councils/advisory"
					description={
						<>
							Provides expert guidance and diverse perspectives to the council,
							offering insights on various aspects of the protocol&squot;s
							governance, development, and ecosystem growth.
						</>
					}
				/>
			</Grid>

			<Grid
				templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
				gap={{ base: 4, md: 4, lg: 6 }}
				alignItems="start"
				justifyContent="center"
				w="100%"
				mb={{ base: 4, md: 4, lg: 2 }}
			>
				<SeatCard
					icon={
						<>
							<Image alt="Strategy Seat" {...StrategyIcon} />{' '}
						</>
					}
					title="1 Strategy Seat"
					link="https://governance.synthetix.io/#/councils/strategy"
					description={
						<>
							Leads the strategic direction of Synthetix, focusing on long-term
							vision and high-level decision-making to ensure the
							protocol&squot;s growth and relevance in the DeFi ecosystem.
						</>
					}
				/>
				<SeatCard
					icon={
						<>
							<Image alt="Technical Seat" {...TechnicalIcon} />{' '}
						</>
					}
					title="1 Technical Seat"
					link="https://governance.synthetix.io/#/councils/strategy"
					description={
						<>
							Oversees the technical aspects of Synthetix, guiding protocol
							development, evaluating technical proposals, and ensuring the
							robustness and security of the system.
						</>
					}
				/>

				<SeatCard
					icon={
						<>
							<Image alt="Operations Seat" {...OperationsIcon} />{' '}
						</>
					}
					title="1 Operations Seat"
					link="https://governance.synthetix.io/#/councils/strategy"
					description={
						<>
							Manages day-to-day operations of Synthetix, coordinating between
							different teams and ensuring efficient execution of approved
							initiatives and developments.
						</>
					}
				/>
			</Grid>
			<Vision />
		</Flex>
	);
}
