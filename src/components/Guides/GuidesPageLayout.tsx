import styled from 'styled-components';
import media from 'styled-media-query';
import { Header } from '..';
import Sidebar from '../Sidebar';
import BuildFooter from '../Build/BuildFooter';
import GuidesHeader from './GuidesHeader';
import { PropsWithChildren } from 'react';
import { OrderedDoc } from '../Build/BuildPageLayout';
import { Flex } from '@chakra-ui/react';

const MainContent = styled.div`
	flex-basis: 0;
	flex-grow: 999;
	min-inline-size: 50%;
	padding: 0 50px;
	min-height: 100vh; //TODO: refactor to body black background and remove this

	${media.lessThan('medium')`
		padding: 0 25px;
	`}
`;

type GuidesPageLayoutProps<T> = {
	navDocs: OrderedDoc[];
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
			<Flex w="100%" position="relative" bg="black">
				<Sidebar navDocs={navDocs} subSlug="guides" />
				<MainContent>
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
				</MainContent>
			</Flex>
		</Flex>
	);
}
