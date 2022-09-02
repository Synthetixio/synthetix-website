import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import styled from 'styled-components';
import { client } from '../../lib/sanity';

const Figure = styled.figure`
	figcaption {
		text-align: center;
		font-style: italic;
		padding: 10px;
		font-weight: 300;
		font-size: 12px;
	}
`;

interface MainImageProps {
	caption?: string;
	image: string;
}

const MainImage = ({ caption, image }: MainImageProps) => {
	const imageProps = useNextSanityImage(client, image);
	return (
		<Figure>
			<Img {...imageProps} layout="responsive" sizes="(max-width: 800px) 100vw, 800px" />
			{caption && <figcaption>{caption}</figcaption>}
		</Figure>
	);
};

export default MainImage;
