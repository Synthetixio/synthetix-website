import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { theme } from '@synthetixio/v3-theme';
import Link from 'next/link';

export default function SideBarItem({
	subSlug,
	docs,
	title,
}: {
	subSlug: string;
	docs: { slug: { _type: 'slug'; current: string }; title: string }[];
	title: string;
}) {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const currentSlug = router.query.slug;
		docs.forEach(doc => {
			if (doc.slug.current === currentSlug) {
				setIsOpen(true);
			}
		});
	}, [docs, router]);

	return (
		<Flex direction="column" alignItems="center" justifyContent="center" mt="4">
			<Flex
				onClick={() => setIsOpen(!isOpen)}
				alignItems="center"
				justifyContent="space-between"
				cursor="pointer"
				w="100%"
			>
				<Heading
					size="md"
					bgGradient={isOpen ? theme.gradients['green-cyan'][500] : ''}
					backgroundClip={isOpen ? 'text' : ''}
					style={{ WebkitTextFillColor: isOpen ? 'transparent' : '' }}
				>
					{title}
				</Heading>
				{isOpen ? (
					<ChevronUpIcon color={isOpen ? theme.colors.cyan[500] : ''} />
				) : (
					<ChevronDownIcon color={isOpen ? theme.colors.cyan[500] : ''} />
				)}
			</Flex>
			{isOpen && (
				<Box as="ul">
					{docs.map((doc, i) => (
						<Box
							as="li"
							key={i.toString().concat(doc.title)}
							listStyleType="none"
							my="16px"
						>
							<Link href={`/${subSlug}/${doc.slug.current}`} passHref>
								<a>
									<Text
										color="gray.500"
										bgGradient={
											doc.slug.current === router.query.slug
												? theme.gradients['green-cyan'][500]
												: ''
										}
										backgroundClip={
											doc.slug.current === router.query.slug ? 'text' : ''
										}
										style={{
											WebkitTextFillColor:
												doc.slug.current === router.query.slug
													? 'transparent'
													: '',
										}}
										_hover={{
											bgGradient: theme.gradients['green-cyan'][500],
											backgroundClip: 'text',
											WebkitTextFillColor: 'transparent',
										}}
									>
										{doc.title}
									</Text>
								</a>
							</Link>
						</Box>
					))}
				</Box>
			)}
		</Flex>
	);
}
