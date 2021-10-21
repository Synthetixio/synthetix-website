import styled from 'styled-components';
import media from 'styled-media-query';
import { Arrow } from '../../svg';
import { ExternalLink, Section, SectionTitle, Subline } from '../../styles/common';
import { useRef, useState } from 'react';

type PoweredByCards = {
	name: string;
	description: string;
	link: string;
	logo: string;
};

const poweredByCards: PoweredByCards[] = [
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
		link: 'https://discord.com/invite/YHffnV9sUM',
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

function NextArrow({ onClick }: CustomSliderArrow) {
	return (
		<ArrowWrapper onClick={onClick}>
			<Arrow />
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
			<PoweredBySectionTitle>Powered by Synthetix</PoweredBySectionTitle>
			<PoweredBySubline>
				Learn more about the platforms built on top of the Synthetix protocol. Synthetix powers
				decentralized perpetual futures, options markets, deal coordination markets, and more.
			</PoweredBySubline>
			<SliderWrapper>
				<PrevArrow
					onClick={() => handleScroll(false)}
					disabled={accumulatedOffset === 0}
					data-test-id="slider-arrow-prev"
				/>
				<Slider ref={sliderRef} dir="ltr" data-test-id="powered-by-slider">
					{poweredByCards.map((card) => {
						return doesSupportBackdropFilter ? (
							<Slide key={card.name} data-test-id="powered-by-slide">
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
				<NextArrow onClick={() => handleScroll(true)} data-test-id="slider-arrow-next" />
			</SliderWrapper>
		</PoweredByContainer>
	);
};

const PoweredByContainer = styled(Section)`
	background-image: url('/home/powered-by/background.svg');
	min-height: 1000px;
	position: relative;
	background-position: top center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.bgBlackHighlighted};
	padding: 70px 40px 30px;

	${media.lessThan('medium')`
		background-image: url('/home/powered-by/background-tablet.svg');
		align-items: start;
		background-color: transparent;
		padding: 20px 40px;
		min-height: 700px;
	`}

	${media.lessThan('550px' as any)`
		background-image: url('/home/powered-by/background-mobile.svg');
		background-size: cover;
`}
`;

const PoweredBySectionTitle = styled(SectionTitle)`
	width: 100%;
	text-align: center;
	margin-bottom: 12px;
`;

const PoweredBySubline = styled(Subline)`
	max-width: 700px;
	text-align: center;
`;

const SliderWrapper = styled.div`
	margin-top: 185px;
	display: flex;
	align-self: center;
	align-items: center;
	justify-content: space-around;

	${media.lessThan('medium')`
		margin-top: 0px;
		padding-top: 135px;
 `}
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
		margin: 0 32px;
		width: 538px;
	`}

	${media.lessThan('550px' as any)`
		width: 100vw;
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

	${media.lessThan('medium')`
	scroll-snap-align: center;
		:first-of-type {
			margin-left: 20px;
		}
		:last-of-type {
			margin-right: 20px;
		}
	`}
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
		background: rgba(22, 22, 106, 0.8);
		filter: blur(1px);
	}

	${media.lessThan('medium')`
	scroll-snap-align: center;
		:first-of-type {
			margin-left: 20px;
		}
		:last-of-type {
			margin-right: 20px;
		}
	`}
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
		${({ theme }) => theme.fonts.subline};
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
