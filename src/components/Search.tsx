import { useState } from 'react';
import {
	Box,
	Divider,
	Flex,
	Heading,
	IconButton,
	Input,
	InputGroup,
	InputLeftAddon,
	Modal,
	ModalContent,
	ModalOverlay,
	Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import {
	InstantSearch,
	connectSearchBox,
	connectHits,
	Configure,
	connectHighlight,
	connectStateResults,
} from 'react-instantsearch-dom';
import { algolia } from '../../src/lib/algolia';
import { SearchIcon } from '@chakra-ui/icons';

const Snippet = ({ highlight, attribute, hit }: any) => {
	const parsedHit = highlight({
		highlightProperty: '_snippetResult',
		attribute,
		hit,
	});

	return (
		<>
			{parsedHit.map(
				(part: { value: string; isHighlighted: boolean }, index: any) =>
					part.isHighlighted ? (
						<Text as="mark" key={index} bg="purple.500" display="inline">
							{part.value}
						</Text>
					) : (
						<Text key={index} display="inline">
							{part.value}
						</Text>
					),
			)}
		</>
	);
};

const CustomSnippet = connectHighlight(Snippet);

const SearchBox = ({ currentRefinement, refine }: any) => {
	return (
		<form noValidate action="" role="search">
			<InputGroup>
				<InputLeftAddon>
					<SearchIcon />
				</InputLeftAddon>
				<Input
					variant="unstyled"
					bg="whiteAlpha.100"
					p="2"
					type="search"
					value={currentRefinement}
					onChange={event => refine(event.currentTarget.value)}
					placeholder="Search Content"
				/>
			</InputGroup>
		</form>
	);
};

const Results = connectStateResults(
	({ searchState, searchResults, children }: any) => {
		if (searchState.query === undefined || searchState.query === '') {
			return null;
		}
		return searchResults &&
			searchResults.nbHits !== 0 &&
			searchState.query !== '' ? (
			children
		) : (
			<Text>Query returned no results</Text>
		);
	},
);

const Hits = ({ hits }: any) => (
	<Flex direction="column" p="2">
		{hits.map((hit: any) => {
			let path = `/${hit.type}/${hit.path}`;
			if (hit.type === 'guide') {
				path = `/guides/${hit.path}`;
			}
			const lastUpdated = new Date(hit.updatedAt);
			return (
				<>
					<Link key={hit.objectID} href={path}>
						<Box
							borderWidth="1px"
							borderStyle="solid"
							borderColor="gray.900"
							borderRadius="md"
							p="2"
							my="2"
							cursor="pointer"
						>
							<Heading size="md">{hit.title}</Heading>
							<CustomSnippet hit={hit} attribute="body" />
							<Text textTransform="capitalize">{hit.type}</Text>
							<Text>
								Last updated: {lastUpdated.getUTCDate()}/
								{lastUpdated.getUTCMonth() + 1}/{lastUpdated.getUTCFullYear()}
							</Text>
						</Box>
					</Link>
					<Divider color="gray.900" />
				</>
			);
		})}
	</Flex>
);

const CustomHits: any = connectHits(Hits);

const CustomSearchBox: any = connectSearchBox(SearchBox);
const Search = () => {
	const [open, setOpen] = useState(false);
	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);
	return (
		<>
			<IconButton
				aria-label="search"
				icon={<SearchIcon onClick={onOpenModal} cursor="pointer" />}
				variant="unstyled"
			/>

			<Modal isOpen={open} onClose={onCloseModal}>
				<ModalOverlay />
				<ModalContent bg="transparent">
					<Box bg="navy.900" p="5" borderRadius="lg" boxShadow="base">
						<InstantSearch searchClient={algolia} indexName="pages">
							<Configure
								attributesToSnippet={['body']}
								hitsPerPage={10}
								analytics={true}
								enablePersonalization={false}
								distinct
							/>
							<CustomSearchBox
								onSubmit={(event: any) => event.preventDefault()}
								autoFocus
								showLoadingIndicator
							/>
							<Results>
								<CustomHits onClick={onCloseModal} />
							</Results>
						</InstantSearch>
					</Box>
				</ModalContent>
			</Modal>
		</>
	);
};

export default Search;
