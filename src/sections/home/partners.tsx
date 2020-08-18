import styled from "styled-components"
import { theme } from "../../styles/theme"
import { Button, Line } from "../../components"
import { sectionMixin } from "../../components/Section"
import Partners from '../../svg/Partners'

const PartnersSection = () => (
	<PartnersContainer>
		<h3>our Liquidity Partners</h3>
		<StyledPartners />
	</PartnersContainer>
)

const PartnersContainer = styled.div`
	${sectionMixin}

	min-height: 340px;
	padding: 79px 271px 131px 271px;

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

const StyledPartners = styled(Partners)`
	margin-top: 28px;
`


export default PartnersSection
