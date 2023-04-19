import { Fragment } from 'react';
import { Logo, Socials } from './';
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
			title: 'Staking',
			link: 'https://staking.synthetix.io/',
		},
		{
			title: 'Governance',
			link: 'https://governance.synthetix.io/',
		},
	],
	[
		{ title: 'Community' },
		{ title: 'Discord', link: 'https://discord.com/invite/AEdUHzt' },
		{ title: 'Twitter', link: 'https://twitter.com/synthetix_io' },
		{ title: 'GitHub', link: 'https://github.com/Synthetixio' },
	],
	[
		{ title: 'About' },
		{
			title: 'Careers',
			link: 'https://jobs.paradigm.xyz/companies/synthetix',
		},
		{
			title: 'Brand Assets',
			link: 'https://drive.google.com/drive/u/1/folders/1lYReAAGwzb39isEID1n-dDwvFwzKAGDj',
		},
		{
			title: 'Terms and Conditions',
			link: 'https://staking.synthetix.io/terms',
		},
		{
			title: 'Help Center',
			link: 'https://docs.synthetix.io/synthetix-protocol/welcome-to-synthetix',
		},
	],
];

export default function Footer() {
	return (
		<>
			<Show above="lg">
				<Flex
					w="100%"
					flexDir="column"
					maxW="100%"
					px={{ base: 10, sm: 10, md: 10, lg: 16, xl: 36 }}
					as="footer"
					mt={4}
				>
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
					<Flex my="10" justifyContent="space-between">
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
					pt="5"
				>
					{footerMenu.map((col, i) => {
						return (
							<Fragment key={'col' + i}>
								<Accordion w="100%" allowToggle>
									<AccordionItem>
										<AccordionButton>
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
										<AccordionPanel>
											<Flex flexDir="column" gap="2">
												{col.map((menu, index) => (
													<Fragment key={(menu.link || 'menu-link') + index}>
														{!!index && (
															<Link
																href={menu.link}
																textDecoration="none !important"
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
					<Box mt={4}>
						<EmailFooter />
					</Box>
					<Box m="5">
						<Logo small={true} />
					</Box>
					<Box my="10">
						<Socials isFooter />
					</Box>
				</Flex>
			</Show>
		</>
	);
}
