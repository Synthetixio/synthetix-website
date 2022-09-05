import styled from 'styled-components';
import media from 'styled-media-query';
import { FlexDivColCentered } from 'src/styles/common';
import Link from 'next/link';
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { Header } from '..';
import Sidebar from '../Sidebar';
import BuildFooter from '../Build/BuildFooter';
import Tags from '../Guides/Tags';
import { client } from '../../lib/sanity';
import { theme } from '../../styles/theme';
import { OrderedDoc } from '../Build/BuildPageLayout';
import { Flex, Heading, Text } from '@chakra-ui/react';

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

	h1 {
		${theme.pageBuilder.h1};
		margin-top: 25px;
	}
`;

export interface GuideItemProps {
	icon: string;
	slug: { current: string };
	tags: string;
	title: string;
	introText: string;
}
function GuideItem({ icon, slug, tags, title, introText }: GuideItemProps) {
	const imageProps = useNextSanityImage(client, icon);
	return (
		<Link href={`/guides/${slug.current}`}>
			<Flex
				alignItems="center"
				cursor="pointer"
				padding="2.5"
				borderRadius="base"
				boxShadow="base"
				background="navy.900"
				margin="4"
			>
				<Img {...imageProps} layout="fixed" width={100} height={100} />
				<Flex direction="column" ml="4" gap="2">
					<Heading size="md">{title}</Heading>
					<Text>{introText}</Text>
					<Tags tags={tags} />
				</Flex>
			</Flex>
		</Link>
	);
}

interface TagsPageLayoutProps {
	navDocs: OrderedDoc[];
	updatedAt: string;
	title: string;
	subTitle: string;
	guides: GuideItemProps[];
}

export default function TagsPageLayout({
	navDocs,
	updatedAt,
	title,
	subTitle,
	guides,
}: TagsPageLayoutProps) {
	const subMenu = {
		label: 'guides',
		navtitle: 'User Guides',
		items: navDocs,
	};

	return (
		<FlexDivColCentered>
			<Header navDocs={subMenu} navShort={true} />
			<OutWrapper>
				<ContentWrapper>
					<Sidebar navDocs={navDocs} subSlug="guides" />
					<MainContent>
						<h1>{title}</h1>
						<h2>{subTitle}</h2>
						{guides &&
							guides.map((guide, index) => (
								<GuideItem {...guide} key={title.concat(index.toString())} />
							))}
						<BuildFooter updatedAt={updatedAt} />
					</MainContent>
				</ContentWrapper>
			</OutWrapper>
		</FlexDivColCentered>
	);
}
