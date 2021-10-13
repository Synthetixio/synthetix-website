import styled from 'styled-components';
import media from 'styled-media-query';
import { Arrow } from '../../svg';
import Section from '../../components/Section';
import { ExternalLink, SectionTitle, Subline } from '../../styles/common';
import { useRef, useState } from 'react';

type Card = {
	name: string;
	description: string;
	link: string;
	logo: string;
};

const CARDS: Card[] = [
	{
		name: 'Kwenta',
		description: 'Trade with up to 10x leverage and simulated liquidity for the best price fills.',
		link: 'https://kwenta.io',
		logo: '/home/powered-by/kwenta.png',
	},
	{
		name: 'Lyra',
		description: ' The first completely decentralized options protocol.',
		link: 'https://www.lyra.finance/',
		logo: '/home/powered-by/lyra.png',
	},
	{
		name: 'Thales',
		description: 'A binary options protocol for trading on price action, sports, and other events.',
		link: 'https://thales.market/',
		logo: '/home/powered-by/thales.png',
	},
	{
		name: 'Aelin',
		description: 'A deal coordination protocol built on Ethereum.',
		link: 'https://pbs.twimg.com/profile_banners/1409488511632232450/1629139136/1500x500',
		logo: '/home/powered-by/aelin.png',
	},
];

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

	${media.greaterThan('large')`
		display: none;
	`}

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
				<Slider ref={sliderRef} dir="ltr">
					{CARDS.map((card) => {
						return doesSupportBackdropFilter ? (
							<Slide key={card.name}>
								<Card href={card.link}>
									<CardImage src={card.logo} />
									<CardHeadline>{card.name}</CardHeadline>
									<p>{card.description}</p>
								</Card>
							</Slide>
						) : (
							<SlideBackDropFilterPolyfill key={card.name}>
								<Card>
									<CardImage src={card.logo} />
									<CardHeadline>{card.name}</CardHeadline>
									<p>{card.description}</p>
								</Card>
							</SlideBackDropFilterPolyfill>
						);
					})}
				</Slider>
				<NextArrow onClick={() => handleScroll(true)} />
			</SliderWrapper>
		</PoweredByContainer>
	);
};

const PoweredByContainer = styled(Section)`
	background-image: url('/home/powered-by/powered-by-background.svg');
	min-height: 1000px;
	background-position: top center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.bgBlackHighlighted};
	padding: 70px 40px;

	${media.lessThan('medium')`
		align-items: start;
		background-color: transparent;
		background-size: 300% 100% ;
		padding: 20px 40px;
		min-height: 700px;
	`}
`;

const SliderWrapper = styled.div`
	margin-top: 185px;
	display: flex;
	align-self: center;
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
		overflow: scroll hidden;
		scroll-snap-type: x mandatory;
		width: 300px;
		margin: 0 32px;
	`}

	::-webkit-scrollbar {
		height: 0px;
	}
`;

const Slide = styled.div`
	position: relative;
	min-width: 260px;
	height: 289px;
	background: rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(14px);
	margin-right: ${slideMargin}px;
	scroll-snap-align: start;
	:last-of-type {
		margin-right: 0px;
	}
`;

const SlideBackDropFilterPolyfill = styled.div`
	position: relative;
	min-width: 260px;
	height: 289px;
	margin-right: ${slideMargin}px;
	scroll-snap-align: start;
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

const Card = styled(ExternalLink)`
	/* Needs to be absolute and a high z index because of the backdrop polyfill, otherwise font is milkyish */
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 10;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	padding: 18px;

	p {
		text-align: center;
	}
`;

const CardImage = styled.img`
	width: 100%;
	height: 120px;
	margin-bottom: 16px;
`;

const CardHeadline = styled.h4`
	${({ theme }) => theme.fonts.smallHeadline};
`;

export default PoweredBy;
