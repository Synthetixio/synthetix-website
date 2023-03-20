import { Flex, Text, FlexProps, Box, Divider, Link } from '@chakra-ui/react';
import { Decentrex, Kwenta, LooperGroup, SuperSynthyIcon } from 'src/svg';
import { ImArrowUpRight2 } from 'react-icons/im';

const FrontEnds = ({ ...props }: FlexProps) => {
	return (
		<Flex
			flexDirection="column"
			alignItems="center"
			position="relative"
			height={{ base: 'fit-content', md: '610px' }}
			width="100%"
			{...props}
		>
			<Text
				as="h2"
				fontFamily="GT America"
				fontSize="32px"
				fontWeight="900"
				lineHeight="35px"
				textTransform="uppercase"
				sx={{ fontStretch: 'expanded' }}
				mb={4}
				textAlign="center"
				zIndex={1}
			>
				Frontend Operators
			</Text>
			<Text
				fontFamily="heading"
				fontSize="14px"
				opacity={0.7}
				lineHeight="22px"
				maxWidth="710px"
				textAlign="center"
				zIndex={1}
			>
				Synthetix powers a fully composable and permissionless perps contract
				that is integrated with several DEX front ends and other decentralized
				financial instruments. The following have been reviewed by the Synthetix
				community
			</Text>
			<LooperGroup position="absolute" top="-10" zIndex={0} />
			<Flex
				width="100%"
				justifyContent="center"
				alignItems={{ base: 'center', md: 'unset' }}
				zIndex={1}
				mt={16}
				flexDirection={{ base: 'column', md: 'row' }}
			>
				<Box
					bgGradient="linear(to-r, cyan.500, pink.500)"
					width={{ base: '100%', md: '467px' }}
					minHeight="207px"
					mx={4}
					p={8}
					borderRadius="5px"
					borderStyle="solid"
					position="relative"
					boxShadow="0px 0px 20px #00000040"
				>
					<Flex
						flexDirection="column"
						justifyContent="space-between"
						position="absolute"
						bg="navy.900"
						borderRadius="4px"
						top={1}
						bottom={1}
						left={1}
						right={1}
						p={4}
					>
						<Box height="40px" mb={1}>
							<Kwenta />
						</Box>
						<Divider color="whiteAlpha.200" />
						<Text fontSize="12px" lineHeight="18px" color="gray" mt={2}>
							Kwenta is a decentralized derivatives trading platform, live on
							Optimism, offering real-world and on-chain synthetic assets using
							the power of the Synthetix protocol. Trade any perps markets from
							a single cross-margin contract.
						</Text>
						<Link
							href="https://kwenta.eth.limo/"
							target="_blank"
							alignSelf="flex-end"
							display="flex"
							alignItems="center"
							px={3}
							py={2}
							borderRadius="5px"
							borderWidth="1px"
							borderStyle="solid"
							borderColor="cyan.500"
							width="fit-content"
							bg="navy.900"
							_hover={{ textDecoration: 'none', bg: '#00D1FF15' }}
							mt={2}
						>
							<Text color="cyan.500" mr={2} fontWeight="700">
								Trade on Kwenta
							</Text>
							<ImArrowUpRight2 color="#00D1FF" />
						</Link>
					</Flex>
				</Box>
				<Box
					bgGradient="linear(to-r, cyan.500, pink.500)"
					width={{ base: '100%', md: '467px' }}
					minHeight="220px"
					height="fit-content"
					p={8}
					mx={4}
					borderRadius="5px"
					borderStyle="solid"
					position="relative"
					boxShadow="0px 0px 20px #00000040"
					mt={{ base: 8, md: 0 }}
				>
					<Flex
						flexDirection="column"
						justifyContent="space-between"
						position="absolute"
						bg="navy.900"
						borderRadius="4px"
						top={1}
						bottom={1}
						left={1}
						right={1}
						p={4}
					>
						<Box height="40px" mb={1}>
							<Decentrex ml={-2} width="200px" />
						</Box>
						<Divider color="whiteAlpha.200" />
						<Text fontSize="12px" lineHeight="18px" color="gray" mt={2}>
							Decentrex is a decentralized perpetual futures exchange and
							leverage aggregator. On Decentrex, users have access to deep
							liquidity and lightning fast trades, thanks to the powerful
							infrastructure provided by Synthetix and Optimism.
						</Text>
						<Link
							href="https://decentrex.com/"
							target="_blank"
							alignSelf="flex-end"
							display="flex"
							alignItems="center"
							px={3}
							py={2}
							borderRadius="5px"
							borderWidth="1px"
							borderStyle="solid"
							borderColor="cyan.500"
							width="fit-content"
							bg="navy.900"
							_hover={{ textDecoration: 'none', bg: '#00D1FF15' }}
							mt={2}
						>
							<Text color="cyan.500" mr={2} fontWeight="700">
								Trade on Decentrex
							</Text>
							<ImArrowUpRight2 color="#00D1FF" />
						</Link>
					</Flex>
				</Box>
			</Flex>
			<Flex
				mt={8}
				zIndex={1}
				maxWidth="965px"
				width="100%"
				bgGradient="linear(to-tr, rgb(56,18,91), rgb(95,12,102))"
				px={6}
				py={4}
				borderRadius="10px"
				borderWidth="1px"
				borderColor="pink.500"
				borderStyle="solid"
				alignItems="center"
				justifyContent="space-between"
				flexDirection={{ base: 'column', md: 'row' }}
			>
				<SuperSynthyIcon />
				<Box px={2} width={{ base: '100%', md: '75%' }} mt={{ base: 4, md: 0 }}>
					<Text
						fontFamily="heading"
						fontWeight="700"
						fontSize="14px"
						lineHeight="21px"
					>
						Want to integrate Synthetix Perps with your Platform?
					</Text>
					<Text mt={1} color="gray" fontSize="12px" lineHeight="18px">
						Learn more about how to integrate Perps and other Synthetix markets
						in our developer documentation and reach out to the team at
						<Text as="span"> perps@snxdao.io</Text>
					</Text>
				</Box>
				<Link
					href="https://discord.com/invite/AEdUHzt" // TODO: Replace this with CMS link
					target="_blank"
					display="flex"
					alignItems="center"
					px={3}
					py={2}
					borderRadius="5px"
					borderWidth="1px"
					borderStyle="solid"
					borderColor="cyan.500"
					width="fit-content"
					fontWeight="700"
					height="fit-content"
					mt={{ base: 4, md: 0 }}
					_hover={{ textDecoration: 'none', bg: 'rgba(18,27,51,0.15)' }}
				>
					<Text color="cyan.500" mr={2}>
						Learn More
					</Text>
					<ImArrowUpRight2 color="#00D1FF" />
				</Link>
			</Flex>
		</Flex>
	);
};

export default FrontEnds;
