import { ImArrowUpRight2 } from 'react-icons/im';
import Search from './Search';
import { useRouter } from 'next/router';
import { ExternalLink } from '../styles/common';
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
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
import { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { NavDocs } from 'src/typings/cms-types';
import { theme } from '@synthetixio/v3-theme';
import { ArrowBackIcon, ChevronDownIcon } from '@chakra-ui/icons';

const data: {
	link?: string;
	label: string;
	hideOnHeader?: boolean;
	externalLink?: string;
}[] = [
	{
		link: '/synths',
		label: 'Synths',
		hideOnHeader: false,
	},
	// {
	// 	link: '/build/welcome-to-snx',
	// 	label: 'Build',
	// 	hideOnHeader: false,
	// },
	{
		link: '/governance',
		label: 'Governance',
		hideOnHeader: false,
	},
	{
		link: '/guides',
		label: 'Guides',
		hideOnHeader: false,
	},
	{
		externalLink: 'https://discord.com/invite/AEdUHzt',
		label: 'Community',
		hideOnHeader: false,
	},
	{
		externalLink: 'https://blog.synthetix.io/',
		label: 'Blog',
		hideOnHeader: false,
	},
];

const externalButtons = [
	{
		externalLink: 'https://stats.synthetix.io',
		label: 'Stats',
	},
	{
		externalLink: 'https://staking.synthetix.io',
		label: 'Staking',
	},
];

const isActive = (indexes: ExpandedIndex, index: number) => {
	return typeof indexes === 'number'
		? indexes === index
		: indexes.includes(index);
};
interface MenuProps {
	isOpen?: boolean;
	items?: NavDocs[];
	subOpen?: boolean;
	setSubOpen?: Dispatch<SetStateAction<boolean>>;
}

const MenuComponent = ({
	isOpen,
	subOpen,
	items,
	setSubOpen,
	...rest
}: MenuProps) => {
	const { pathname, push, asPath } = useRouter();
	const urlFolderPathName = pathname.split('/')[1];
	const subRoute = asPath.split('/')[asPath.split('/').length - 1];
	const [activeIndexes, setActiveIndexes] = useState<ExpandedIndex>([]);

	const isGuidesStartPage =
		pathname.split('/').length === 2 && pathname.split('/')[1] === 'guides';
	return (
		<>
			<Flex
				as="ul"
				left={!!isOpen ? 0 : '-100%'}
				justifyContent="flex-start"
				flexWrap="nowrap"
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
				{(items?.length && isOpen && subOpen && (
					<Flex flexDir="column">
						<ArrowBackIcon
							w={7}
							h={7}
							ml="4"
							mb="6"
							onClick={() => setSubOpen && setSubOpen(false)}
						/>
						<Heading
							ml="4"
							size="md"
							bgGradient={
								isGuidesStartPage && theme.gradients['green-cyan'][500]
							}
							backgroundClip={isGuidesStartPage ? 'text' : 'unset'}
							style={{
								WebkitTextFillColor: isGuidesStartPage ? 'transparent' : 'none',
							}}
							onClick={() => push('/guides')}
							cursor="pointer"
							fontSize="2xl"
						>
							User Guides Hub
						</Heading>
						<Accordion
							allowToggle
							onChange={indexes => setActiveIndexes(indexes)}
						>
							{items?.map((item, index) => {
								return (
									<AccordionItem key={item.title.concat(index.toString())}>
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
											<AccordionIcon>
												<ChevronDownIcon w={6} h={6} />
											</AccordionIcon>
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
														key={doc.title}
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
					</Flex>
				)) ||
					data.map(item => {
						return (
							!item.hideOnHeader && (
								<MenuItem key={item.label} {...rest}>
									{item.link ? (
										<ChakraLink
											transition={
												urlFolderPathName === item.label
													? 'color 0.3s ease-out'
													: ''
											}
											_hover={{ color: 'cyan.500' }}
											href={item.link}
										>
											<Text
												fontFamily="heading"
												fontWeight="bold"
												color={
													urlFolderPathName === item.label
														? 'cyan.500'
														: 'gray.500'
												}
												_hover={{ color: 'white' }}
												fontSize={{ base: '2xl', md: 'md' }}
											>
												{item.label}
											</Text>
										</ChakraLink>
									) : (
										<ChakraLink
											href={item.externalLink}
											color="#828295"
											_hover={{ color: 'cyan.500' }}
											key={item.link}
										>
											<Text
												fontFamily="heading"
												fontWeight="bold"
												color="gray.500"
												_hover={{ color: 'white' }}
												fontSize={{ base: '2xl', md: 'md' }}
											>
												{item.label}
											</Text>
										</ChakraLink>
									)}
								</MenuItem>
							)
						);
					})}
				{!subOpen ? (
					<Flex ml={{ base: '5', md: 'auto' }} gap="2">
						{externalButtons.map(item => {
							return (
								<ExternalLink href={item.externalLink} key={item.label}>
									<Button
										variant="outline"
										colorScheme="cyan"
										key={item.label}
										rightIcon={<ImArrowUpRight2 />}
									>
										{item.label}
									</Button>
								</ExternalLink>
							);
						})}
					</Flex>
				) : items?.length && !isOpen && subOpen ? (
					<Flex ml={{ base: '5', md: 'auto' }} gap="2">
						{externalButtons.map(item => {
							return (
								<ExternalLink href={item.externalLink} key={item.label}>
									<Button
										variant="outline"
										colorScheme="cyan"
										key={item.label}
										rightIcon={<ImArrowUpRight2 />}
									>
										{item.label}
									</Button>
								</ExternalLink>
							);
						})}
					</Flex>
				) : null}
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

export const MenuItem = ({ children, ...rest }: { children: ReactNode }) => (
	<Box
		display={{ base: 'block', md: 'inline-block' }}
		margin={{ base: '0 0 51px 20px', md: '10px 16px' }}
		as="li"
		{...rest}
	>
		{children}
	</Box>
);

export default MenuComponent;
