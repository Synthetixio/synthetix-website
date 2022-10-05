import React, { ReactNode } from 'react';
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
import { Build } from 'pages/build/[slug]';
import { GuideTag } from 'pages/guides';
import { Box, Flex } from '@chakra-ui/react';

interface PageBuilderProps {
	pageBuilder: Build['pageBuilder'];
	guideTags?: GuideTag[];
}

function PageBuilder({ pageBuilder, guideTags }: PageBuilderProps) {
	return (
		<>
			{pageBuilder.map(block => {
				switch (block._type) {
					case 'mainImage':
						return (
							<Box key={block._key} minWidth="300px" width="100%">
								{block.asset?._ref && (
									<Row>
										<Column>
											<MainImage
												caption={block.caption}
												image={block.asset?._ref}
											/>
										</Column>
									</Row>
								)}
							</Box>
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
								{columns?.map(col => {
									return (
										<Column key={col._key}>
											<PageBuilder pageBuilder={[col]} />
										</Column>
									);
								})}
							</Row>
						);
					case 'tableBlock':
						if (block.table)
							return (
								<Row key={block._key}>
									<Column>
										<TableBlock table={block.table} />
									</Column>
								</Row>
							);
					case 'videoBlock':
						if (block.url) {
							return (
								<Row key={block._key}>
									<Column>
										<VideoBlock url={block.url} />
									</Column>
								</Row>
							);
						}
					case 'accordionBlock': {
						if (block.accordions?.length) {
							return (
								<Row key={block._key}>
									<AccordionBlock
										accordions={block.accordions}
										body={block.body}
									/>
								</Row>
							);
						}
					}
					case 'stepsBlock':
						if (block.style && block.steps) {
							return (
								<Row key={block._key}>
									<Column>
										<StepsBlock style={block.style} steps={block.steps} />
									</Column>
								</Row>
							);
						}
					case 'imgCarouselBlock':
						if (block.slides) {
							return (
								<Row key={block._key}>
									<ImgCarouselBlock slides={block.slides} />
								</Row>
							);
						}
					case 'guideCarouselBlock':
						return (
							<Row key={block._key}>
								<Column>
									<GuideCarouselBlock guides={block.guides} />
								</Column>
							</Row>
						);
					case 'introIconBlock':
						if (block.iconLinkText && block.iconLinkURL && block.iconText) {
							return (
								<Row key={block._key}>
									<Column>
										<IntroBlock
											body={block.body}
											icon={block.icon}
											iconLinkText={block.iconLinkText}
											iconLinkURL={block.iconLinkURL}
											iconText={block.iconText}
										/>
									</Column>
								</Row>
							);
						}
					case 'tagsBlock':
						if (guideTags) {
							return (
								<Row key={block._key}>
									<Column>
										<TagsBlock guideTags={guideTags} />
									</Column>
								</Row>
							);
						}
						return null;
					default:
						return null;
				}
			})}
		</>
	);
}

const Row = ({ children }: { children: ReactNode }) => (
	<Flex w="100%" margin="10px 0" flexWrap={{ base: 'wrap', md: 'nowrap' }}>
		{children}
	</Flex>
);

const Column = ({ children }: { children: ReactNode }) => (
	<Flex
		flexDir="column"
		flexBasis={{ base: 'auto', md: '100%' }}
		flexGrow="1"
		mr="1"
	>
		{children}
	</Flex>
);

export default PageBuilder;
