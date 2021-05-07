import styled from 'styled-components';
import { Section, Button, Line } from '../../components';
import { SectionDescription } from '../../components/Section';
import media from 'styled-media-query';

const SynthSection = () => (
	<SynthContainer>
		<SynthGraphic src="home/illustration_synths.svg" />
		<Right>
			<h2>Synthetic Assets</h2>
			<SectionDescription>
				Capture the price movements of popular cryptopcurrencies, fiat currencies, stocks,
				commodities and more with zero slippage.
				<br />
				<br />
				Synthetic assets or Synths, are assets voted into existence by the community which represent
				the price of different types of assets.
			</SectionDescription>
			<BuildButton buttonType="secondary" link="/synths" external={false}>
				Explore Synths
			</BuildButton>
		</Right>
		<Line />
	</SynthContainer>
);

const SynthContainer = styled(Section)`
	${(props) => props.theme.animations.show};

	opacity: 0;
	animation-delay: 400ms;
	height: 100vh;
	min-height: 753px;
	display: flex;
	align-items: center;
	overflow: hidden;

	${media.lessThan('medium')`
		flex-direction: column-reverse;
		height: 634px;
		min-height: 634px;
		margin: 80px 0px;
		height: 100%;
`}

	${media.greaterThan('1350px' as any)`
		padding: 0 0 0 153px;
	`}
`;

const Right = styled.div`
	max-width: 400px;
	height: 364px;
	position: absolute;
	right: 0;
	margin-right: 50px;
	margin-top: -84px;

	${media.greaterThan('1350px' as any)`
		margin-right: 175px;
	`}

	${media.lessThan('medium')`
		position: relative;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		margin-top: 60px;

		p {
			text-align: center;
			max-width: 100%;
		}

		br {
			margin: 8px 0px;
		}
	`}
`;

const SynthGraphic = styled.img`
	height: 444px;
	position: absolute;
	left: -250px;
	pointer-events: none;

	${media.greaterThan('1350px' as any)`
		height: 35vw;
		left: -120px;
		right: auto;
	`}

	${media.lessThan('medium')`
		position: relative;
		width: 1000px;
		height: auto;
		margin: auto;
		margin-top: 26px;
		margin-bottom: 42px;
	`}

	${media.lessThan('small')`
		position: relative;
		width: 650px;
		height: auto;
		margin: auto;
		margin-top: 42px;
		margin-bottom: 64px;
	`}
`;

const BuildButton = styled(Button)`
	margin-top: 54px;
	width: 147px;
	height: 56px;
`;

export default SynthSection;
