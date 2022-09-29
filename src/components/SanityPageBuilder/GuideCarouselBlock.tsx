import styled from 'styled-components';
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import Carousel from 'react-multi-carousel';
import Link from 'next/link';
import 'react-multi-carousel/lib/styles.css';
import { client } from '../../lib/sanity';
import Tags from '../Guides/Tags';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Guide, PageBuilderProps } from 'pages/build/[slug]';

const GuideCarouselWrapper = styled.div`
	width: 100%;
	display: inline-grid;

	.react-multi-carousel-dot button {
		background: #828295;
		border: none;
	}

	.react-multi-carousel-dot--active button {
		background: #00d1ff;
	}
`;

function GuideItem(props: Guide) {
	const imageProps = useNextSanityImage(client, props.icon);
	return (
		<Link href={`/guides/${props.slug.current}`} style={{ margin: '10px' }}>
			<Flex
				direction="column"
				alignItems="center"
				textAlign="center"
				bg="navy.900"
				boxShadow="base"
				borderRadius="base"
				p="16px"
				cursor="pointer"
				_hover={{ filter: 'brightness(120%)' }}
				w="100%"
				h="200px"
			>
				<Tags tags={props.tags} />
				{imageProps?.src && (
					<Img {...imageProps} layout="fixed" width={50} height={50} />
				)}
				<Text fontWeight="bold" my="2">
					{props.title}
				</Text>
				<Text>{props.introText}</Text>
			</Flex>
		</Link>
	);
}

interface GuideCarouselBlockProps {
	guides: PageBuilderProps['guides'];
}

export function GuideCarouselBlock({ guides }: GuideCarouselBlockProps) {
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
			<Heading as="h2" my="2" size="md">
				User Guides
			</Heading>
			<Carousel
				responsive={responsive}
				ssr={true}
				swipeable={true}
				draggable={true}
				infinite={true}
				arrows={false}
				autoPlaySpeed={5000}
				transitionDuration={5000}
				autoPlay
			>
				{guides.map((guide, index) => (
					<Box
						mr="2"
						borderRadius="base"
						borderColor="gray.900"
						borderWidth="1px"
						borderStyle="solid"
					>
						<GuideItem {...guide} key={index} />
					</Box>
				))}
			</Carousel>
		</GuideCarouselWrapper>
	);
}

export default GuideCarouselBlock;
