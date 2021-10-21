import { Section, Subline } from 'src/styles/common';
import styled from 'styled-components';
import media from 'styled-media-query';
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
				<LearnMoreButton onClick={scrollToFeaturesSection} data-test-id="learn-more-btn">
					Learn More <LearnMoreArrow />
				</LearnMoreButton>
			</Left>
			<Right src="/home/snx-wave.svg" />
		</MainContainer>
	);
};

const MainContainer = styled(Section)`
	${({ theme }) => theme.animations.show};
	opacity: 0;
	animation-delay: 400ms;
	height: calc(100vh - ${headerHeight}px);
	min-height: 753px;
	display: flex;
	align-items: center;
	overflow: hidden;
	padding: 0 0 0 153px;

	h1 {
		${({ theme }) => theme.fonts.headline};
	}

	${media.lessThan('medium')`
		flex-direction: column;
		height: 100%;
		min-height: 614px;
		padding: 0 24px;

		h1 {
			font-size: 32px;
			line-height: 38px;
		}
	`}
`;

const SectionDescription = styled(Subline)`
	margin-top: 18px;
	max-width: 290px;
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
	cursor: pointer;
	background-color: transparent;
	margin-top: 21px;
	width: 150px;
	border: 0px;
	padding-left: 0;
	${({ theme }) => theme.fonts.button};
	color: ${({ theme }) => theme.colors.cyan};

	:focus {
		outline: 0;
	}
	> * {
		margin-left: 8px;
	}

	${media.lessThan('medium')`
		justify-content: center;
	`}
`;

export default MainSection;
