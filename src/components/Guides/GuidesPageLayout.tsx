import { Header } from '..';
import Sidebar from '../Sidebar';
import BuildFooter from '../Build/BuildFooter';
import GuidesHeader from './GuidesHeader';
import { PropsWithChildren } from 'react';
import { OrderedDoc } from '../Build/BuildPageLayout';
import { Container, Flex } from '@chakra-ui/react';
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
		<Container
			display="flex"
			flexDirection="column"
			alignItems="center"
			bg="navy.900"
			minH="100vh"
			maxW="1920px"
		>
			<Header config={subMenu} />
			<Flex w="100%">
				<Sidebar navDocs={navDocs} subSlug="guides" />
				<Flex
					direction="column"
					p={{ base: '0 25px', md: '0 50px' }}
					overflow="auto"
					w="100%"
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
		</Container>
	);
}
