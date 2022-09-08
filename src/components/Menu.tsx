import Link from 'next/link';
import { ImArrowUpRight2 } from 'react-icons/im';
import Search from './Search';
import { useRouter } from 'next/router';
import { ExternalLink } from '../styles/common';
import { HeaderProps } from './Header';
import {
	Box,
	Button,
	Divider,
	Flex,
	Link as ChakraLink,
	Text,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

const data: {
	link?: string;
	label: string;
	hideOnHeader?: boolean;
	button?: boolean;
	externalLink?: string;
}[] = [
	{
		link: '/synths',
		label: 'synths',
		hideOnHeader: false,
	},
	{
		externalLink: 'https://stats.synthetix.io',
		label: 'stats',
		hideOnHeader: false,
		button: true,
	},
	{
		externalLink: 'https://staking.synthetix.io',
		label: 'staking',
		hideOnHeader: false,
		button: true,
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
	{
		externalLink: 'https://research.synthetix.io/',
		label: 'research',
		hideOnHeader: true,
	},
];
interface MenuProps {
	isOpen?: boolean;
	isHeader?: boolean;
	items?: HeaderProps['config']['items'];
	subOpen?: boolean;
}

const MenuComponent = ({
	isHeader,
	isOpen,
	subOpen,
	items,
	...rest
}: MenuProps) => {
	const router = useRouter();
	const urlFolderPathName = router.pathname.split('/')[1];
	return (
		<>
			<Flex
				as="ul"
				left={!!isOpen ? 0 : '-100%'}
				flexWrap={{ base: 'nowrap', md: 'wrap' }}
				zIndex="101"
				width={{ base: '100%', md: 'inherit' }}
				position={{ base: 'fixed', md: 'unset' }}
				direction={{ base: 'column', md: 'row' }}
				top="0"
				pt={{ base: '100px', md: '0px' }}
				height={{ base: '100%', md: 'unset' }}
				overflow="scroll"
				transition="all 250ms linear"
				{...rest}
			>
				{data.map(item => {
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
											<Text fontFamily="display">{item.label}</Text>
										</ChakraLink>
									) : (
										<ChakraLink
											href={item.externalLink}
											color="#828295"
											_hover={{ color: 'cyan.500' }}
											textTransform="uppercase"
										>
											<Text fontFamily="display">{item.label}</Text>
										</ChakraLink>
									)}
								</MenuItem>
							)
						);
					} else {
						<MenuItem subOpen={false} key={item.label}>
							{item.link ? (
								<Link href={item.link}>
									<Text fontFamily="display">{item.label}</Text>
								</Link>
							) : (
								<ExternalLink href={item.externalLink} key={item.label}>
									<Text fontFamily="display">{item.label}</Text>
								</ExternalLink>
							)}
						</MenuItem>;
					}
				})}

				{data.map(item => {
					if (isHeader && item.button) {
						return (
							<Flex
								ml={item.label === 'stats' ? 'auto' : '10px'}
								alignItems="center"
								key={item.label}
							>
								{item.link ? (
									<Link href={item.link}></Link>
								) : (
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
								)}
							</Flex>
						);
					}
				})}
			</Flex>
			<Divider orientation="vertical" maxH="30px" m="5" color="gray.500" />
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
		display={{ base: 'none', md: 'inline-block' }}
		margin={{ base: '0 0 51px 20px', md: '10px 16px' }}
		_last={{ marginRight: 0 }}
		textTransform="uppercase"
		as="li"
		{...rest}
	>
		{children}
	</Box>
);

export default MenuComponent;
