
import styled from "styled-components"
import numeral from 'numeral'
import { theme } from "../../styles/theme"
import { Section, Button, Line } from "../../components"
import useSWR from 'swr'
import { ApiStatsProps } from "../../pages"
import { ExchangeApiFetcher } from "../../../lib/exchange-api"

const currencyFormat = '$0,0'

const TotalSection = ({ totalLocked }: ApiStatsProps) => {
	const { data, error } = useSWR('/total-locked', ExchangeApiFetcher, { initialData: { totalLocked } })
	let stakedValue = totalLocked || 0
	console.log(data, error)
	if (data && data.totalLocked) { stakedValue = data.totalLocked }

	return (
		<TotalContainer>
				<TotalStakedBar>
					<StakedHeader>Total value locked in Synthetix</StakedHeader>
					<StakedValue>{stakedValue ? numeral(stakedValue).format(currencyFormat): 'Loading...'}</StakedValue>
				</TotalStakedBar>
				<Line />
		</TotalContainer>
	)
}

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
