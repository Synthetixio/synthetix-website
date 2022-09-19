import { Header } from '..';
import Sidebar from '../Sidebar';
import BuildFooter from '../Build/BuildFooter';
import GuidesHeader from './GuidesHeader';
import { PropsWithChildren } from 'react';
import { OrderedDoc } from '../Build/BuildPageLayout';
import { Flex } from '@chakra-ui/react';
import { NavDocs } from 'src/typings/cms-types';

type GuidesPageLayoutProps<T> = {
	navDocs: NavDocs[];
	nextDoc?: T;
	prevDoc?: T;
	updatedAt: string;
	mainImage: string;
	title: string;
	subTitle: string;
	subPos: boolean;
};
export default function GuidesPageLayout({
	children,
	navDocs,
	updatedAt,
	mainImage,
	title,
	subTitle,
	subPos,
	nextDoc,
	prevDoc,
}: PropsWithChildren<GuidesPageLayoutProps<OrderedDoc>>) {
	const subMenu = {
		label: 'guides',
		navTitle: 'User Guides',
		items: navDocs,
	};
	return (
		<Flex direction="column" alignItems="center" bg="navy.900">
			<Header config={subMenu} />
			<Flex w="100%" bg="black" h="100vh">
				<Sidebar navDocs={navDocs} subSlug="guides" />
				<Flex
					direction="column"
					p={{ base: '0 25px', md: '0 50px' }}
					overflow="auto"
				>
					<GuidesHeader
						mainImage={mainImage}
						title={title}
						subTitle={subTitle}
						subPos={subPos}
					/>
					{children}
					{(nextDoc || prevDoc) && (
						<BuildFooter
							updatedAt={updatedAt}
							nextDoc={nextDoc}
							prevDoc={prevDoc}
						/>
					)}
				</Flex>
			</Flex>
		</Flex>
	);
}
