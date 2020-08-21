import styled from "styled-components"
import { theme } from "../../styles/theme"
import { Section, Button, Line } from "../../components"
import EarnPicture from '../../svg/Earn'
import { SectionDescription } from "../../components/Section"

const EarnSection = () => (
	<EarnContainer>
		<Columns>
			<Left>
				<h2>earn</h2>
				<SectionDescription>Earn rewards by providing collateral to the Synthetix protocol.</SectionDescription>
				<EarnButton buttonType="secondary" link="https://mintr.synthetix.io">Stake</EarnButton>
			</Left>
			<Right>
				<EarnPicture />
			</Right>
		</Columns>
		<Line />
	</EarnContainer>
)

const EarnContainer = styled(Section)`
	padding: 0 163px;
	min-height: 818px;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Columns = styled.div`
	width: 100%;
	height: 100%;
	max-width: 1200px;
	margin-top: 4px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const Left = styled.div`
	position: relative;
	text-align: left;
`
const Right = styled.div`

`

const EarnButton = styled(Button)`
	margin-top: 40px;
	width: 147px;
	height: 56px;
`

export default EarnSection
