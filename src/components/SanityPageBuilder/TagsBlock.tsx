import jp from 'jsonpath';
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import { GuideTag } from 'pages/guides';

const TagsBlock = ({ guideTags }: { guideTags: GuideTag[] }) => {
	const allTags: GuideTag[] = jp.query(guideTags, '$..tags[*]');
	const countOccurrence = (arr: GuideTag[]): GuideTag['tags'] => {
		let uniqueArray: any = [],
			hashTable: any = {};

		arr.forEach((item: any) => {
			if (!hashTable[item.title]) {
				uniqueArray.push((hashTable[item.title] = { ...item, occurrence: 0 }));
			}
			hashTable[item.title].occurrence++;
		});
		return uniqueArray;
	};
	const tags = countOccurrence(allTags);

	return (
		<Flex direction="column">
			<Heading as="h2">Tags Collections</Heading>
			<Flex>
				{tags.map((tag, index) => (
					<Link
						href={`/guides/tag/${tag.slug.current}`}
						key={tag.title.concat(index.toString())}
						m="2"
					>
						<Flex
							border={`2px solid ${tag.color.hex}`}
							borderRadius="base"
							margin="margin: 10px 10px 10px 0px"
							cursor="pointer"
							_hover={{ filter: 'brightness(120%)' }}
						>
							<Box
								className="box"
								w="120px"
								h="120px"
								background={tag.color.hex}
								borderRadius="base"
								m="2"
							></Box>
							<Flex
								w="fit-content"
								mx="10px"
								direction="column"
								justifyContent="center"
							>
								<Heading size="md">{tag.title}</Heading>
								<Text>{tag.introText}</Text>
								<Text>{tag.occurrence} Guides</Text>
							</Flex>
						</Flex>
					</Link>
				))}
			</Flex>
		</Flex>
	);
};

export default TagsBlock;
