import styled from 'styled-components';
import numeral from 'numeral';
import { Section } from '../../components';

import { ApiStatsProps } from '../../../pages';
import media from 'styled-media-query';

const currencyFormat = '$0,0';

const TotalSection = ({ totalLocked }: ApiStatsProps) => {
	return (
		<>
			<TotalContainer>
				<TotalStakedBar>
					<StakedHeader>Total value locked in Synthetix</StakedHeader>
					<StakedValue>
						{totalLocked ? numeral(totalLocked).format(currencyFormat) : '--'}
					</StakedValue>
				</TotalStakedBar>
			</TotalContainer>
		</>
	);
};

const TotalContainer = styled(Section)`
	height: 285px;
	padding: 0;

	${media.lessThan('medium')`
		height: 206px;
		margin-top: 26px;
	`}
`;

const TotalStakedBar = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const StakedHeader = styled.h3`
	font-family: GT America;
	font-style: normal;
	font-weight: 900;
	font-size: 32px;
	line-height: 48px;
	text-align: center;
	text-transform: uppercase;
	font-stretch: expanded;
	color: white;

	${media.lessThan('medium')`
		font-size: 16px;
		line-height: 20px;
		max-width: 295px;
	`}
`;

const StakedValue = styled.span`
	font-family: GT America;
	font-weight: 900;
	font-size: 72px;
	height: 72px;
	line-height: 48px;
	font-stretch: expanded;
	text-align: center;
	text-transform: uppercase;
	background-clip: text;
	margin-top: 21px;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	text-fill-color: transparent;
	background-image: linear-gradient(to right, #00d1ff 0%, #00d1ff 15%, #ed1eff 85%, #ed1eff 100%);

	${media.lessThan('medium')`
		margin-top: 8px;
		font-size: 28px;
		line-height: 48px;
	`}
`;

export default TotalSection;
