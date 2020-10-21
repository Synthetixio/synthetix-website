import { useState } from 'react';
import { AnimateOnChange } from 'react-animation';
import Link from 'next/link';
import styled from 'styled-components';
import media from 'styled-media-query';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';

import { Arrow } from '../../svg';

import { sectionMixin, SectionDescription } from '../../components/Section';

import { ExternalLink } from '../../styles/common';
import { theme } from '../../styles/theme';
import { breakpoints } from '../../styles/media';

const getLogoURL = (logo: string) => `/home/powered-by/${logo}`;

type Card = {
	name: string;
	description: string;
	link: string;
	logo: string;
};

const CARDS: Record<string, Card[]> = {
	Trading: [
		{
			name: 'Kwenta',
			description: 'Derivatives trading with infinite liquidity.',
			link: 'https://kwenta.io',
			logo: getLogoURL('kwenta.svg'),
		},
		{
			name: 'dHedge',
			description:
				'A decentralised asset management protocol offering non-custodial mimetic trading.',
			link: 'https://dhedge.org',
			logo: getLogoURL('dhedge.svg'),
		},
		{
			name: 'ParaSwap',
			description:
				'DEX aggregator empowering dApps and traders with high liquidity and instant transactions.',
			link: 'https://paraswap.io',
			logo: getLogoURL('paraswap.svg'),
		},
		{
			name: '1inch',
			description: 'DEX aggregator and a single point of entry for DeFi.',
			link: 'https://1inch.exchange',
			logo: getLogoURL('1inch.svg'),
		},
		{
			name: 'Zapper',
			description: 'Allowing users to manage all their DeFi assets from one simple interface.',
			link: 'https://zapper.fi/',
			logo: getLogoURL('zapper.svg'),
		},
		{
			name: 'SNX.link',
			description:
				'A non-custodial portfolio management platform for Synthetix stakers and/or Synth traders.',
			link: 'https://snx.link',
			logo: getLogoURL('snx-link.svg'),
		},
		{
			name: 'Synthetix.Exchange',
			description: 'A dApp providing the most complete, permissionless trading experience in DeFi.',
			link: 'https://synthetix.exchange',
			logo: getLogoURL('sx.svg'),
		},
	],
	'Synth Liquidity': [
		{
			name: 'Curve',
			description:
				'An exchange liquidity pool on Ethereum (like Uniswap) designed for stablecoins.',
			link: 'https://www.curve.fi',
			logo: getLogoURL('curve.svg'),
		},
		{
			name: 'Uniswap',
			description: 'A protocol for trading and automated liquidity provision on Ethereum.',
			link: 'https://uniswap.exchange',
			logo: getLogoURL('uniswap.svg'),
		},
	],
	Staking: [
		{
			name: 'xSNX',
			description: 'A managed fund protocol allowing set-and-forget exposure to SNX staking.',
			link: 'https://xtoken.market',
			logo: getLogoURL('xsnx.svg'),
		},
		{
			name: 'SNX Tools',
			description:
				'A suite of tools and features to automate, institutionalize and streamline the process flows for stakers or traders.',
			link: 'https://snx.tools/',
			logo: getLogoURL('snx-tools.svg'),
		},
	],
};

const TABS_SECTIONS = Object.keys(CARDS);

type CustomSliderArrow = {
	className: string;
	onClick: () => void;
};

function NextArrow({ className, onClick }: CustomSliderArrow) {
	return (
		<div className={className} onClick={onClick}>
			<Arrow />
		</div>
	);
}

function PrevArrow({ className, onClick }: CustomSliderArrow) {
	return (
		<div className={className} onClick={onClick}>
			<Arrow style={{ transform: 'rotate(180deg)' }} />
		</div>
	);
}

const slideShowBreakpoints = {
	sm: 880,
	md: 1250,
};

const PoweredBy = () => {
	const [tab, setTab] = useState(TABS_SECTIONS[0]);

	const currentCards = CARDS[tab].map((card) => (
		<Link href={card.link} passHref={true} key={card.name}>
			<CardA>
				<Card key={card.name}>
					<LogoContainer>
						<CardLogo src={card.logo} />
					</LogoContainer>
					<CardGradient />
					<CardTitle>{card.name}</CardTitle>
					<CardDescription>{card.description}</CardDescription>
					<CardLink>Visit {card.name}</CardLink>
				</Card>
			</CardA>
		</Link>
	));

	const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${breakpoints.md}px)` });

	return (
		<PoweredByContainer>
			<h2>Powered by Synthetix</h2>
			<SectionDescription style={{ maxWidth: 706, padding: '0 59px' }}>
				Many platforms, projects, and interfaces are already using the derivatives liquidity enabled
				by Synthetix.
			</SectionDescription>

			<Tabs>
				{TABS_SECTIONS.map((t) => (
					<Tab key={t} active={t === tab} onClick={() => setTab(t)}>
						{t}
					</Tab>
				))}
			</Tabs>

			<AnimateOnChange>
				<Cards>
					{currentCards.length > 3 ? (
						isTabletOrMobile ? (
							currentCards
						) : (
							<SliderContainer>
								<Slider
									dots={false}
									infinite={false}
									slidesToScroll={1}
									slidesToShow={3}
									// @ts-ignore
									nextArrow={<NextArrow />}
									// @ts-ignore
									prevArrow={<PrevArrow />}
									responsive={[
										{
											breakpoint: slideShowBreakpoints.md,
											settings: {
												slidesToShow: 2,
											},
										},
										{
											breakpoint: slideShowBreakpoints.sm,
											settings: {
												slidesToShow: 1,
											},
										},
									]}
								>
									{currentCards}
								</Slider>
							</SliderContainer>
						)
					) : (
						currentCards
					)}
				</Cards>
			</AnimateOnChange>
		</PoweredByContainer>
	);
};

interface TabProps {
	active: boolean;
}

const PoweredByContainer = styled.div`
	${sectionMixin}

	h2 {
		margin-top: 95px;
	}

	& > p {
		margin-left: auto;
		margin-right: auto;
		max-width: auto;
		margin-top: 10px;
		max-width: 706px;
		text-align: center;
	}

	${media.lessThan('medium')`
		padding: 0 20px 56px 20px;

		h1, h2 {
			font-size: 32px;
			line-height: 38px;
			margin-top: 60px;
			padding: 0 59px;
		}
	`};

	padding: 0;
	min-height: 770px;

	/* background: linear-gradient(0deg, rgba(0, 0, 0, 0.47), rgba(0, 0, 0, 0.47)), #160654; */
	background-image: url('/home/bg-grid-mobile.svg');

	text-align: center;

	${media.lessThan('medium')`
		min-height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	`}
`;

const Tabs = styled.ul`
	display: flex;
	justify-content: center;
	margin: 61px auto 0 auto;
	max-width: 546px;
	text-align: center;

	${media.lessThan('medium')`
		width: 339px;
		max-width: 339px;
	`}
`;
const Tab = styled.li<TabProps>`
	${theme.fonts.tab};

	${media.lessThan('medium')`
		font-size: 12px;
		line-height: 48px;
		margin-right: 18px;
	`}
	margin-right: 77px;

	&:last-child {
		margin-right: 0;
	}
`;

const Cards = styled.div`
	margin-top: 72px;

	display: flex;
	align-items: center;
	justify-content: center;

	${media.lessThan('medium')`
		margin-top: 48px;
		flex-direction: column;
	`};
`;

const Card = styled.div`
	width: 360px;
	height: 298px;
	position: relative;
	padding: 24px 0;

	background: #1c1c3d;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);

	${media.lessThan('medium')`
		width: 310px;
	`}
`;

const CardA = styled(ExternalLink)`
	display: block;
	margin-right: 24px;

	&:last-child {
		margin-right: 0;
	}

	/* transition: transform 0.3s ease-out;

	&:hover {
		transform: translateY(-4px);
	} */

	${media.lessThan('medium')`
		margin-right: 0;
		margin-bottom: 30px;

		&:last-child {
			margin-bottom: 0;
		}
	`}
`;

const CardGradient = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 6px;
	background: linear-gradient(88.63deg, #00d1ff -14.83%, #ed1eff 108.22%);
`;

const LogoContainer = styled.div`
	width: 80px;
	height: 80px;

	border-radius: 100%;
	position: relative;
	margin: 14px auto 0 auto;
	background: rgba(255, 255, 255, 0.12);
	overflow: hidden;

	display: flex;
	align-items: center;
	justify-content: center;
`;

const CardLogo = styled.img`
	max-width: 64px;
	max-height: 64px;
	object-fit: contain;
`;

const CardTitle = styled.h4`
	${(props) => props.theme.fonts.smallHeadline};

	text-align: center;
	margin-top: 27px auto 0 auto;
`;

const CardDescription = styled.p`
	margin: -4px auto 0 auto;
	text-align: center;
	max-width: 290px;
`;

const CardLink = styled.p`
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

	color: #00d1ff;
`;

const SliderContainer = styled.div`
	max-width: 1176px;
	@media (max-width: ${slideShowBreakpoints.md}px) {
		max-width: 790px;
	}
	@media (max-width: ${slideShowBreakpoints.sm}px) {
		max-width: 400px;
	}
	.slick-list {
		margin-left: 20px;
	}
	.slick-prev:before {
		display: none;
	}
	.slick-next:before {
		display: none;
	}
	.slice-arrow {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.slick-disabled {
		svg {
			opacity: 0.5;
			cursor: default;
		}
	}
	* {
		outline: none;
	}
`;

export default PoweredBy;
