import { ImArrowUpRight2 } from 'react-icons/im';
import { useRouter } from 'next/router';
import { ExternalLink } from '../../styles/common';
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
	},
	{
		link: '/governance',
		label: 'Governance',
	},
	{
		externalLink: 'https://docs.synthetix.io/',
		label: 'Docs',
	},
	{
		externalLink: 'https://blog.synthetix.io/',
		label: 'Blog',
	},
	{
		externalLink: 'https://stats.synthetix.io',
		label: 'Stats',
	},
];

const externalButtons = [
	{
		externalLink: 'https://liquidity.synthetix.io/',
		label: 'Liquidity App',
	},
];

interface MenuProps {
	isOpen?: boolean;
}

export const Menu = ({ isOpen, ...rest }: MenuProps) => {
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
				position={{ base: 'fixed', xl: 'static' }}
				direction={{ base: 'column', xl: 'row' }}
				top="0"
				pt={{ base: '100px', xl: '0px' }}
				height={{ base: '100%', xl: 'auto' }}
				transition="all 250ms linear"
				background={{ base: 'navy.900', xl: 'transparent' }}
				{...rest}
			>
				{data.map(item => {
					return (
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
											urlFolderPathName === item.label ? 'cyan.500' : 'gray.500'
										}
										_hover={{ color: 'white' }}
										fontSize={{ base: '2xl', md: 'sm' }}
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
									target="_blank"
								>
									<Text
										fontFamily="heading"
										fontWeight="bold"
										color="gray.500"
										_hover={{ color: 'white' }}
										fontSize={{ base: '2xl', md: 'sm' }}
									>
										{item.label}
									</Text>
								</ChakraLink>
							)}
						</MenuItem>
					);
				})}
				<Flex ml={{ base: '16px', xl: 'auto' }} gap="2" alignItems="center">
					{externalButtons.map(item => {
						return (
							<ExternalLink href={item.externalLink} key={item.label}>
								<Button
									size="sm"
									colorScheme="cyan"
									key={item.label}
									rightIcon={<ImArrowUpRight2 />}
									mt={{ base: '8px', xl: '0' }}
									borderRadius="4px"
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
