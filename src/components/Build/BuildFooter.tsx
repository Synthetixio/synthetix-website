import styled from 'styled-components';
import media from 'styled-media-query';
import { IconContext } from 'react-icons';
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from 'react-icons/io';
import { useRouter } from 'next/router'
import TimeAgo from 'javascript-time-ago'
import ReactTimeAgo from 'react-time-ago'
import en from 'javascript-time-ago/locale/en.json'

import { Line } from 'src/styles/common';

TimeAgo.addDefaultLocale(en)

const BuildFooterContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	justify-content: center;

	background-color: #10104e;
	padding: 20px 30px;
`;

interface ColTextProps{
	right?: boolean;
}


const ColText = styled.div<ColTextProps>`
	display: flex;
	flex-direction: column;
	flex-basis: 100%;
	flex: 1;
	margin-right: 10px;
	align-items: right;
	justify-content: center;
	align-items: ${props => props.right ? "flex-end" : "normal"};
	${media.lessThan('medium')`
		flex: 1 1 auto;
	`};

	.cat {
		font-family: Inter;
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		text-transform: uppercase;
		color: #FFFFFF;
	}
	.heading{
		font-family: Inter;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 24px;
		text-transform: capitalize;
		color: #FFFFFF;
	}
`;

interface ColIconProps{
	right?: boolean;
}
const ColIcon = styled.div<ColIconProps>`
	display: flex;
	flex-direction: column;
	flex-basis: 100%;
	flex: 1;
	margin-right: 10px;
	align-items: right;
	justify-content: center;
	align-items: ${props => props.right ? "flex-end" : "normal"};
	max-width: 30px;
	${media.lessThan('medium')`
		flex: 1 1 auto;
	`};
`;

const Box = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 100%;
	flex: 1;
	margin-right: 10px;
	padding: 3px;
	background: linear-gradient(90deg, #ED1EFF 0%, #00D1FF 100%);
	border-radius: 5px;
	height: fit-content;
	margin-bottom: 20px;
	${media.lessThan('large')`
		flex: 1 1 2000px;
	`};

	:hover{
		cursor: pointer; 
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
				<Box onClick={(e) => handleClick(e, prevDoc.slug.current)}>
					<Row>
						<ColIcon> 
							<IconContext.Provider value={{ color: '#00D1FF', size: '30px' }}>
								<IoMdArrowRoundBack />
							</IconContext.Provider>
						</ColIcon>
						<ColText right>
							<span className="cat">{prevDoc.cat}</span>
							<span className="heading">{prevDoc.title}</span>
						</ColText>
					</Row>
				</Box>
			: null}
			{nextDoc ? 
				<Box onClick={(e) => handleClick(e, nextDoc.slug.current)}>
					<Row>
						<ColText>
						<span className="cat">{nextDoc.cat}</span>
							<span className="heading">{nextDoc.title}</span>
						</ColText>
						<ColIcon right> 
							<IconContext.Provider value={{ color: '#00D1FF', size: '30px' }}>
								<IoMdArrowRoundForward />
							</IconContext.Provider>
						</ColIcon>
					</Row>
				</Box>
			: null}
	
			<Line showOnMobile />
			<Updated>Last updated  <ReactTimeAgo date={lastUpdated} locale="en-US"/></Updated>
		
		</BuildFooterContainer>
		
					
	);
}
