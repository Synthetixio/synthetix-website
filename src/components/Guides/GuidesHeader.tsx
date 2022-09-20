import { useNextSanityImage } from 'next-sanity-image';
import { client } from '../../lib/sanity';
import { Box, Heading, Text } from '@chakra-ui/react';

interface GuidesHeaderProps {
	mainImage: string;
	title: string;
	subTitle: string;
	subPos: boolean;
}
export default function GuidesHeader({
	mainImage,
	title,
	subTitle,
	subPos,
}: GuidesHeaderProps) {
	const imageProps = useNextSanityImage(client, mainImage);
	return (
		<Box
			position="relative"
			height="100%"
			w="100%"
			backgroundImage={imageProps.src}
			minH="250px"
			backgroundPosition="center center"
			backgroundSize="cover"
		>
			<Box
				position="absolute"
				top="50%"
				left="50%"
				transform="translate(-50%,-50%)"
				zIndex="99"
				textAlign="center"
				textTransform="uppercase"
			>
				{subTitle && !subPos && <Text>{subTitle}</Text>}
				<Heading>{title}</Heading>
				{subTitle && subPos && <Text size="md">{subTitle}</Text>}
			</Box>
		</Box>
	);
}
