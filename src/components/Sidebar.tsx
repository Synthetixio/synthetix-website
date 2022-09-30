import { Box, Heading, Hide } from '@chakra-ui/react';
import { theme } from '@synthetixio/v3-theme';
import { useRouter } from 'next/router';
import { NavDocs } from 'src/typings/cms-types';
import SideBarItem from './SideBarItem';
import Socials from './Socials';

export interface SidebarProps {
	navDocs: NavDocs[];
	subSlug: 'guides' | 'build';
}

export default function Sidebar({ navDocs, subSlug }: SidebarProps) {
	const { push, pathname } = useRouter();
	const isGuidesStartPage =
		pathname.split('/').length === 2 && pathname.split('/')[1] === 'guides';

	return (
		<Hide below="md">
			<Box
				maxW="300px"
				p="10"
				borderRight="1px solid"
				borderRightColor="gray.900"
				minW="300px"
				h="inherit"
			>
				{subSlug === 'guides' && (
					<Heading
						bgGradient={isGuidesStartPage && theme.gradients['green-cyan'][500]}
						backgroundClip={isGuidesStartPage ? 'text' : 'unset'}
						style={{
							WebkitTextFillColor: isGuidesStartPage ? 'transparent' : 'none',
						}}
						onClick={() => push('/guides')}
						cursor="pointer"
						fontSize="lg"
					>
						User Guides Hub
					</Heading>
				)}
				{navDocs.map((item, i) => (
					<SideBarItem
						subSlug={subSlug}
						docs={item.docs}
						title={item.title}
						key={i.toString().concat(subSlug)}
					/>
				))}
				<Socials fill={theme.colors.cyan[500]} />
			</Box>
		</Hide>
	);
}
