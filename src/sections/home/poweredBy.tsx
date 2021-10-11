import styled from 'styled-components';
import media from 'styled-media-query';
import { Arrow } from '../../svg';
import Section from '../../components/Section';
import { SectionTitle } from '../../styles/common';
import { useRef, useState } from 'react';

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

type CustomSliderArrow = {
	onClick: () => void;
	disabled?: boolean;
};

const ArrowWrapper = styled.button`
	cursor: pointer;
	transition: 100ms ease-in-out;
	background-color: transparent;
	border: none;

	:active:enabled {
		transform: scale(0.9);
	}

	${media.lessThan('medium')`
		display: none;
	`}
`;

function NextArrow({ onClick, disabled }: CustomSliderArrow) {
	return (
		<ArrowWrapper onClick={onClick} disabled={disabled}>
			<Arrow disabled={disabled} />
		</ArrowWrapper>
	);
}

function PrevArrow({ onClick, disabled }: CustomSliderArrow) {
	return (
		<ArrowWrapper onClick={onClick} disabled={disabled}>
			<Arrow style={{ transform: 'rotate(180deg)' }} disabled={disabled} />
		</ArrowWrapper>
	);
}

const slideMargin = 16;

const PoweredBy = () => {
	const sliderRef = useRef<HTMLDivElement>(null);
	const [accumulatedOffset, setAccumulatedOffset] = useState(0);

	/* Firefox doesn't support that out of the box */
	const doesSupportBackdropFilter = CSS.supports('backdrop-filter', 'blur(14px)');

	const handleScroll = (ltr: boolean) => {
		const ref = sliderRef.current!;
		const clientWidthWithMargin = ref.clientWidth + slideMargin;
		setAccumulatedOffset((state) => {
			const calculatedOffset = ltr ? clientWidthWithMargin + state : state - clientWidthWithMargin;
			/* If returning to the beginning or at the end: set initial value */
			if (calculatedOffset <= 0 || calculatedOffset >= ref.scrollWidth) {
				scroll(0);
				return 0;
			} else {
				scroll(calculatedOffset);
				return calculatedOffset;
			}
		});
	};

	const scroll = (offset: number) => {
		sliderRef.current
			? sliderRef.current.scroll({
					behavior: 'smooth',
					left: offset,
			  })
			: console.warn('SliderRef is undefined');
	};

	return (
		<PoweredByContainer>
			<SectionTitle>Powered by Synthetix</SectionTitle>
			<Subline>
				Learn more about the platforms built on top of the Synthetix protocol. Synthetix powers
				decentralized perpetual futures, options markets, deal coordination markets, and more.
			</Subline>
			<SliderWrapper>
				<PrevArrow onClick={() => handleScroll(false)} disabled={accumulatedOffset === 0} />
				<Slider ref={sliderRef}>
					{CARDS.Trading.map((card) => {
						return doesSupportBackdropFilter ? (
							<Slide key={card.name}>{card.name}</Slide>
						) : (
							<SlideBackDropFilterPolyfill key={card.name}>{card.name}</SlideBackDropFilterPolyfill>
						);
					})}
				</Slider>
				<NextArrow onClick={() => handleScroll(true)} />
			</SliderWrapper>
		</PoweredByContainer>
	);
};

const PoweredByContainer = styled(Section)`
	background-image: url('/home/powered-by-background.svg');
	background-position: top center;
	background-repeat: no-repeat;
	background-size: contain;
	min-height: 1050px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.bgBlackHighlighted};
	padding: 70px 100px;

	${media.lessThan('medium')`
		background-color: transparent;
		background-size: cover;
		padding: 0 8px;
	`}
`;

const Subline = styled.article`
	max-width: 700px;
	text-align: center;
`;

const SliderWrapper = styled.div`
	margin-top: 136px;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const Slider = styled.div`
	overflow: hidden;
	display: flex;
	height: 290px;
	margin: 0 16px;
	width: 1088px;

	${media.lessThan('large')`
		width: 536px;
		margin: 0 32px;
	`}

	${media.lessThan('medium')`
		overflow: scroll;
		width: 300px;
		margin: 0 32px;
	`}
`;

const Slide = styled.div`
	min-width: 260px;
	height: 289px;
	background: rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(14px);
	margin-right: ${slideMargin}px;
	:last-of-type {
		margin-right: 0px;
	}
`;

const SlideBackDropFilterPolyfill = styled.div`
	min-width: 260px;
	position: relative;
	height: 289px;
	margin-right: ${slideMargin}px;
	:last-of-type {
		margin-right: 0px;
	}

	::before {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(255, 255, 255, 0.2);
		filter: blur(3px);
	}
`;

export default PoweredBy;
