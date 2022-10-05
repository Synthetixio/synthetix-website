import React from 'react';
import { PageBuilderProps } from 'pages/build/[slug]';
import {
	Alert,
	AspectRatio,
	Box,
	Code,
	Heading,
	Image,
	Link,
	ListItem,
	OrderedList,
	UnorderedList,
} from '@chakra-ui/react';
import { PortableText } from '@portabletext/react';
import { client } from 'src/lib/sanity';
import { useNextSanityImage } from 'next-sanity-image';

export const TextComponent = ({
	body,
	ptImage,
	pbImage,
}: {
	body: PageBuilderProps['body'];
	ptImage?: string;
	pbImage?: string;
}) => {
	return (
		<PortableText
			value={body}
			components={{
				types: {
					image: ({ value }: Record<'value', Record<'asset', string>>) => {
						const imageProps = useNextSanityImage(client, value.asset);
						if (imageProps) {
							return (
								<Image
									src={imageProps.src}
									w="624px"
									h="auto"
									pt={ptImage}
									pb={pbImage}
								/>
							);
						}
						return null;
					},
					codeBlock: ({ value }) => {
						return (
							<Code
								colorScheme="black"
								whiteSpace="pre-line"
								key={value.code}
								bg="black"
								p="4"
								w="100%"
							>
								{value.code}
							</Code>
						);
					},
				},
				block: {
					blockquote: ({ children }) => (
						<Alert borderInlineStartStyle="solid" colorScheme="cyan" my="2">
							{children}
						</Alert>
					),
					h4: ({ children }) => (
						<Heading as="h4" fontSize="lg">
							{children}
						</Heading>
					),
				},
				list: {
					bullet: ({ children }) => <UnorderedList>{children}</UnorderedList>,
					number: ({ children }) => (
						<OrderedList className="mt-lg">{children}</OrderedList>
					),
				},
				listItem: {
					bullet: ({ children }) => <ListItem>{children}</ListItem>,
					checkmarks: ({ children }) => <ListItem>{children}</ListItem>,
				},
				marks: {
					link: ({ children, value }) => {
						const rel = !value.href.startsWith('/')
							? 'noreferrer noopener'
							: undefined;
						return (
							<Link href={value.href} rel={rel} color="cyan.500">
								{children}
							</Link>
						);
					},
				},
			}}
		/>
	);
};

function ContentBlock({ block }: { block: PageBuilderProps }) {
	return (
		<Box whiteSpace="pre-line">
			<Heading as="h2" size="md" mb="3">
				{block.title}
			</Heading>
			<TextComponent body={block.body} ptImage="6" pbImage="6" />
		</Box>
	);
}

export default ContentBlock;
