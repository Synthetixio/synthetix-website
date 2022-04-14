import styled from 'styled-components';

const TagsWrapper = styled.div`
	clear: both;
	display: inline-block;
`;

const Tag = styled.div<{ color: any }>`
	float: left;
	border: 1px solid ${(p) => p.color.hex};
	padding: 5px;
	margin-left: 5px;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 8px;
	text-transform: uppercase;
	color: ${(p) => p.color.hex};
	background-color: ${(p) => p.color.hex}40;
`;

interface TagsProps {
	tags: any;
}

export function Tags(props: TagsProps) {
	const { tags } = props;
	//console.log(tags);

	if (tags) {
		return (
			<TagsWrapper>
				{tags.map((tag: any, index: number) => (
					<Tag color={tag.color} key={index}>
						{tag.slug.current}
					</Tag>
				))}
			</TagsWrapper>
		);
	} else return null;
}

export default Tags;
