import styled from 'styled-components';
import { Line } from '../../components';
import { sectionMixin } from '../../components/Section';
import PXbto from '../../svg/PXbto';
import PHashed from '../../svg/PHashed';
import PParafi from '../../svg/PParafi';
import PDtc from '../../svg/PDtc';
import PDefiance from '../../svg/PDefiance';
import media from 'styled-media-query';

const PartnersSection = () => (
	<>
		<PartnersContainer>
			<h3>Our liquidity partners</h3>
			<StyledPartners>
				<PParafi />
				<PThreeArrows src="/home/three-arrows-logo.png" />
				<PXbto />
				<PDtc />
				<PHashed />
				<PDefiance />
				<Iosg src="/home/iosg.png" />
				<Spartan src="/home/spartan.png" />
			</StyledPartners>
		</PartnersContainer>
		<Line />
	</>
);

const PartnersContainer = styled.div`
	${sectionMixin}

	min-height: 340px;
	padding: 79px 271px 131px 271px;
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
		padding: 184px 40px 33px 40px;
	`};
`;

const gap = 110;
const StyledPartners = styled.div`
	width: 100%;
	display: inline-flex;
	margin: -20px 0 0 -${gap}px;
	width: calc(100% + ${gap}px);
	flex-wrap: wrap;
	max-width: 1400px;

	justify-content: center;
	align-items: center;

	img {
		object-fit: cover;
		max-width: 240px;
		max-height: 57px;
	}

	> * {
		margin: 48px 0 0 ${gap}px;
	}

	${media.lessThan('medium')`
		display: flex;
		flex-direction: column;
		max-width: auto;
		width: auto;
		margin: 31px 0 0 0;

		img {
			max-width: 233px;
			max-height: 54px;
		}

		> * {
			margin: 0 0 53px 0;

			&:l

		}

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
