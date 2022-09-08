import { Box, Hide } from '@chakra-ui/react';
import { theme } from '@synthetixio/v3-theme';
import SideBarItem from './SideBarItem';
import Socials from './Socials';

export interface SidebarProps {
	navDocs: {
		title: string;
		docs: { slug: { _type: 'slug'; current: string }; title: string }[];
	}[];
	subSlug: string;
}

export default function Sidebar({ navDocs, subSlug }: SidebarProps) {
	return (
		<Hide below="md">
			<Box
				maxW="300px"
				p="10"
				borderRight="1px solid"
				borderRightColor="gray.900"
				minW="300px"
				position="relative"
			>
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
