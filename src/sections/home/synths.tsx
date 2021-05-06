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
				Synthetic assets or Synths, are assets voted into existence by the community which represent
				the price of different types of assets.
			</SectionDescription>
			<BuildButton buttonType="secondary" link="/synths" external={false}>
				Explore
			</BuildButton>
		</Right>

		<Line />
	</SynthContainer>
);

const SynthContainer = styled(Section)`
	min-height: 891px;

	display: flex;
	justify-content: center;
	align-items: center;

	${media.lessThan('large')`
		min-height: 750px;
		flex-direction: column-reverse;
		justify-content: center;
		
	`}
`;

const Right = styled.div`
	position: absolute;
	right: -100px;
	width: 50%;

	${media.lessThan('large')`
		right: 140px;
		max-width: 200px;
	`}

	${media.lessThan('medium')`
		position: relative;
		text-align: center;
		right: 0px;
		width: 100%;
		margin: 48px 0px;
	`}
`;

const SynthGraphic = styled.img`
	position: absolute;
	left: 0px;
	height: auto;
	width: 50%;

	${media.lessThan('large')`
		width: 65%;
		right: 0;
	`}

	${media.lessThan('medium')`
		position: relative;
		width: 100%;
		right: auto;
		margin: 48px 0px;

	`}
`;

const BuildButton = styled(Button)`
	margin-top: 54px;
	width: 147px;
	height: 56px;
`;

export default SynthSection;
