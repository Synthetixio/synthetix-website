import styled from "styled-components"
import { theme } from "../../styles/theme"
import { Button, Line } from "../../components"
import { sectionMixin } from "../../components/Section"
import { useState } from "react"

import { AnimateOnChange } from 'react-animation'
import Link from "next/link"

const CARDS = {
	Trading: [{
		name: 'dHedge',
		description: 'A decentralised asset management protocol offering non-custodial mimetic trading',
		linkLabel: 'Visit dHedge',
		link: 'https://www.dhedge.org/',
		logo: '/home/dHedge-logo.png'
	}, {
		name: 'Curve',
		description: 'An exchange liquidity pool on Ethereum (like Uniswap) designed for: 1) extremely efficient asset trading; and 2) low risk, supplemental fee income for liquidity providers, without an opportunity cost.',
		linkLabel: 'Visit Curve',
		link: 'https://www.curve.fi/',
		logo: '/home/curve-logo.svg'
	}],
	Staking: [{
		name: 'xSNX',
		description: 'A managed fund protocol allowing set-and-forget exposure to SNX staking.',
		linkLabel: 'Visit xToken',
		link: 'https://xtoken.market/',
		logo: '/home/xSNX-logo.png',
	}],
	Analytics: [{
		name: 'SNX Tools',
		description: 'A suite of tools and features to automate, institutionalize and streamline the process flows for stakers, traders or anyone looking to better understand the health of and activity on Synthetix.',
		linkLabel: 'Visit SNX Tools',
		link: 'https://snx.tools',
		logo: '/home/snx-tools-logo.png'
	}, {
		name: 'SNX.link',
		description: 'A non-custodial portfolio management platform for Synthetix stakers and/or Synth traders',
		linkLabel: 'Visit SNX.link',
		link: 'https://snx.link',
		logo: '/home/snx-link-logo.png'
	}]
}
const PoweredBy = () => {
	const [tab, setTab] = useState(Object.keys(CARDS)[0])

	const currentCards = CARDS[tab]
	return (
		<PoweredByContainer>
			<h2>Powered by Synthetix</h2>
			<p>Many platforms, projects, and interfaces are already using the derivatives liquidity enabled by Synthetix.</p>

			<Tabs>
				{Object.keys(CARDS).map(t => <Tab key={t} active={t === tab} onClick={() => setTab(t)}>{t}</Tab>)}
			</Tabs>

			<AnimateOnChange>
				<Cards>
						{currentCards.map(card => (
							<Card>
								<LogoContainer><CardLogo src={card.logo} /></LogoContainer>
								<CardGradient />
								<CardTitle>{card.name}</CardTitle>
								<CardDescription>{card.description}</CardDescription>
								<Link href={card.link} passHref={true}><CardLink target="_blank">{card.linkLabel}</CardLink></Link>
							</Card>
						))}

				</Cards>
			</AnimateOnChange>
		</PoweredByContainer>
	)
}

interface TabProps {
	active: boolean
}

const PoweredByContainer = styled.div`
	${sectionMixin}

	padding: 0 156px;
	min-height: 770px;

	background: linear-gradient(0deg, rgba(0, 0, 0, 0.47), rgba(0, 0, 0, 0.47)), #160654;
	text-align: center;

	h2 {
		margin-top: 101px;
	}

	& > p {
		margin-left: auto;
		margin-right: auto;
		max-width: auto;
		margin-top: 10px;
		max-width: 706px;
		text-align: center;
	}
`

const Tabs = styled.ul`
	display: flex;
	justify-content: center;
	margin: 74px auto 0 auto;
	max-width: 546px;
	text-align: center;
`

const Tab = styled.li<TabProps>`
	${theme.fonts.tab};

	margin-right: 77px;

	&:last-child {
		margin-right: 0;
	}
`

const Cards = styled.div`
	margin-top: 72px;

	display: flex;
	align-items: center;
	justify-content: center;
`

const Card = styled.div`
	width: 360px;
	height: 298px;
	position: relative;

	background: #1C1C3D;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
	margin-right: 24px;

	&:last-child {
		margin-right: 0
	}
`

const CardGradient = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 6px;
	background: linear-gradient(88.63deg, #00D1FF -14.83%, #ED1EFF 108.22%);
`

const LogoContainer = styled.div`
	width: 80px;
	height: 80px;

	border-radius: 100%;
	position: relative;
	margin: 34px auto 0 auto;

`

const CardLogo = styled.img`
	width: 80px;
	height: 80px;
	object-fit: contain;
`

const CardTitle = styled.h4`
	${props => props.theme.fonts.smallHeadline};

	text-align: center;
	margin-top: 7px auto 0 auto;
`

const CardDescription = styled.p`
	margin: -4px auto 0 auto;
	text-align: center;
	max-width: 290px;
`

const CardLink = styled.a`
	position: absolute;
	text-align: center;

	bottom: 14px;
	left: 0;
	right: 0;

	font-family: GT America;
	font-stretch: condensed;
	font-weight: bold;
	font-size: 14px;
	line-height: 24px;

	text-align: center;
	text-transform: uppercase;

	color: #00D1FF;
`

export default PoweredBy
