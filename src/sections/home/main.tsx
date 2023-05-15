import { ArrowDownIcon } from '@chakra-ui/icons';
import { PageTitle, Section, Subline } from 'src/styles/common';
import SNXWave from 'src/svg/SNXWave';
import styled from 'styled-components';
import media from 'styled-media-query';
import { headerHeight } from '../../components/Header';

const MainSection = () => {
	const scrollToFeaturesSection = () => {
		document.querySelector('#futures')?.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<MainContainer>
			<Left>
				<PageTitle>The derivatives liquidity protocol</PageTitle>
				<SectionDescription>
					Synthetix is a new financial primitive enabling the creation of
					synthetic assets, offering unique derivatives and exposure to
					real-world assets on the blockchain.
				</SectionDescription>
				<LearnMoreButton
					onClick={scrollToFeaturesSection}
					data-test-id="learn-more-btn"
				>
					Learn More <ArrowDownIcon />
				</LearnMoreButton>
			</Left>
			<Right />
		</MainContainer>
	);
};

const MainContainer = styled(Section)`
	margin-top: 60px;
	position: relative;
	${({ theme }) => theme.animations.show};
	opacity: 0;
	animation-delay: 400ms;
	height: calc(100vh - ${headerHeight}px);
	min-height: 753px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	overflow: hidden;
	padding: 0 0 0 153px;

	${media.lessThan('medium')`
		flex-direction: column;
		justify-content: flex-start;
		height: auto;
		padding: 0 24px;
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

const Right = styled(SNXWave)`
	position: absolute;
	pointer-events: none;
	height: 100%;
	width: 150%;

	${media.greaterThan('huge')`
		right: -20px;
		width: 85%;
		left: auto;
	`}

	${media.lessThan('large')`
		width: 1606px;
		left: auto;
	`}

	${media.lessThan('medium')`
		bottom: 100px;

		height: 300px;
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
	${({ theme }) => theme.fonts.largeButton};
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
