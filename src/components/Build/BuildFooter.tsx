import { useRouter } from 'next/router';
import { Line } from 'src/styles/common';
import { OrderedDoc } from './BuildPageLayout';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

interface BuildFooterProps {
	nextDoc?: OrderedDoc;
	prevDoc?: OrderedDoc;
	updatedAt: string;
}

export default function BuildFooter({
	nextDoc,
	prevDoc,
	updatedAt,
}: BuildFooterProps) {
	const lastUpdated = new Date(updatedAt);

	const router = useRouter();
	const handleClick = (path: string) => router.push(path);

	return (
		<Box as="footer">
			<Flex
				mt="20px"
				w="100%"
				flexWrap={{ base: 'wrap', md: 'nowrap' }}
				justifyContent="center"
				gap="4"
				mb="4"
			>
				{prevDoc && (
					<Box
						style={{ marginRight: '3px' }}
						onClick={() => handleClick(prevDoc.slug.current)}
						w="100%"
					>
						<ButtonCard
							arrowDirection="left"
							headline={prevDoc.title}
							subline={prevDoc.cat}
						/>
					</Box>
				)}
				{nextDoc && (
					<Box
						w="100%"
						style={{ marginLeft: '3px' }}
						onClick={() => handleClick(nextDoc.slug.current)}
					>
						<ButtonCard
							arrowDirection="right"
							headline={nextDoc.title}
							subline={nextDoc.cat}
						/>
					</Box>
				)}
			</Flex>
			<Line showOnMobile />
			<Text fontStyle="italic" my="20px">
				Last updated: {lastUpdated.getUTCDate()}/{lastUpdated.getUTCMonth() + 1}
				/{lastUpdated.getUTCFullYear()}
			</Text>
		</Box>
	);
}

const ButtonCard = ({
	arrowDirection,
	headline,
	subline,
}: {
	arrowDirection: 'left' | 'right';
	headline: string;
	subline: string;
}) => {
	return (
		<Box bg="linear-gradient(#ED1EFF, #00D1FF)" p="1px" borderRadius="base">
			<Flex
				flexDirection="column"
				px="10"
				py="4"
				w="100%"
				bg="navy.900"
				borderRadius="base"
				position="relative"
			>
				<Text textAlign={arrowDirection === 'left' ? 'end' : 'start'}>
					{subline}
				</Text>
				{arrowDirection === 'left' ? (
					<ArrowLeftIcon
						position="absolute"
						left="8px"
						top="50%"
						transform="translateY(-50%)"
					/>
				) : (
					<ArrowRightIcon
						position="absolute"
						right="8px"
						top="50%"
						transform="translateY(-50%)"
					/>
				)}
				<Heading
					size="md"
					textAlign={arrowDirection === 'left' ? 'end' : 'start'}
				>
					{headline}
				</Heading>
			</Flex>
		</Box>
	);
};
