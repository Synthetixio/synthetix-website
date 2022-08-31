import styled from 'styled-components';
import media from 'styled-media-query';
import { Header } from '..';
import Sidebar from '../Sidebar';
import BuildFooter from '../Build/BuildFooter';
import GuidesHeader from './GuidesHeader';
import { PropsWithChildren } from 'react';
import { OrderedDoc } from '../Build/BuildPageLayout';
import { Flex } from '@chakra-ui/react';

const OutWrapper = styled.div`
	width: 100%;
	background-color: #000; //TODO: refactor to body black background and remove this
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	position: relative;
	gap: var(--s1);
	max-width: ${({ theme }) => theme.maxContentWidthBuild};
	width: 100%;
	position: relative;
	margin: 0 auto;
`;

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
	navDocs: { title: string; docs: OrderedDoc[] }[];
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
		navtitle: 'User Guides',
		items: navDocs,
	};
	return (
		<Flex direction="column" alignItems="center" bg="navy.900">
			<Header navDocs={subMenu} navShort={true} />
			<OutWrapper>
				<ContentWrapper>
					<Sidebar navDocs={navDocs} subSlug="guides" />
					<MainContent>
						<GuidesHeader mainImage={mainImage} title={title} subTitle={subTitle} subPos={subPos} />
						{children}
						{(nextDoc || prevDoc) && (
							<BuildFooter updatedAt={updatedAt} nextDoc={nextDoc} prevDoc={prevDoc} />
						)}
					</MainContent>
				</ContentWrapper>
			</OutWrapper>
		</Flex>
	);
}
