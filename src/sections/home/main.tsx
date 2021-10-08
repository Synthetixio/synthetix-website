import styled from 'styled-components';
import media from 'styled-media-query';
import { Section, Button } from '../../components';
import { SectionDescription } from '../../components/Section';
import { headerHeight } from '../../components/Header';

const MainSection = () => (
	<MainContainer>
		<Left>
			<h1>The derivatives liquidity protocol</h1>
			<SectionDescription main={true}>
				Synthetix is the backbone for derivatives trading in DeFi, allowing anyone, anywhere to gain
				on-chain exposure to a vast range of assets.
			</SectionDescription>
			<LearnMoreButton link="https://docs.synthetix.io/litepaper/">Learn More</LearnMoreButton>
		</Left>
		<Right src="/home/snx-wave.svg" />
	</MainContainer>
);

const MainContainer = styled(Section)`
	${(props) => props.theme.animations.show};

	opacity: 0;
	animation-delay: 400ms;
	height: calc(100vh - ${headerHeight}px);
	min-height: 753px;
	display: flex;
	align-items: center;
	overflow: hidden;
	padding: 0 0 0 153px;

	${media.lessThan('medium')`
		flex-direction: column;
		height: 100%;
		min-height: 614px;
		padding: 0 24px;
	`}
`;

const Left = styled.div`
	max-width: 397px;
	height: 364px;
	position: absolute;
	margin-top: -84px;

	${media.lessThan('medium')`
		margin-top: 11px;
		max-width: 295px;
		height: 338px;
		position: relative;
		text-align: center;
	`}
`;

const Right = styled.img`
	width: 1406px;
	height: 444px;
	left: 148px;
	position: absolute;
	pointer-events: none;

	${media.greaterThan('1350px' as any)`
		width: 81%;
		height: 31vw;
		left: auto;
		right: 0;
	`}

	${media.lessThan('medium')`
		left: -15%;
		margin-top: 26px;
		position: relative;
		height: 272px;
	`}
`;

const LearnMoreButton = styled(Button)`
	margin-top: 40px;
	width: 147px;
	height: 56px;

	${media.lessThan('medium')`
		margin-top: 30px;
	`}
`;

export default MainSection;
