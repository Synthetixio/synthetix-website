import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { client } from '../../lib/sanity';
import { Text } from '@chakra-ui/react';
interface MainImageProps {
	caption?: string;
	image: string;
}

const MainImage = ({ caption, image }: MainImageProps) => {
	const imageProps = useNextSanityImage(client, image);
	return (
		<>
			<Img
				{...imageProps}
				layout="responsive"
				sizes="(max-width: 800px) 100vw, 800px"
			/>
			{caption && (
				<Text
					as="figcaption"
					textAlign="center"
					fontStyle="italic"
					padding="10px"
					fontWeight="300"
					fontSize="12px"
				>
					{caption}
				</Text>
			)}
		</>
	);
};

export default MainImage;
