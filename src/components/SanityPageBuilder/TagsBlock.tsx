import styled from 'styled-components';
import jp from 'jsonpath';
import media from 'styled-media-query';
import Link from 'next/link';

import { theme } from '../../styles/theme';

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: unset;

	h2 {
		width: 100%;
		${theme.pageBuilder.h2};
	}
`;

const Tag = styled.div<{ color: any }>`
	border: 2px solid ${(p) => p.color};
	border-radius: 4px;
	padding: 15px;
	flex: 0 31%;
	margin: 10px 10px 10px 0px;
	display: flex;
	${media.lessThan('huge')`flex: 0 48%;`}
	${media.lessThan('large')`flex: 0 100%;`}

	:hover {
		cursor: pointer;
		filter: brightness(120%);
	}

	.box {
		width: 120px;
		height: 100px;
		background: linear-gradient(73.6deg, ${(p) => p.color} 2.11%, ${(p) => p.color} 80%);
		border-radius: 3px;
	}

	.content {
		width: fit-content;
		margin-left: 10px;
		.title {
			font-family: 'Inter';
			font-style: normal;
			font-weight: 700;
			font-size: 16px;
			line-height: 17px;
			color: #ffffff;
		}
		.intro {
		}

		.count {
			display: inline;
			position: absolute;
			vertical-align: bottom;
		}
	}
`;

const TagsBlock = ({ guideTags }: any) => {
	const allTags = jp.query(guideTags, '$..tags[*]');
	const countOccurrence = (arr: any) => {
			let uniqueArray: any = [],
				hashTable: any = {};

			arr.forEach((item: any) => {
				if (!hashTable[item.title]) {
					uniqueArray.push((hashTable[item.title] = { ...item, occurrence: 0 }));
				}
				hashTable[item.title].occurrence++;
			});

			return uniqueArray;
		},
		tags = countOccurrence(allTags);

	return (
		<Wrapper>
			<h2>Tags Collections</h2>
			{tags.map((tag: any, index: number) => (
				<Link href={`/guides/tag/${tag.slug.current}`} key={index}>
					<Tag color={tag.color.hex}>
						<div className="box"></div>
						<div className="content">
							<p className="title">{tag.title}</p>
							<p className="intro">{tag.introText}</p>
							<p className="count">{tag.occurrence} Guides</p>
						</div>
					</Tag>
				</Link>
			))}
		</Wrapper>
	);
};

export default TagsBlock;
