import styled from "styled-components"
import { theme } from "../../styles/theme"
import { Section, Button, Line } from "../../components"
import EarnPicture from '../../svg/Earn'

const EarnSection = () => (
	<EarnContainer>
		<Columns>
			<Left>
				<h2>earn</h2>
				<p>Make your idle funds work harder for you by fueling the Synthetix ecosystem to earn weekly rewards.</p>
				<EarnButton buttonType="secondary" link="/stake">Stake</EarnButton>
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
	min-height: 891px;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Columns = styled.div`
	width: 100%;
	height: 100%;
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
