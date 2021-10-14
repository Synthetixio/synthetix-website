import styled from 'styled-components';
import { PXbto } from '../../svg';
import { PHashed } from '../../svg';
import { PParafi } from '../../svg';
import { PDtc } from '../../svg';
import { PDefiance } from '../../svg';
import media from 'styled-media-query';
import { Line, Section } from 'src/components';

const PartnersSection = () => (
	<>
		<PartnersContainer>
			<h3>Our liquidity partners</h3>
			<StyledPartners>
				<PParafi width="auto" height="150px" />
				<PThreeArrows width="auto" height="150px" src="/home/three-arrows-logo.png" />
				<PXbto width="auto" height="150px" />
				<PDtc width="auto" height="150px" />
				<PHashed width="auto" height="150px" />
				<PDefiance width="auto" height="150px" />
				<Iosg src="/home/iosg.png" width="auto" height="150px" />
				<Spartan src="/home/spartan.png" width="auto" height="150px" />
			</StyledPartners>
		</PartnersContainer>
		<Line />
	</>
);

const PartnersContainer = styled(Section)`
	min-height: 340px;
	margin-top: 40px;
	padding: 0px 271px 131px 271px;
	text-align: center;

	h3 {
		font-family: GT America;
		font-stretch: expanded;
		font-weight: 900;
		font-size: 12px;
		line-height: 48px;
		text-align: center;
		text-transform: uppercase;
		color: white;
	}

	${media.lessThan('medium')`
		padding: 40px 40px 33px 40px;
	`};
`;

const gap = 110;
const StyledPartners = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	max-width: 1400px;
	justify-content: center;
	align-items: center;

	> * {
		max-width: 200px;
	}

	${media.lessThan('medium')`
	`}
`;

const PThreeArrows = styled.img``;

const Iosg = styled.img`
	padding-top: 10px;
	width: 145px;
	${media.lessThan('medium')`
		padding-top: 0;
		width: 141px;
	`}
`;
const Spartan = styled.img``;

export default PartnersSection;
