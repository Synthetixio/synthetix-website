import styled from 'styled-components';
import { Section, Button, Line } from '../../components';
import { SectionDescription } from '../../components/Section';
import media from 'styled-media-query';

const SynthSection = () => (
	<SynthContainer>
		<Columns>
			<Left>
				<SynthGraphic />
			</Left>
			<Right>
				<h2>Synthetic Assets</h2>
				<SectionDescription style={{ maxWidth: 360 }}>
					Capture the price movements of popular cryptopcurrencies, fiat currencies, stocks,
					commodities and more with zero slippage.
					<br />
					Synthetic assets or Synths, are assets voted into existence by the community which
					represent the price of different types of assets.
				</SectionDescription>
				<BuildButton buttonType="secondary" link="https://docs.synthetix.io/">
					Explore
				</BuildButton>
			</Right>
		</Columns>
		<Line />
	</SynthContainer>
);

const SynthContainer = styled(Section)`
	min-height: 891px;

	display: flex;
	justify-content: center;
	align-items: center;

	${media.lessThan('large')`
		padding: 0 76px;
		min-height: 742px;
	`}
`;

const Columns = styled.div`
	width: 100%;
	height: 100%;
	max-width: 1160px;
	margin-top: 4px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	${media.lessThan('medium')`
		flex-direction: column;
		margin-top: 40px;
		justify-content: flex-start;
	`}
`;

const Left = styled.div`
	position: relative;
	text-align: center;
	left: -49px;
	${media.lessThan('large')`
		left: -89px;
	`}
	${media.lessThan('medium')`
		left: auto;
		position: relative;
	`}
`;
const Right = styled.div`
	${media.lessThan('large')`
		margin-left: -49px;
	`}

	${media.lessThan('medium')`
		margin-left: 0;
		text-align: center;
		margin-top: 58px;
		margin-bottom: 80px;
	`}
`;

const SynthGraphic = styled.div`
	width: 984px;
	height: 469px;
	background-size: cover;
	background-position: left left;
	background-image: url('/home/synths-graphic.svg');
	background-repeat: no-repeat;

	${media.lessThan('medium')`
	background-image: url('/home/synths-graphic.svg');

		height: 298px;
		width: 298px;
	`}
`;

const BuildButton = styled(Button)`
	margin-top: 54px;
	width: 147px;
	height: 56px;
`;

export default SynthSection;
