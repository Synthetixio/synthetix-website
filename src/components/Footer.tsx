import { Logo, Socials } from './';
import { Box, Flex, Link, Show, Text } from '@chakra-ui/react';
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const footerMenu = [
	[
		{ title: 'Synthetix' },
		{
			title: 'Synths',
			link: '/synths',
		},
		{
			title: 'Governance',
			link: '/governance',
		},
		{
			title: 'Guides',
			link: '/guides',
		},
		{
			title: 'Blog',
			link: 'https://blog.synthetix.io/',
		},
	],
	[
		{ title: 'Dapps' },
		{
			title: 'Staking',
			link: 'https://staking.synthetix.io/',
		},
		{
			title: 'Governance',
			link: 'https://governance.synthetix.io/',
		},
		{
			title: 'Stats',
			link: 'https://grafana.synthetix.io/d/pjPJZ6x7z/synthetix-system-stats?orgId=1&kiosk=full',
		},
		{ title: 'Perps', link: '/futures' },
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
			link: 'https://jobs.defialliance.co/companies/synthetix',
		},
		{
			title: 'Brand Assets',
			link: 'https://drive.google.com/drive/u/1/folders/1lYReAAGwzb39isEID1n-dDwvFwzKAGDj',
		},
		{ title: 'Help Center', link: '/guides' },
	],
];

export default function Footer() {
	return (
		<>
			<Show above="md">
				<Flex w="100%" flexDir="column" maxW="5xl" as="footer">
					<Flex w="100%" justifyContent="space-between">
						<Flex gap="20" m="5" w="100%">
							{footerMenu.map(col => {
								return (
									<Flex flexDir="column" gap="2">
										{col.map((menu, index) => (
											<Flex flexDir="column">
												{!index && (
													<Text fontWeight="bold" textTransform="uppercase">
														{menu.title}
													</Text>
												)}
												{menu.link && (
													<Link
														href={menu.link}
														color="gray.500"
														fontWeight="bold"
													>
														<Text>{menu.title}</Text>
													</Link>
												)}
											</Flex>
										))}
									</Flex>
								);
							})}
						</Flex>
						<Box m="5">
							<Logo small={true} />
						</Box>
					</Flex>
					<Socials isFooter />
				</Flex>
			</Show>
			<Show below="md">
				<Flex
					as="footer"
					w="100%"
					justifyContent="center"
					alignItems="center"
					flexDir="column"
				>
					{footerMenu.map(col => {
						return (
							<Accordion w="100%" allowToggle>
								<AccordionItem>
									<AccordionButton>
										<Text fontWeight="bold" textTransform="uppercase" mr="auto">
											{col[0].title}
										</Text>
										<AccordionIcon>
											<ChevronRightIcon />
										</AccordionIcon>
									</AccordionButton>
									<AccordionPanel>
										<Flex flexDir="column" gap="2">
											{col.map((menu, index) => (
												<>
													{!!index && (
														<Link href={menu.link}>
															<Text fontWeight="bold" color="gray.500">
																{menu.title}
															</Text>
														</Link>
													)}
												</>
											))}
										</Flex>
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						);
					})}

					<Box m="5">
						<Logo small={true} />
					</Box>
					<Socials isFooter />
				</Flex>
			</Show>
		</>
	);
}
