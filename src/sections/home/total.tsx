
import styled from "styled-components"
import numeral from 'numeral'
import { theme } from "../../styles/theme"
import { Section, Button, Line } from "../../components"

import { ApiStatsProps } from "../../pages"
import { ExchangeApiFetcher } from "../../../lib/exchange-api"
import media from "styled-media-query"

const currencyFormat = '$0,0'

const TotalSection = ({ totalLocked }: ApiStatsProps) => {
	return (
		<>
		<TotalContainer>
				<TotalStakedBar>
					<StakedHeader>Total value locked in Synthetix</StakedHeader>
					<StakedValue>{numeral(totalLocked).format(currencyFormat)}</StakedValue>
				</TotalStakedBar>
		</TotalContainer>
		<Line static/>
		</>
	)
}

const TotalContainer = styled(Section)`
	height: 285px;
	padding: 0;

	${media.lessThan('medium')`
		height: 206px;
		margin-top: 26px;
	`}
`

const TotalStakedBar = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const StakedHeader = styled.h3`
	font-family: GT America;
	font-weight: 900;
	font-size: 29px;
	line-height: 39px;
	text-align: center;
	text-transform: uppercase;
	font-stretch: expanded;
	color: white;

	${media.lessThan('medium')`
		font-size: 20px;
		line-height: 24px;
		max-width: 295px;
	`}
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
	background-image: linear-gradient(to right, #00D1FF 0%, #00D1FF 15%, #ED1EFF 85%, #ED1EFF 100%);

	${media.lessThan('medium')`
		margin-top: 8px;
		font-size: 28px;
		line-height: 48px;
	`}
`

export default TotalSection
