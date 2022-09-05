import { useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { BiSearchAlt2 } from 'react-icons/bi';
import { Modal } from '@chakra-ui/react';
import Link from 'next/link';

import { algolia } from '../../src/lib/algolia';

const Snippet = ({ highlight, attribute, hit }: any) => {
	const parsedHit = highlight({
		highlightProperty: '_snippetResult',
		attribute,
		hit,
	});

	return (
		<span>
			{parsedHit.map((part: any, index: any) =>
				part.isHighlighted ? (
					<Mark key={index}>{part.value}</Mark>
				) : (
					<span key={index}>{part.value}</span>
				)
			)}
		</span>
	);
};

// const CustomSnippet = connectHighlight(Snippet);

const SearchBox = ({ currentRefinement, refine }: any) => {
	return (
		<form noValidate action="" role="search">
			<StyledInput className={'inputWithIcon'}>
				<Input
					type="search"
					value={currentRefinement}
					onChange={(event) => refine(event.currentTarget.value)}
					placeholder="Search Content"
				/>
				<button className="left-icon">
					<IconContext.Provider value={{ color: '#ffffff', size: '20px' }}>
						<BiSearchAlt2 />
					</IconContext.Provider>
				</button>
			</StyledInput>
		</form>
	);
};

// const Results = connectStateResults(({ searchState, searchResults, children }: any) => {
// 	if (searchState.query === undefined || searchState.query === '') {
// 		return null;
// 	}
// 	return searchResults && searchResults.nbHits !== 0 && searchState.query !== '' ? (
// 		children
// 	) : (
// 		<p>Query returned no results</p>
// 	);
// });

const Hits = ({ hits }: any) => (
	<AllResults>
		<hr />
		{hits.map((hit: any) => {
			let path = `/${hit.type}/${hit.path}`;
			if (hit.type === 'guide') {
				path = `/guides/${hit.path}`;
			}
			const lastUpdated = new Date(hit.updatedAt);
			return (
				<Link key={hit.objectID} href={path}>
					<SearchResult>
						<h1>{hit.title}</h1>
						<p>{/* <CustomSnippet hit={hit} attribute="body" /> */}</p>
						<p>{hit.type}</p>
						<p>
							Last updated: {lastUpdated.getUTCDate()}/{lastUpdated.getUTCMonth() + 1}/
							{lastUpdated.getUTCFullYear()}
						</p>
					</SearchResult>
				</Link>
			);
		})}
	</AllResults>
);

// const CustomHits: any = connectHits(Hits);

// const CustomSearchBox: any = connectSearchBox(SearchBox);
// const Search = () => {
// 	const [open, setOpen] = useState(false);
// 	const onOpenModal = () => setOpen(true);
// 	const onCloseModal = () => setOpen(false);
// 	return (
// 		<>
// 			<SearchIcon onClick={onOpenModal}>
// 				<IconContext.Provider value={{ color: '#ffffff', size: '30px' }}>
// 					<BiSearchAlt2 onClick={onOpenModal} />
// 				</IconContext.Provider>
// 			</SearchIcon>

// 			<Modal
// 				open={open}
// 				onClose={onCloseModal}
// 				showCloseIcon={false}
// 				classNames={{
// 					overlay: 'customOverlay',
// 					modal: 'customModal',
// 				}}
// 			>
// 				<StyledModal>
// 					<InstantSearch searchClient={algolia} indexName="pages">
// 						<Configure
// 							attributesToSnippet={['body']}
// 							hitsPerPage={10}
// 							analytics={true}
// 							enablePersonalization={false}
// 							distinct
// 						/>
// 						<CustomSearchBox
// 							onSubmit={(event: any) => event.preventDefault()}
// 							autoFocus
// 							showLoadingIndicator
// 						/>
// 						<Results>
// 							<CustomHits onClick={onCloseModal} />
// 						</Results>
// 					</InstantSearch>
// 				</StyledModal>
// 			</Modal>
// 		</>
// 	);
// };

const SearchIcon = styled.div`
	display: inline-block;
	svg:hover {
		cursor: pointer;
		fill: #fff;
	}
`;
const StyledModal = styled.div``;

const Mark = styled.mark`
	background-color: #8e2de2;
	color: #fff;
`;

const Input = styled.input`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 21px;
	color: #ffffff;
	height: 50px;
	width: 100%;
	border: none;
	margin: 0;
	outline: none;
	padding: 8px;
	box-sizing: border-box;
	transition: 0.3s;
	padding-left: 50px;
	cursor: pointer;
	background: linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0b0b22;
	border-radius: 8px;
	}
`;

const StyledInput = styled.div`
	position: fixed;

	&.inputWithIcon {
		position: relative;
	}

	.left-icon {
		position: absolute;
		left: 5px;
		top: 50%;
		transform: translateY(-50%);
	}

	button.left-icon {
		background: none;
		border: none;
		position: absolute;
		left: 5px;
		top: 50%;
		transform: translateY(-50%);
	}
`;

const AllResults = styled.div`
	max-height: 50vh;
	border-top: 1px solid rgba(130, 130, 149, 0.3);

	hr {
		border: 1px solid rgba(130, 130, 149, 0.3);
		margin: 24px 0;
	}
`;

const SearchResult = styled.div`
	border: 1px solid rgba(130, 130, 149, 0.3);
	border-radius: 10px;
	padding: 10px;
	margin-bottom: 10px;
	cursor: pointer;
	:hover {
		background: #09091b;
		border: 1px solid rgba(130, 130, 149, 0.5);
	}

	h1 {
		font-family: 'Inter';
		font-style: normal;
		font-weight: bolder;
		font-size: 16px;
		line-height: 21px;
	}
	p {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 150%;
	}
`;

// export default Search;
