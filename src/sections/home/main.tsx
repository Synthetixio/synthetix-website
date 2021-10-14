import styled from 'styled-components';
import media from 'styled-media-query';
import { Section } from '../../components';
import { headerHeight } from '../../components/Header';
import { LearnMoreArrow } from '../../svg';

const MainSection = () => {
	const scrollToFeaturesSection = () => {
		document.querySelector('#futures')?.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<MainContainer>
			<Left>
				<h1>The derivatives liquidity protocol</h1>
				<SectionDescription>
					Synthetix is a new financial primitive enabling the creation of synthetic assets, offering
					unique derivatives and exposure to real-world assets on the blockchain.
				</SectionDescription>
				<LearnMoreButton onClick={scrollToFeaturesSection}>
					Learn More <LearnMoreArrow />
				</LearnMoreButton>
			</Left>
			<Right src="/home/snx-wave.svg" />
		</MainContainer>
	);
};

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

const SectionDescription = styled.p`
	margin-top: 18px;
	max-width: 290px;
	font-size: 14px;
	line-height: 20px;
`;

const Left = styled.div`
	max-width: 397px;
	height: 364px;
	position: absolute;
	margin-top: -84px;

	${media.lessThan('medium')`
		margin-top: 11px;
		max-width: 350px;
		height: 338px;
		position: relative;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
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

const LearnMoreButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-around;
	cursor: pointer;
	background-color: transparent;
	margin-top: 21px;
	width: 150px;
	border: 0px;
	${({ theme }) => theme.fonts.button};
	color: ${({ theme }) => theme.colors.cyan};
`;

export default MainSection;
