import styled from "styled-components"
import { theme } from "../../styles/theme"
import { Button, Line } from "../../components"
import { sectionMixin } from "../../components/Section"

const PoweredBy = () => (
	<PoweredByContainer>
		<h2>Powered by Synthetix</h2>
		<p>Many platforms, projects, and interfaces are already using the derivatives liquidity enabled by Synthetix.</p>
	</PoweredByContainer>
)

const PoweredByContainer = styled.div`
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

export default PoweredBy
