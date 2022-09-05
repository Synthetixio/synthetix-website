import styled from 'styled-components';
import Link from 'next/link';
import { Box } from '@chakra-ui/react';

const Tag = styled.div<{ color: any }>`
	float: left;
	border: 1px solid ${p => p.color.hex};
	padding: 5px 6px;
	font-family: 'Inter';
	font-style: normal;
	font-weight: bold;
	font-size: 8px;
	line-height: 5px;
	text-transform: uppercase;
	border-radius: 2px;
	color: ${p => p.color.hex};
	background-color: ${p => p.color.hex}40;

	:hover {
		cursor: pointer;
		filter: brightness(160%);
	}
`;

interface TagsProps {
	tags: { slug: { current: string }; color: string }[];
}

export function Tags({ tags }: TagsProps) {
	if (tags) {
		return (
			<Box>
				{tags.map((tag, index: number) => (
					<Link key={index} href={`/guides/tag/${tag.slug.current}`}>
						<Tag color={tag.color} key={index}>
							{tag.slug.current}
						</Tag>
					</Link>
				))}
			</Box>
		);
	}
	return null;
}

export default Tags;
