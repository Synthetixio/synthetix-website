import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

import ContentBlock from './ContentBlock';
import MainImage from './MainImage';
import TableBlock from './TableBlock';
import VideoBlock from './VideoBlock';
import AccordionBlock from './AccordionBlock';
import StepsBlock from './StepsBlock';
import ImgCarouselBlock from './ImgCarouselBlock';
import IntroBlock from './IntroBlock';
import GuideCarouselBlock from './GuideCarouselBlock';
import TagsBlock from './TagsBlock';
import { theme } from '../../styles/theme';

const Row = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	${theme.pageBuilder.rows};
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 100%;
	flex: 1;
	margin-right: 10px;
	${media.lessThan('medium')`
		flex: 1 1 auto;
	`};
`;

function PageBuilder(props: any) {
	const { pageBuilder } = props;
	const { guideTags = null } = props;
	//console.log(guideTags);

	return pageBuilder.map((block: any, index: number) => {
		switch (block._type) {
			case 'mainImage':
				return (
					<Row key={block._key}>
						<Column>
							<MainImage props={block} />
						</Column>
					</Row>
				);
			case 'contentBlock':
				return (
					<Row key={block._key}>
						<Column>
							<ContentBlock block={block} />
						</Column>
					</Row>
				);
			case 'pageBuilderColumns':
				const columns = block.columns;
				return (
					<Row key={block._key}>
						{columns.map((col: any) => {
							return (
								<Column key={col._key}>
									<PageBuilder pageBuilder={[col]} />
								</Column>
							);
						})}
					</Row>
				);
			case 'tableBlock':
				return (
					<Row key={block._key}>
						<Column>
							<TableBlock props={block} />
						</Column>
					</Row>
				);
			case 'videoBlock':
				return (
					<Row key={block._key}>
						<Column>
							<VideoBlock props={block} />
						</Column>
					</Row>
				);
			case 'accordionBlock':
				return (
					<Row key={block._key}>
						<Column>
							<AccordionBlock props={block} />
						</Column>
					</Row>
				);
			case 'stepsBlock':
				return (
					<Row key={block._key}>
						<Column>
							<StepsBlock props={block} />
						</Column>
					</Row>
				);
			case 'imgCarouselBlock':
				return (
					<Row key={block._key}>
						<Column>
							<ImgCarouselBlock props={block} />
						</Column>
					</Row>
				);
			case 'guideCarouselBlock':
				return (
					<Row key={block._key}>
						<Column>
							<GuideCarouselBlock props={block} />
						</Column>
					</Row>
				);
			case 'introIconBlock':
				return (
					<Row key={block._key}>
						<Column>
							<IntroBlock props={block} />
						</Column>
					</Row>
				);
			case 'tagsBlock':
				if (guideTags) {
					return (
						<Row key={block._key}>
							<Column>
								<TagsBlock guideTags={guideTags} props={block} />
							</Column>
						</Row>
					);
				}
		}
	});
}

export default PageBuilder;
