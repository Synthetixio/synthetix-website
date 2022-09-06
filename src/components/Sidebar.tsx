import { Box, Hide } from '@chakra-ui/react';
import { theme } from '@synthetixio/v3-theme';
import { OrderedDoc } from './Build/BuildPageLayout';
import SideBarItem from './SideBarItem';
import Socials from './Socials';

export default function Sidebar({
	navDocs,
	subSlug,
}: {
	navDocs: OrderedDoc[];
	subSlug: string;
}) {
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
				{navDocs.map((item: any, i: number) => (
					<SideBarItem subSlug={subSlug} props={item} key={i} />
				))}
				<Socials fill={theme.colors.cyan[500]} />
			</Box>
		</Hide>
	);
}
