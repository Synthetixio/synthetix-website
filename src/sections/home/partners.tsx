import styled from "styled-components"
import { theme } from "../../styles/theme"
import { Button, Line } from "../../components"
import { sectionMixin } from "../../components/Section"
import PFramework from '../../svg/PFramework'
import PXbto from '../../svg/PXbto'
import PHashed from '../../svg/PHashed'
import PParafi from '../../svg/PParafi'
import PThreeArrows from '../../svg/PThreeArrows'
import PDtc from '../../svg/PDtc'


const PartnersSection = () => (
	<>
	<PartnersContainer>
		<h3>Our liquidity partners</h3>
		<StyledPartners>
			<PFramework />
			<PParafi />
			<PThreeArrows />
			<PXbto />
			<PDtc />
			<PHashed />
			<Iosg src="/home/iosg.png" />
			<Spartan src="/home/spartan.png" />
		</StyledPartners>
	</PartnersContainer>
	<Line />
	</>
)

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
`

const gap = 110
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
`

const Iosg = styled.img`
	padding-top: 10px;
`
const Spartan = styled.img`
`


export default PartnersSection
