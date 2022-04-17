// @ts-nocheck
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

import client from '../../lib/sanity';

const ImgCarouselWrapper = styled.div`
	.carousel .control-dots {
		bottom: 10px;
		background-color: #000;
		width: auto;
		margin: 0 auto;
		display: table-column-group;
		margin-left: 47%;
		height: 20px;
		border-radius: 10px;
	}
`;

const Figure = styled.figure`
	img {
		//border-radius: 25px;
	}

	figcaption {
		text-align: center;
		padding: 10px;
		font-weight: 300;
		font-size: 12px;
		bottom: 100px;
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
	return <Img {...imageProps} layout="responsive" sizes="(max-width: 800px) 100vw, 800px" />;
};

export function ImgCarouselBlock({ props }: ImgCarouselBlockProps) {
	const { slides } = props;
	return (
		<ImgCarouselWrapper>
			<Carousel showStatus={false} dynamicHeight={true}>
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
