import Link from 'next/link';
import { Badge } from '@chakra-ui/react';

export interface TagsProps {
	tags: { slug: { current: string }; color: { hex: string } }[];
}

export function Tags({ tags }: TagsProps) {
	if (tags) {
		return (
			<>
				{tags.map((tag, index: number) => (
					<Link key={index} href={`/guides/tag/${tag.slug.current}`}>
						<Badge
							variant="outline"
							fontFamily="body"
							fontSize="xs"
							textTransform="uppercase"
							color={tag.color.hex}
							borderRadius="base"
						>
							{tag.slug.current}
						</Badge>
					</Link>
				))}
			</>
		);
	}
	return null;
}

export default Tags;
