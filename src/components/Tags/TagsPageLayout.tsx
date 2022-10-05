import { Header } from '..';
import Sidebar, { SidebarProps } from '../Sidebar';
import BuildFooter from '../Build/BuildFooter';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { PageBuilderProps } from 'pages/build/[slug]';
import Link from 'next/link';
import Tags from '../Guides/Tags';

interface TagsPageLayoutProps {
	navDocs: SidebarProps['navDocs'];
	updatedAt: string;
	title: string;
	subTitle: string;
	guides: PageBuilderProps['guides'];
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
			<Flex position="relative" w="100%">
				<Sidebar navDocs={navDocs} subSlug="guides" />
				<Flex direction="column" w="full" maxW="800px" m="12" borderWidth="1px">
					<Heading as="h1" size="xl" mb="2">
						{title}
					</Heading>
					<Heading as="h2" size="lg" mb="2">
						{subTitle}
					</Heading>

					{guides &&
						guides.map((guide, index) => (
							<Box
								key={title.concat(index.toString())}
								borderColor="gray.900"
								borderStyle="solid"
								borderWidth="1px"
								my="2"
							>
								<Link
									href={`/guides/${guide.slug.current}`}
									style={{ margin: '10px' }}
								>
									<Flex
										direction="column"
										alignItems="center"
										textAlign="center"
										bg="navy.900"
										boxShadow="base"
										borderRadius="base"
										p="24px"
										cursor="pointer"
										_hover={{ filter: 'brightness(120%)' }}
										w="100%"
										overflowY="scroll"
									>
										<Tags tags={guide.tags} />
										<Text fontWeight="bold" my="2">
											{guide.title}
										</Text>
										<Text>{guide.introText}</Text>
									</Flex>
								</Link>
							</Box>
						))}
					<BuildFooter updatedAt={updatedAt} />
				</Flex>
			</Flex>
		</Flex>
	);
}
