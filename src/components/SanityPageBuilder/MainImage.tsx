// @ts-nocheck
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

import client from '../../lib/sanity';

// If you're using a private dataset you probably have to configure a separate write/read client.
// https://www.sanity.io/help/js-client-usecdn-token

const MainImage = ({ props }) => {
	const imageProps = useNextSanityImage(client, props);
	return <Img {...imageProps} layout="responsive" sizes="(max-width: 800px) 100vw, 800px" />;
};

export default MainImage;
