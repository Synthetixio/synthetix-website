import styled from 'styled-components';
import media from 'styled-media-query';
import { useRouter } from 'next/router'
import TimeAgo from 'javascript-time-ago'
import ReactTimeAgo from 'react-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import { ButtonCard } from '@synthetixio/ui';

import { Line } from 'src/styles/common';

TimeAgo.addDefaultLocale(en)

const BuildFooterContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	display: flex;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	justify-content: center;

`;


const Box = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 100%;
	flex: 1;
	margin: 5px;

	span {
		font-family: Inter;
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		text-transform: uppercase;
		color: #828295;
	}
	h3{
		font-family: Inter;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 24px;
		text-transform: capitalize;
		color: #FFFFFF;
	}
	
	${media.lessThan('large')`
		flex: 1 1 2000px;
	`};

	:hover {
		cursor: pointer;
		filter: brightness(120%);
	}
`;

const Updated = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;
	font-style: italic;
`;

type BuildFooterProps<T> = {
	nextDoc: any
	prevDoc: any
	updatedAt: any
};

export default function BuildFooter<T>(props: BuildFooterProps<T>) {
	const { nextDoc, prevDoc, updatedAt } = props;
	const lastUpdated = new Date(updatedAt);

	const router = useRouter();
	const handleClick = (e:any, path:any) => {
		router.push(path);
	};

	return (

		<BuildFooterContainer>
			{prevDoc ? 
				<Box onClick={(e) => handleClick(e, nextDoc.slug.current)}>
					<Row>
						<ButtonCard
						arrowDirection="left"
						headline={prevDoc.title}
						subline={prevDoc.cat}
					/>
					</Row>
				</Box>
			: null}
			{nextDoc ? 
				<Box onClick={(e) => handleClick(e, nextDoc.slug.current)}>
					<Row>
						<ButtonCard
						arrowDirection="right"
						headline={nextDoc.title}
						subline={nextDoc.cat}
					/>
					</Row>
				</Box>
			: null}
	
			<Line showOnMobile />
			<Updated>Last updated  <ReactTimeAgo date={lastUpdated} locale="en-US"/></Updated>
		
		</BuildFooterContainer>
		
					
	);
}
