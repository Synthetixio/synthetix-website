import Link from 'next/link';
import { ImArrowUpRight2 } from 'react-icons/im';
import Search from './Search';
import { useRouter } from 'next/router';
import { ExternalLink } from '../styles/common';
import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Divider,
	ExpandedIndex,
	Flex,
	Heading,
	Hide,
	Link as ChakraLink,
	Text,
} from '@chakra-ui/react';
import { ReactNode, useState } from 'react';
import { NavDocs } from 'src/typings/cms-types';
import { theme } from '@synthetixio/v3-theme';
import { ChevronDownIcon } from '@chakra-ui/icons';

const data: {
	link?: string;
	label: string;
	hideOnHeader?: boolean;
	externalLink?: string;
}[] = [
	{
		link: '/synths',
		label: 'synths',
		hideOnHeader: false,
	},
	{
		link: '/build/welcome-to-snx',
		label: 'build',
		hideOnHeader: false,
	},
	{
		link: '/guides',
		label: 'guides',
		hideOnHeader: false,
	},
	{
		link: '/governance',
		label: 'governance',
		hideOnHeader: false,
	},
	{
		externalLink: 'https://discord.com/invite/AEdUHzt',
		label: 'community',
		hideOnHeader: false,
	},
	{
		externalLink: 'https://jobs.defialliance.co/companies/synthetix',
		label: 'careers',
		hideOnHeader: true,
	},
	{
		externalLink: 'https://blog.synthetix.io/',
		label: 'blog',
		hideOnHeader: false,
	},
];

const externalButtons = [
	{
		externalLink: 'https://stats.synthetix.io',
		label: 'stats',
		hideOnHeader: false,
	},
	{
		externalLink: 'https://staking.synthetix.io',
		label: 'staking',
		hideOnHeader: false,
	},
];

const isActive = (indexes: ExpandedIndex, index: number) => {
	return typeof indexes === 'number'
		? indexes === index
		: indexes.includes(index);
};
interface MenuProps {
	isOpen?: boolean;
	isHeader?: boolean;
	items?: NavDocs[];
	subOpen?: boolean;
}

const MenuComponent = ({
	isHeader,
	isOpen,
	subOpen,
	items,
	...rest
}: MenuProps) => {
	const { pathname, push, asPath } = useRouter();
	const urlFolderPathName = pathname.split('/')[1];
	const subRoute = asPath.split('/')[asPath.split('/').length - 1];
	const [activeIndexes, setActiveIndexes] = useState<ExpandedIndex>([]);

	return (
		<>
			<Flex
				as="ul"
				left={!!isOpen ? 0 : '-100%'}
				justifyContent={isHeader ? 'flex-start' : 'flex-end'}
				flexWrap={{ base: 'wrap', md: 'nowrap' }}
				zIndex="101"
				width="100%"
				position={{ base: 'fixed', md: 'static' }}
				direction={{ base: 'column', md: 'row' }}
				top="0"
				pt={{ base: '100px', md: '0px' }}
				height={{ base: '100%', md: 'auto' }}
				transition="all 250ms linear"
				background={{ base: 'navy.900', md: 'transparent' }}
				{...rest}
			>
				{(items?.length && isOpen && (
					<Box>
						<Heading
							ml="4"
							mb="4"
							size="md"
							bgGradient={theme.gradients['green-cyan'][500]}
							backgroundClip="text"
							style={{ WebkitTextFillColor: 'transparent' }}
							onClick={() => push('/guides')}
							cursor="pointer"
						>
							User Guides Hub
						</Heading>
						<Accordion
							allowToggle
							onChange={indexes => setActiveIndexes(indexes)}
						>
							{items?.map((item, index) => {
								return (
									<AccordionItem>
										<AccordionButton
											display="flex"
											justifyContent="space-between"
										>
											<Heading
												size="lg"
												bgGradient={
													isActive(activeIndexes, index)
														? theme.gradients['green-cyan'][500]
														: ''
												}
												backgroundClip={
													isActive(activeIndexes, index) ? 'text' : ''
												}
												style={{
													WebkitTextFillColor: isActive(activeIndexes, index)
														? 'transparent'
														: '',
												}}
											>
												{item.title}
											</Heading>
											<ChevronDownIcon w={6} h={6} />
										</AccordionButton>
										<AccordionPanel
											display="flex"
											flexDirection="column"
											gap="2"
											ml="4"
										>
											{item.docs.map(doc => {
												return (
													<ChakraLink
														href={`/${urlFolderPathName}/${doc.slug.current}`}
													>
														<Text
															fontSize="lg"
															bgGradient={
																doc.slug.current === subRoute
																	? theme.gradients['green-cyan'][500]
																	: ''
															}
															color="gray.500"
															backgroundClip={
																doc.slug.current === subRoute ? 'text' : ''
															}
															style={{
																WebkitTextFillColor:
																	doc.slug.current === subRoute
																		? 'transparent'
																		: '',
															}}
														>
															{doc.title}
														</Text>
													</ChakraLink>
												);
											})}
										</AccordionPanel>
									</AccordionItem>
								);
							})}
						</Accordion>
					</Box>
				)) ||
					data.map(item => {
						if (isHeader) {
							return (
								!item.hideOnHeader &&
								!item.button && (
									<MenuItem key={item.label} subOpen={!!subOpen} {...rest}>
										{item.link ? (
											<ChakraLink
												color={
													urlFolderPathName === item.label
														? 'cyan.500'
														: '#828295'
												}
												transition={
													urlFolderPathName === item.label
														? 'color 0.3s ease-out'
														: ''
												}
												_hover={{ color: 'cyan.500' }}
												textTransform="uppercase"
												href={item.link}
											>
												<Text
													fontFamily="heading"
													fontWeight="bold"
													color={
														urlFolderPathName === item.label
															? 'cyan.500'
															: 'white'
													}
												>
													{item.label}
												</Text>
											</ChakraLink>
										) : (
											<ChakraLink
												href={item.externalLink}
												color="#828295"
												_hover={{ color: 'cyan.500' }}
												textTransform="uppercase"
											>
												<Text
													fontFamily="heading"
													fontWeight="bold"
													color="white"
												>
													{item.label}
												</Text>
											</ChakraLink>
										)}
									</MenuItem>
								)
							);
						} else {
							return (
								<MenuItem subOpen={false} key={item.label}>
									{item.link ? (
										<Link href={item.link}>
											<Text
												fontFamily="heading"
												fontWeight="bold"
												color={
													urlFolderPathName === item.label
														? 'cyan.500'
														: 'white'
												}
											>
												{item.label}
											</Text>
										</Link>
									) : (
										<ExternalLink href={item.externalLink} key={item.label}>
											<Text
												fontFamily="heading"
												fontWeight="bold"
												color={
													urlFolderPathName === item.label
														? 'cyan.500'
														: 'white'
												}
											>
												{item.label}
											</Text>
										</ExternalLink>
									)}
								</MenuItem>
							);
						}
					})}
				<Flex ml="auto" gap="2">
					{!isOpen &&
						externalButtons.map(item => {
							if (isHeader && !item.hideOnHeader) {
								return (
									<ExternalLink href={item.externalLink}>
										<Button
											variant="outline"
											colorScheme="cyan"
											key={item.label}
											rightIcon={<ImArrowUpRight2 />}
											textTransform="uppercase"
										>
											{item.label}
										</Button>
									</ExternalLink>
								);
							}
						})}
				</Flex>
			</Flex>
			<Hide below="md">
				<Divider orientation="vertical" mx="5" color="gray.500" h="30px" />
			</Hide>
			<Box
				ml="20xp"
				right={{ base: '20px', md: '0px' }}
				position={{ base: 'absolute', md: 'unset' }}
				{...rest}
			>
				<Search />
			</Box>
		</>
	);
};

export const MenuItem = ({
	subOpen,
	children,
	...rest
}: {
	children: ReactNode;
	subOpen: boolean;
}) => (
	<Box
		display={{ base: 'block', md: 'inline-block' }}
		margin={{ base: '0 0 51px 20px', md: '10px 16px' }}
		textTransform="uppercase"
		as="li"
		{...rest}
	>
		{children}
	</Box>
);

export default MenuComponent;
