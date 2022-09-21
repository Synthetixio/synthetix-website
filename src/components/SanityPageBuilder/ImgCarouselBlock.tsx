import { Box, Image as ChakraImage } from '@chakra-ui/react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useNextSanityImage } from 'next-sanity-image';
import { client } from '../../lib/sanity';

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

const Image = ({ mainImage }: { mainImage: { asset: { _ref: string } } }) => {
	const imageProps = useNextSanityImage(client, mainImage);
	return <ChakraImage {...imageProps} />;
};

export interface ImgCarouselBlock {
	mainImage: { asset: { _ref: string } };
	caption: string;
}

export function ImgCarouselBlock({ slides }: { slides: ImgCarouselBlock[] }) {
	return (
		<ImgCarouselWrapper>
			<Carousel
				showStatus={false}
				dynamicHeight={true}
				showThumbs={false}
				width="100%"
			>
				{slides.map(slide => (
					<Box position="relative" key={slide.mainImage.asset._ref}>
						<Image mainImage={slide.mainImage} />
						{slide.caption && (
							<Box
								as="figcaption"
								textAlign="center"
								p="10px"
								position="absolute"
								bottom="50px"
								borderRadius="base"
								color="white"
								left="10%"
								width="80%"
								bg="black"
							>
								{slide.caption}
							</Box>
						)}
					</Box>
				))}
			</Carousel>
		</ImgCarouselWrapper>
	);
}

export default ImgCarouselBlock;
