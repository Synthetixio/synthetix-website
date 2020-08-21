import styled from "styled-components"
import { theme } from "../../styles/theme"
import { Section, Button } from "../../components"

const MainSection = () => (
	<MainContainer>
		<Left>
			<h1>The derivatives liquidity protocol</h1>
			<p>Synthetix is the backbone for derivatives trading in DeFi, allowing anyone, anywhere to gain on-chain exposure to a vast range of assets.</p>
			<LearnMoreButton link="/learn-more">Learn More</LearnMoreButton>
		</Left>
		<Right src="/home/wave.png" />
	</MainContainer>
)

const MainContainer = styled(Section)`
	${props => props.theme.animations.show};

	opacity: 0;
	animation-delay: 400ms;
	min-height: 753px;
`

const Left = styled.div`
	max-width: 397px;
	height: 364px;
	position: absolute;
	top: 134px;

`

const Right = styled.img`
	width: 1406px;
	height: 444px;
	left: 348px;
	top: 144px;
	position: absolute;
	pointer-events: none;
`

const LearnMoreButton = styled(Button)`
	margin-top: 40px;
	width: 147px;
	height: 56px;
`

export default MainSection
