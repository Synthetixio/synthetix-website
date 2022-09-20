import React from 'react';
import { PageBuilderChildren, PageBuilderProps } from 'pages/build/[slug]';
import { Box, Code, Heading, Image, Link, Text } from '@chakra-ui/react';
import { client } from 'src/lib/sanity';
import { useNextSanityImage } from 'next-sanity-image';

export const TextComponent = ({ child }: { child: PageBuilderChildren }) => {
	return (
		<Text
			as="span"
			fontStyle={
				child.marks?.length && child.marks[0] === 'em' ? 'italic' : 'normal'
			}
			color={
				child.marks?.length && child.marks[0] === 'highlight'
					? 'cyan.500'
					: 'white'
			}
		>
			{child.text}
		</Text>
	);
};

function ContentBlock({ block }: { block: PageBuilderProps }) {
	console.log(block);
	// TODO @DEV add support for bullet list
	return (
		<Box whiteSpace="pre-line">
			<Heading as="h2" size="md" mb="3">
				{block.title}
			</Heading>
			{block.body?.map(content => {
				if (content._type === 'block') {
					if (content.markDefs[0]?.href) {
						return (
							<Link
								href={content.markDefs[0].href}
								color="cyan.500"
								textDecoration="underline"
								key={content._key}
							>
								{content.children?.map(child => (
									<TextComponent child={child} key={child._key} />
								))}
							</Link>
						);
					}
					if (content.style.startsWith('h')) {
						return (
							<Heading as="h2" size="md" key={content._key}>
								{content.children?.map(child => (
									<TextComponent child={child} key={child._key} />
								))}
							</Heading>
						);
					}
					return (
						<Box key={content._key}>
							{content.children?.map(child => (
								<TextComponent key={child._key} child={child} />
							))}
						</Box>
					);
				}
				if (content._type === 'image' && content.asset) {
					const imageProps = useNextSanityImage(client, content.asset._ref);
					return (
						<Image
							src={imageProps.src}
							w={imageProps.width}
							h={imageProps.height}
							key={imageProps.src}
						/>
					);
				}
				if (content._type === 'codeBlock') {
					return (
						<Code colorScheme="cyan" whiteSpace="pre-line" key={content.code}>
							{content.code}
						</Code>
					);
				}

				return null;
			})}
		</Box>
	);
}

export default ContentBlock;
