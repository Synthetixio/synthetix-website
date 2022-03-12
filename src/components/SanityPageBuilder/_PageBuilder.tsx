import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

import ContentBlock from './ContentBlock';
import MainImage from './MainImage';

const Row = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	margin-bottom: 10px;
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
		}
	});
}

export default PageBuilder;
