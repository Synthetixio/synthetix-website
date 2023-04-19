import { ImArrowUpRight2 } from 'react-icons/im';
import { useRouter } from 'next/router';
import { ExternalLink } from '../styles/common';
import { Box, Button, Flex, Link as ChakraLink, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

const data: {
	link?: string;
	label: string;
	hideOnHeader?: boolean;
	externalLink?: string;
}[] = [
	{
		link: '/perps',
		label: 'Perps',
		hideOnHeader: false,
	},
	{
		link: '/governance',
		label: 'Governance',
		hideOnHeader: false,
	},
	{
		link: 'https://docs.synthetix.io/',
		label: 'Docs',
		hideOnHeader: false,
	},
	{
		externalLink: 'https://blog.synthetix.io/',
		label: 'Blog',
		hideOnHeader: false,
	},
	{
		externalLink: 'https://stats.synthetix.io',
		label: 'Stats',
		hideOnHeader: false,
	},
];

const externalButtons = [
	{
		externalLink: 'https://staking.synthetix.io',
		label: 'Staking App',
	},
];

interface MenuProps {
	isOpen?: boolean;
}

const MenuComponent = ({ isOpen, ...rest }: MenuProps) => {
	const { pathname } = useRouter();
	const urlFolderPathName = pathname.split('/')[1];

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
				{data.map(item => {
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
											fontSize={{ base: '2xl', md: 'sm', lg: 'md' }}
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
				<Flex ml={{ base: '5', md: 'auto' }} gap="2">
					{externalButtons.map(item => {
						return (
							<ExternalLink href={item.externalLink} key={item.label}>
								<Button
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
			</Flex>
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
