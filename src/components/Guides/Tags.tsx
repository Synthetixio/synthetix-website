import { Badge, Flex } from '@chakra-ui/react';

export interface Tag {
	slug: { current: string };
	color: { hex: string };
}

interface TagsProps {
	tags: Tag[];
}

export function Tags(props: TagsProps) {
	if (props.tags.length) {
		return (
			<Flex justifyContent="center" w="100%">
				{props.tags.map(tag => (
					<Badge
						variant="outline"
						fontFamily="body"
						fontSize="xs"
						textTransform="uppercase"
						color={tag.color.hex}
						borderRadius="base"
						mx="1"
					>
						{tag.slug.current}
					</Badge>
				))}
			</Flex>
		);
	}
	return null;
}

export default Tags;
