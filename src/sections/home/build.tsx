import styled from "styled-components"
import { theme } from "../../styles/theme"
import { Section, Button, Line } from "../../components"
import BuildCircle from '../../svg/BuildCircle'
import { SectionDescription } from "../../components/Section"

const BuildSection = () => (
	<BuildContainer>
		<Columns>
			<Left>
				<GlowingBuildCircle />
			</Left>
			<Right>
				<h2>build</h2>
				<SectionDescription style={{maxWidth: 360}}>Harness the deep liquidity of synthetic assets to power a new era of financial tools.</SectionDescription>
				<BuildButton buttonType="secondary" link="https://docs.synthetix.io/">Build</BuildButton>
			</Right>
		</Columns>
		<Line />
	</BuildContainer>
)

const BuildContainer = styled(Section)`
	min-height: 891px;

	display: flex;
	justify-content: center;
	align-items: center;
`

const Columns = styled.div`
	width: 100%;
	height: 100%;
	max-width: 1160px;
	margin-top: 4px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const Left = styled.div`
	position: relative;
	text-align: center;
	left: -49px;
`
const Right = styled.div`

`

const GlowingBuildCircle = styled(BuildCircle)`
	filter: drop-shadow(0px 0px 25.9037px rgba(0, 209, 255, 0.63));
`

const BuildButton = styled(Button)`
	margin-top: 40px;
	width: 147px;
	height: 56px;
`

export default BuildSection
