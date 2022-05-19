// @ts-nocheck
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

import client from '../../lib/sanity';

const ImgCarouselWrapper = styled.div`
	.carousel .control-dots {
		background-color: #000;
		width: fit-content;
		height: 20px;
		border-radius: 10px;
		margin: auto;
		position: absolute;
		padding: 0 5px;
		left: 0;
		bottom: 10px;
		right: 0;
	}
`;

const Figure = styled.figure`
	position: relative;
	//padding-top: 56.25%;
	img {
		position: absolute;
		top: 0;
		left: 0;
	}

	figcaption {
		text-align: center;
		padding: 10px;
		font-weight: 300;
		font-size: 12px;
		bottom: 120px;
		border-radius: 10px;
		color: #fff;
		width: 80%;
		position: relative;
		margin: 0 auto;
		background-color: #000;
	}
`;

interface ImgCarouselBlockProps {
	language: string;
	code: any;
}

const Image = ({ props }) => {
	const imageProps = useNextSanityImage(client, props.mainImage);
	return <Img {...imageProps} layout="responsive" width={600} height={375} />;
};

export function ImgCarouselBlock({ props }: ImgCarouselBlockProps) {
	const { slides } = props;
	return (
		<ImgCarouselWrapper>
			<Carousel showStatus={false} dynamicHeight={true} showThumbs={false}>
				{slides.map((slide, index) => (
					<Figure key={index}>
						<Image props={slide} />
						{slide.caption ? <figcaption>{slide.caption}</figcaption> : null}
					</Figure>
				))}
			</Carousel>
		</ImgCarouselWrapper>
	);
}

export default ImgCarouselBlock;
