import Link from 'next/link';
import { useNextSanityImage } from 'next-sanity-image';
import { Header } from '..';
import Sidebar, { SidebarProps } from '../Sidebar';
import BuildFooter from '../Build/BuildFooter';
import Tags, { Tag } from '../Guides/Tags';
import { client } from '../../lib/sanity';
import { Flex, Heading, Text } from '@chakra-ui/react';

export interface GuideItemProps {
	icon: string;
	slug: { current: string };
	tags: Tag[];
	title: string;
	introText: string;
}
function GuideItem({ icon, slug, tags, title, introText }: GuideItemProps) {
	const imageProps = useNextSanityImage(client, icon);
	return (
		<Link href={`/guides/${slug.current}`}>
			<Flex
				cursor="pointer"
				padding="2.5"
				borderRadius="base"
				boxShadow="base"
				background="navy.900"
				my="3"
			>
				<img {...imageProps} />
				<Flex direction="column" alignItems="flex-start" gap="2" ml="3">
					<Heading size="md">{title}</Heading>
					<Text>{introText}</Text>
					<Tags tags={tags} />
				</Flex>
			</Flex>
		</Link>
	);
}

interface TagsPageLayoutProps {
	navDocs: SidebarProps['navDocs'];
	updatedAt: string;
	title: string;
	subTitle: string;
	guides: GuideItemProps[];
}

export default function TagsPageLayout({
	navDocs,
	updatedAt,
	title,
	subTitle,
	guides,
}: TagsPageLayoutProps) {
	const subMenu = {
		label: 'guides',
		navTitle: 'User Guides',
		items: navDocs,
	};

	return (
		<Flex direction="column" alignItems="center" bg="navy.900">
			<Header config={subMenu} />
			<Flex background="black" position="relative" w="100%">
				<Sidebar navDocs={navDocs} subSlug="guides" />
				<Flex direction="column" w="full" maxW="800px" m="12">
					<Heading as="h1" size="2xl">
						{title}
					</Heading>
					<Heading as="h2" size="lg">
						{subTitle}
					</Heading>

					{guides &&
						guides.map((guide, index) => (
							<GuideItem {...guide} key={title.concat(index.toString())} />
						))}
					<BuildFooter updatedAt={updatedAt} />
				</Flex>
			</Flex>
		</Flex>
	);
}
