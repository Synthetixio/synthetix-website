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
import { GuideTags } from 'pages/guides';
import { Flex } from '@chakra-ui/react';

interface PageBuilderProps {
	pageBuilder: Build['pageBuilder'];
	guideTags?: GuideTags[];
}

function PageBuilder({ pageBuilder, guideTags }: PageBuilderProps) {
	return (
		<>
			{pageBuilder.map(block => {
				switch (block._type) {
					case 'mainImage':
						return (
							<>
								{block.caption ||
									(block.asset?._ref && (
										<Row key={block._key}>
											<Column>
												<MainImage
													caption={block.caption}
													image={block.asset?._ref}
												/>
											</Column>
										</Row>
									))}
							</>
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
											<PageBuilder pageBuilder={[col as any]} />
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
							<>
								{block.accordions?.length && (
									<Row key={block._key}>
										<Column>
											<AccordionBlock
												accordions={block.accordions}
												body={block.body}
											/>
										</Column>
									</Row>
								)}
							</>
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
								<ImgCarouselBlock props={block} />
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
						return <></>;
					default:
						return <></>;
				}
			})}
		</>
	);
}

const Row = ({ children }: { children: ReactNode }) => (
	<Flex flexWrap="wrap" w="100%" margin="10px 0">
		{children}
	</Flex>
);

const Column = ({ children }: { children: ReactNode }) => (
	<Flex
		flexDir="column"
		flexBasis={{ base: 'auto', md: '100%' }}
		flexGrow="1"
		mr="10px"
	>
		{children}
	</Flex>
);

export default PageBuilder;
