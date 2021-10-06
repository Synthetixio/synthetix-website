import styled from 'styled-components';
import { Section, Button, Line } from '../../components';
import { SectionDescription } from '../../components/Section';
import media from 'styled-media-query';

const EarnSection = () => (
	<EarnContainer>
		<Columns>
			<Left>
				<h2>earn</h2>
				<SectionDescription>
					Earn rewards by providing collateral to the Synthetix protocol.
				</SectionDescription>
				<EarnButton buttonType="secondary" link="https://staking.synthetix.io">
					Stake
				</EarnButton>
			</Left>
			<Right />
		</Columns>
		<Line />
	</EarnContainer>
);

const EarnContainer = styled(Section)`
	padding: 0 163px;
	min-height: 818px;
	display: flex;
	justify-content: center;
	align-items: center;

	${media.lessThan('large')`
		padding: 0 76px;
	`}

	${media.lessThan('medium')`
		min-height: 781px;
	`}
`;

const Columns = styled.div`
	width: 100%;
	height: 100%;
	max-width: 1200px;
	margin-top: 4px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	${media.lessThan('medium')`
		flex-direction: column-reverse;
		justify: center;
		margin-top: 0
	`}
`;

const Left = styled.div`
	position: relative;
	text-align: left;

	${media.lessThan('medium')`
		text-align: center;
		margin-top: 75px;
	`}
`;
const Right = styled.div`
	width: 658px;
	height: 605px;
	background-size: contain;
	background-position: center center;
	background-image: url('/home/earn.svg');
	background-repeat: no-repeat;

	${media.lessThan('medium')`
		max-height: 307px;
	`}
`;

const EarnButton = styled(Button)`
	margin-top: 54px;
	width: 147px;
	height: 56px;

	${media.lessThan('medium')`
		left: auto;
	`}
`;

export default EarnSection;
