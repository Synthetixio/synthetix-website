
import styled from "styled-components"
import numeral from 'numeral'
import { theme } from "../../styles/theme"
import { Section, Button, Line } from "../../components"

const currencyFormat = '$0,0'
const stakedValue = 435603623

const TotalSection = () => (
	<TotalContainer>
			<TotalStakedBar>
				<StakedHeader>TOTAL VALUE LOCKED IN SYNTHETIX</StakedHeader>
				<StakedValue>{numeral(stakedValue).format(currencyFormat)}</StakedValue>
			</TotalStakedBar>
			<Line />
	</TotalContainer>
)

const TotalContainer = styled(Section)`
	height: 285px;
	padding: 0;
`

const TotalStakedBar = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const StakedHeader = styled.h2`
	font-family: GT America;
	font-weight: 900;
	font-size: 29px;
	line-height: 39px;
	text-align: center;
	text-transform: uppercase;
	font-stretch: expanded;
	color: white;
`

const StakedValue = styled.span`
	font-family: GT America;
	font-weight: 900;
	font-size: 72px;
	height: 72px;
	line-height: 48px;
	font-stretch: expanded;
	text-align: center;
	text-transform: uppercase;
	background-clip: text;
	margin-top: 21px;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	text-fill-color: transparent;
	background-image: linear-gradient(to right, #00D1FF 0%, #ED1EFF 100%);
`

export default TotalSection
