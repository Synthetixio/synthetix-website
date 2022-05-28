import styled from 'styled-components';
import Link from 'next/link';

const TagsWrapper = styled.div`
	clear: both;
	display: inline-block;
`;

const Tag = styled.div<{ color: any }>`
	float: left;
	border: 1px solid ${(p) => p.color.hex};
	padding: 5px 6px;
	margin-left: 5px;
	font-family: 'Inter';
	font-style: normal;
	font-weight: bold;
	font-size: 8px;
	line-height: 5px;
	text-transform: uppercase;
	border-radius: 2px;
	color: ${(p) => p.color.hex};
	background-color: ${(p) => p.color.hex}40;

	:hover {
		cursor: pointer;
		filter: brightness(160%);
	}
`;

interface TagsProps {
	tags: any;
}

export function Tags(props: TagsProps) {
	const { tags } = props;

	if (tags) {
		return (
			<TagsWrapper>
				{tags.map((tag: any, index: number) => (
					<Link key={index} href={`/guides/tag/${tag.slug.current}`}>
						<Tag color={tag.color} key={index}>
							{tag.slug.current}
						</Tag>
					</Link>
				))}
			</TagsWrapper>
		);
	} else return null;
}

export default Tags;
