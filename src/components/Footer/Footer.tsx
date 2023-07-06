import { Fragment } from 'react';
import { Logo, Socials } from '../';
import { Box, Divider, Flex, Link, Show, Text } from '@chakra-ui/react';
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { EmailFooter } from 'src/sections/email/EmailFooter';

const footerMenu = [
	[
		{ title: 'Synthetix' },
		{
			title: 'Home',
			link: 'https://synthetix.io/',
		},
		{
			title: 'Perps',
			link: 'https://synthetix.io/perps',
		},
		{
			title: 'Governance',
			link: 'https://governance.synthetix.io',
		},
		{
			title: 'Docs',
			link: 'https://docs.synthetix.io/synthetix-protocol/welcome-to-synthetix',
		},
		{
			title: 'Blog',
			link: 'https://blog.synthetix.io/',
		},
		{
			title: 'Stats',
			link: 'https://dune.com/synthetix_community/synthetix-stats',
		},
	],
	[
		{ title: 'About' },
		{
			title: 'Careers',
			link: 'https://jobs.paradigm.xyz/companies/synthetix',
		},
		{
			title: 'Brand Assets',
			link: 'https://docs.synthetix.io/brand-assets/resources',
		},
		{
			title: 'Terms and Conditions',
			link: 'https://staking.synthetix.io/terms',
		},
		{
			title: 'Community Support',
			link: 'https://discord.com/channels/413890591840272394/479848672289488906',
		},
	],
	[
		{ title: 'Dapps' },
		{
			title: 'Staking',
			link: 'https://staking.synthetix.io',
		},
		{
			title: 'Governance',
			link: 'https://governance.synthetix.io',
		},
		{
			title: 'Stats',
			link: 'https://dune.com/synthetix_community/synthetix-stats',
		},
	],
];

export function Footer() {
	return (
		<>
			<Show above="lg">
				<Flex w="100%" flexDir="column" maxW="100%" as="footer" my={'24px'}>
					<Flex w="100%" justifyContent="space-between">
						<Flex gap="14" m="5" w="100%">
							{footerMenu.map((col, i) => {
								return (
									<Flex flexDir="column" gap="2" key={'col' + i}>
										{col.map((menu, index) => (
											<Flex flexDir="column" key={'menu' + index + i}>
												{!index && (
													<Text
														fontWeight="bold"
														textTransform="uppercase"
														minW="95px"
													>
														{menu.title}
													</Text>
												)}
												{menu.link && (
													<Link
														href={menu.link}
														textDecoration="none !important"
														target={
															menu?.link?.startsWith('http') ? '_blank' : ''
														}
													>
														<Text
															color="gray.500"
															_hover={{ color: 'white' }}
															fontFamily="heading"
															fontSize="md"
															fontWeight="bold"
														>
															{menu.title}
														</Text>
													</Link>
												)}
											</Flex>
										))}
									</Flex>
								);
							})}
						</Flex>
						<EmailFooter />
					</Flex>
					<Flex m="16px" justifyContent="space-between">
						<Logo small={true} />
						<Socials isFooter />
					</Flex>
				</Flex>
			</Show>
			<Show below="md">
				<Flex
					as="footer"
					w="100%"
					justifyContent="center"
					alignItems="center"
					flexDir="column"
					my="24px"
				>
					{footerMenu.map((col, i) => {
						return (
							<Fragment key={'col' + i}>
								<Accordion w="100%" allowToggle>
									<AccordionItem>
										<AccordionButton px="0">
											<Text
												fontWeight="bold"
												textTransform="uppercase"
												mr="auto"
											>
												{col[0].title}
											</Text>
											<AccordionIcon>
												<ChevronRightIcon />
											</AccordionIcon>
										</AccordionButton>
										<AccordionPanel px="0px">
											<Flex flexDir="column" gap="2">
												{col.map((menu, index) => (
													<Fragment key={(menu.link || 'menu-link') + index}>
														{!!index && (
															<Link
																href={menu.link}
																textDecoration="none !important"
																mt="24px"
															>
																<Text
																	fontWeight="bold"
																	color="gray.500"
																	_hover={{ color: 'white' }}
																	fontFamily="heading"
																	fontSize="md"
																>
																	{menu.title}
																</Text>
															</Link>
														)}
													</Fragment>
												))}
											</Flex>
										</AccordionPanel>
									</AccordionItem>
								</Accordion>
								<Divider color="gray.900" />
							</Fragment>
						);
					})}
					<Box mt={4} w="100%">
						<EmailFooter />
					</Box>
					<Flex m="5" justifyContent="space-between" w="100%">
						<Logo small={true} />
						<Socials isFooter />
					</Flex>
				</Flex>
			</Show>
		</>
	);
}
