import { Button, Flex, Link, Show, Text, Image } from '@chakra-ui/react';
import { StakingLooper } from 'src/svg/StakingLooper';
import { links } from 'src/utils/constants';

export const Docs = () => {
	return (
		<Flex
			w="100%"
			mt="16px"
			mb={{ base: '60px', lg: '100px' }}
			position="relative"
		>
			<Flex
				bg="navy.700"
				minHeight="300px"
				maxHeight={{ base: 'unset', lg: '328px' }}
				borderRadius="5px"
				border="1px"
				borderColor="gray.900"
				position="relative"
				pl={{ base: '0', lg: '48px' }}
				w="100%"
				justifyContent="flex-end"
				zIndex={1}
				flexDirection={{ base: 'column', lg: 'row' }}
			>
				<Show above="base" below="lg">
					<Flex maxWidth="100%" height="290px" position="relative" mb={4}>
						<Image
							src="/StakingLooper.png"
							alt="Staking Looper"
							maxHeight="100%"
							maxWidth="100%"
							position="absolute"
							left="0"
							top="0"
							bottom="0"
							right="0"
						/>
					</Flex>
				</Show>
				<Flex
					flexDirection="column"
					justifyContent="center"
					maxWidth="100%"
					ml={{ base: '0px', lg: '300px' }}
					px={{ base: '16px', sm: '24px', lg: '48px' }}
					pb={{ base: '16px', sm: '24px', lg: '48px' }}
					pt={{ base: '0px', lg: '48px' }}
				>
					<Text mb="16px" color="gray.50" textStyle="heading-lg">
						Learn more about Synthetix Governance
					</Text>
					<Text
						fontFamily="heading"
						fontSize="16px"
						lineHeight="24px"
						color="gray.500"
						mb="24px"
					>
						Explore Synthetix&apos;s governance system. Learn how decisions are
						made through our community-elected councils and proposals (SIPs and
						SCCPs) by visiting our documentation and joining the conversation on
						Discord.
					</Text>
					<Link href={links.governanceDocs} target="_blank">
						<Button
							w="fit-content"
							borderRadius="4px"
							fontWeight={700}
							fontSize="14px"
							padding="10px 16px"
							size={{ base: 'lg', md: 'md' }}
						>
							Governance Docs
						</Button>
					</Link>
				</Flex>
				<Show above="lg">
					<StakingLooper
						height="100%"
						position="absolute"
						left="0"
						top="0"
						bottom="0"
					/>
				</Show>
			</Flex>
		</Flex>
	);
};
