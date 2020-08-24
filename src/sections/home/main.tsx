import styled from "styled-components"
import media from "styled-media-query";
import { theme } from "../../styles/theme"
import { Section, Button } from "../../components"
import { SectionDescription } from "../../components/Section"
import { headerHeight } from "../../components/Header"

const MainSection = () => (
	<MainContainer>
		<Left>
			<h1>The derivatives liquidity protocol</h1>
			<SectionDescription>Synthetix is the backbone for derivatives trading in DeFi, allowing anyone, anywhere to gain on-chain exposure to a vast range of assets.</SectionDescription>
			<LearnMoreButton link="https://docs.synthetix.io/litepaper/">Learn More</LearnMoreButton>
		</Left>
		<Right src="/home/wave.png" />
	</MainContainer>
)

const MainContainer = styled(Section)`
	${props => props.theme.animations.show};

	opacity: 0;
	animation-delay: 400ms;
	height: calc(100vh - ${headerHeight}px);
	min-height: 753px;
	display: flex;
	align-items: center;
`

const Left = styled.div`
	max-width: 397px;
	height: 364px;
	position: absolute;
	margin-top: -84px;

`

const Right = styled.img`
	width: 1406px;
	height: 444px;
	left: 348px;
	position: absolute;
	pointer-events: none;

	${media.greaterThan('1700px' as any)`
		left: auto;
		right: -100px;
	`}
`

const LearnMoreButton = styled(Button)`
	margin-top: 40px;
	width: 147px;
	height: 56px;
`

export default MainSection
