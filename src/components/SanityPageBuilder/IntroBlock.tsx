import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import Link from 'next/link';
import { client } from '../../lib/sanity';
import { PageBuilderProps } from 'pages/build/[slug]';
import { Box, Flex, Link as ChakraLink } from '@chakra-ui/react';
import { TextComponent } from './ContentBlock';

interface IntroBlockProps {
	body: PageBuilderProps['body'];
	icon: PageBuilderProps['icon'];
	iconLinkText: string;
	iconLinkURL: string;
	iconText: string;
}

export function IntroBlock({
	icon,
	iconLinkURL,
	iconText,
	iconLinkText,
	body,
}: IntroBlockProps) {
	const imageProps: any = useNextSanityImage(client, icon!.asset._ref);
	return (
		<Link href={iconLinkURL}>
			<Flex
				borderRadius="base"
				height="fit-content"
				justifyContent="center"
				alignItems="center"
				flexWrap="wrap"
				cursor="pointer"
				_hover={{ filter: 'brightness(120%)' }}
			>
				<Flex flex-basis="66.66%" pr="10px">
					{body[0].children?.map(content => (
						<TextComponent child={content} />
					))}
				</Flex>
				<Flex
					flex-basis="33.33%"
					bg="navy.900"
					borderWidth="1px"
					borderStyle="solid"
					borderColor="cyan.500"
					borderRadius="base"
					p="20px"
					boxShadow="base"
				>
					<Img
						{...imageProps}
						layout="fixed"
						objectFit="none"
						quality={100}
						width={40}
						height={40}
					/>
					<Box flexGrow="0" color="cyan.500" ml="20px">
						{iconText}
						<ChakraLink href={iconLinkURL} color="cyan.500" display="block">
							{iconLinkText}
						</ChakraLink>
					</Box>
				</Flex>
			</Flex>
		</Link>
	);
}

export default IntroBlock;
