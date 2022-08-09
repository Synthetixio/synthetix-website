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

	h2 {
		${theme.pageBuilder.h2};
		margin-bottom: 25px;
	}
`;

const CarouselItem = styled.div`
	margin: 0px 10px;
	text-align: center;
	background: #0b0b22;
	box-shadow: 0px 14px 14px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	padding: 10px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 10px;
`;

const Left = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Right = styled.div`
	display: block;
	align-items: left;
	justify-content: left;
	text-align: left;
	margin-left: 15px;

	* {
		margin-bottom: 5px;
	}
`;

const Title = styled.div`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	color: #fff;
`;
const Intro = styled.div``;

const Figure = styled.figure`
	img {
	}
`;
interface GuideItemProps {
	guide: {
		icon: string;
		slug: { current: string };
		tags: string;
		title: string;
		introText: string;
	};
}
function GuideItem({ guide }: GuideItemProps) {
	const imageProps = useNextSanityImage(client, guide.icon);
	return (
		<Link href={`/guides/${guide.slug.current}`}>
			<CarouselItem>
				<Left>
					<Figure>
						<Img {...imageProps} layout="fixed" width={100} height={100} />
					</Figure>
				</Left>
				<Right>
					<Title>{guide.title}</Title>
					<Intro>{guide.introText}</Intro>
					<Tags tags={guide.tags} />
				</Right>
			</CarouselItem>
		</Link>
	);
}

export default function TagsPageLayout(props: any) {
	const { navDocs, updatedAt, title, subTitle, guides } = props;
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
						{guides && guides.map((guide: any, index) => <GuideItem guide={guide} key={index} />)}
						<BuildFooter updatedAt={updatedAt} />
					</MainContent>
				</ContentWrapper>
			</OutWrapper>
		</FlexDivColCentered>
	);
}
