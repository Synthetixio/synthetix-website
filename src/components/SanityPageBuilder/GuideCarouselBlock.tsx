import styled from 'styled-components';
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import Carousel from 'react-multi-carousel';
import Link from 'next/link';

import 'react-multi-carousel/lib/styles.css';
import client from '../../lib/sanity';
import Tags from '../Guides/Tags';
import { theme } from '../../styles/theme';

const GuideCarouselWrapper = styled.div`
	width: 100%;
	display: inline-grid;

	h2 {
		${theme.pageBuilder.h2};
	}

	.react-multi-carousel-dot-list {
	}

	.react-multi-carousel-dot button {
		background: #828295;
		border: none;
	}

	.react-multi-carousel-dot--active button {
		background: #00d1ff;
	}
`;

const CarouselItem = styled.div`
	margin: 0px 10px;
	min-height: 225px;
	text-align: center;
	background: #0b0b22;
	box-shadow: 0px 14px 14px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	padding: 10px;

	:hover {
		cursor: pointer;
		filter: brightness(120%);
	}
`;
const Title = styled.div`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	color: #fff;
`;
const Intro = styled.div`
	font-size: 12px;
`;

const Figure = styled.figure`
	img {
	}
`;

function GuideItem({ guide }: any) {
	const imageProps = useNextSanityImage(client, guide.icon);
	return (
		<Link href={`/guides/${guide.slug.current}`}>
			<CarouselItem>
				<Tags tags={guide.tags} />
				<Figure>
					<Img {...imageProps} layout="fixed" width={50} height={50} />
				</Figure>
				<Title>{guide.title}</Title>
				<Intro>{guide.introText}</Intro>
			</CarouselItem>
		</Link>
	);
}

interface GuideCarouselBlockProps {
	props: any;
}

export function GuideCarouselBlock({ props }: GuideCarouselBlockProps) {
	const { guides } = props;
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 4,
			slidesToSlide: 3,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1400 },
			items: 4,
			slidesToSlide: 3,
		},
		tablet: {
			breakpoint: { max: 1400, min: 1250 },
			items: 4,
			slidesToSlide: 2,
		},
		tablets: {
			breakpoint: { max: 1250, min: 950 },
			items: 3,
			slidesToSlide: 2,
		},
		mobile: {
			breakpoint: { max: 950, min: 0 },
			items: 2,
			slidesToSlide: 3,
		},
	};
	return (
		<GuideCarouselWrapper>
			<h2>User Guides</h2>
			<Carousel
				responsive={responsive}
				ssr={true}
				swipeable={true}
				draggable={true}
				showDots={true}
				infinite={true}
				autoPlay={true}
				arrows={false}
				autoPlaySpeed={5000}
				transitionDuration={5000}
			>
				{guides.map((guide: any, index: number) => (
					<GuideItem guide={guide} key={index} />
				))}
			</Carousel>
		</GuideCarouselWrapper>
	);
}

export default GuideCarouselBlock;
