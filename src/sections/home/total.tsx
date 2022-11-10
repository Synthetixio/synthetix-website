import styled from 'styled-components';
import numeral from 'numeral';
import { Section, SectionTitle } from '../../styles/common';
import { ApiStatsProps } from '../../../pages';
import media from 'styled-media-query';

const currencyFormat = '$0,0';

const TotalSection = ({ totalStakedValue }: ApiStatsProps) => {
	if (!totalStakedValue) {
		// If we missing data here don't render the section
		return null;
	}
	return (
		<TotalContainer>
			<TotalStakedBar>
				<StakedHeader>Total value staked</StakedHeader>
				<StakedValue>
					{totalStakedValue
						? numeral(totalStakedValue).format(currencyFormat)
						: '--'}
				</StakedValue>
			</TotalStakedBar>
		</TotalContainer>
	);
};

const TotalContainer = styled(Section)`
	height: 285px;
	padding: 0;

	${media.lessThan('medium')`
		height: 206px;
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

const StakedHeader = styled(SectionTitle)`
	// This one is special in the design flow
	font-size: 29px;
	line-height: 39px;
	margin: 0px;
	${media.lessThan('medium')`
		max-width: 295px;
		font-size: 20px;
		text-align: center;
		line-height: 24px;
	`}
`;

const StakedValue = styled.span`
	font-family: GT America;
	font-weight: 900;
	font-size: 64px;
	height: 72px;
	line-height: 80px;
	font-stretch: expanded;
	text-align: center;
	text-transform: uppercase;
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	text-fill-color: transparent;
	background-image: linear-gradient(
		to right,
		#00d1ff 0%,
		#00d1ff 15%,
		#ed1eff 85%,
		#ed1eff 100%
	);

	${media.lessThan('medium')`
		margin-top: 8px;
		font-size: 28px;
		line-height: 48px;
	`}
`;

export default TotalSection;
