import styled from "styled-components"
import { theme } from "../../styles/theme"
import { Button, Line } from "../../components"
import { sectionMixin } from "../../components/Section"

const BuildWithSynthetix = () => (
	<BuildWithContainer>
		<h2>build with synthetix</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra, turpis id scelerisque venenatis, justo nisl facilisis. Lorem ipsum dolor sit amet, consectetur</p>
	</BuildWithContainer>
)

const BuildWithContainer = styled.div`
	${sectionMixin}

	padding: 0 156px;
	min-height: 770px;

	background: linear-gradient(0deg, rgba(0, 0, 0, 0.47), rgba(0, 0, 0, 0.47)), #160654;
	text-align: center;

	h2 {
		margin-top: 101px;
	}

	& p {
		margin-left: auto;
		margin-right: auto;
		max-width: auto;
		margin-top: 10px;
		max-width: 706px;
		text-align: center;
	}
`

export default BuildWithSynthetix
