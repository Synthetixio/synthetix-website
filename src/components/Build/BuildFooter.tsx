import styled from 'styled-components';
import media from 'styled-media-query';
import { useRouter } from 'next/router'
import { ButtonCard } from '@synthetixio/ui';

import { Line } from 'src/styles/common';
import { OrderedDoc } from './BuildPageLayout';


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

interface BuildFooterProps {
	nextDoc?: OrderedDoc;
	prevDoc?:OrderedDoc;
	updatedAt:string;
};

export default function BuildFooter({nextDoc, prevDoc, updatedAt}: BuildFooterProps) {
	const lastUpdated = new Date(updatedAt);

	const router = useRouter();
	const handleClick = (path: string) => router.push(path);

	return (

		<BuildFooterContainer>
			{prevDoc && 
				<Box style={{'marginRight': '3px'}} onClick={(e) => handleClick(prevDoc.slug.current)}>
					<Row>
						<ButtonCard
						arrowDirection="left"
						headline={prevDoc.title}
						subline={prevDoc.cat}
					/>
					</Row>
				</Box>
			}
			{nextDoc && 
				<Box style={{'marginLeft': '3px'}} onClick={(e) => handleClick(nextDoc.slug.current)}>
					<Row>
						<ButtonCard
						arrowDirection="right"
						headline={nextDoc.title}
						subline={nextDoc.cat}
					/>
					</Row>
				</Box>
			}
	
			<Line showOnMobile />
			<Updated>Last updated: {lastUpdated.getUTCDate()}/{lastUpdated.getUTCMonth()+1}/{lastUpdated.getUTCFullYear()}</Updated>
		
		</BuildFooterContainer>
		
					
	);
}
