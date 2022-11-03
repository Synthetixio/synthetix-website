import { useNextSanityImage } from 'next-sanity-image';
import { client } from '../../lib/sanity';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

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
		<Flex
			position="relative"
			h="250px"
			w="100%"
			backgroundImage={imageProps.src}
			backgroundPosition="center center"
			backgroundSize="cover"
			borderRadius="base"
			justifyContent="center"
			alignItems="center"
		>
			<Box textAlign="center" textTransform="uppercase">
				{subTitle && !subPos && <Text size="md">{subTitle}</Text>}
				<Heading>{title}</Heading>
				{subTitle && subPos && <Text size="md">{subTitle}</Text>}
			</Box>
		</Flex>
	);
}
