import React from 'react';
import { PageBuilderChildren, PageBuilderProps } from 'pages/build/[slug]';
import { Box, Code, Heading, Image, Link, Text } from '@chakra-ui/react';
import { client } from 'src/lib/sanity';
import { useNextSanityImage } from 'next-sanity-image';

const TextComponent = ({ child }: { child: PageBuilderChildren }) => {
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
							>
								{content.children?.map(child => (
									<TextComponent child={child} />
								))}
							</Link>
						);
					}
					if (content.style.startsWith('h')) {
						return (
							<Heading as="h2" size="md">
								{content.children?.map(child => (
									<TextComponent child={child} />
								))}
							</Heading>
						);
					}
					return (
						<>
							{content.children?.map(child => (
								<Text
									as="span"
									fontStyle={child.marks[0] === 'em' ? 'italic' : 'normal'}
									color={child.marks[0] === 'highlight' ? 'cyan.500' : 'white'}
								>
									{child.text}
								</Text>
							))}
						</>
					);
				}
				if (content._type === 'image' && content.asset) {
					const imageProps = useNextSanityImage(client, content.asset._ref);
					return (
						<Image {...imageProps} w={imageProps.width} h={imageProps.height} />
					);
				}
				if (content._type === 'codeBlock') {
					return (
						<Code colorScheme="cyan" whiteSpace="pre-line">
							{content.code}
						</Code>
					);
				}

				return <></>;
			})}
		</Box>
	);
}

export default ContentBlock;
