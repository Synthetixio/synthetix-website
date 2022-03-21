// @ts-nocheck
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import styled from 'styled-components';

import client from '../../lib/sanity';

const Figure = styled.figure`
	img {
		border-radius: 25px;
	}

	figcaption {
		text-align: center;
		font-style: italic;
		padding: 10px;
		font-weight: 300;
		font-size: 12px;
	}
`;

const MainImage = ({ props }) => {
	const imageProps = useNextSanityImage(client, props);
	const caption = props.caption || null;
	return (
		<Figure>
			<Img {...imageProps} layout="responsive" sizes="(max-width: 800px) 100vw, 800px" />
			{caption ? <figcaption>{caption}</figcaption> : null}
		</Figure>
	);
};

export default MainImage;
