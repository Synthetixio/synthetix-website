import styled from "styled-components"
import { theme } from "../../styles/theme"
import { Section, Button } from "../../components"

const MainSection = () => (
	<MainContainer>
		<Left>
			<Title>THE DERIVATIVES LIQUIDITY PROTOCOL</Title>
			<Description>Synthetix is a protocol that enables developers to tokenize assets and indexes across industries in order to construct an ecosystem of unstoppable financial tools.</Description>
			<LearnMoreButton link="/learn-more">Learn More</LearnMoreButton>
		</Left>
		<Right src="/home/wave.png" />
	</MainContainer>
)

const MainContainer = styled(Section)`
	min-height: 1200px;
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
`

const Title = styled.h1`
	text-decoration: uppercase;
	${theme.fonts.headline}
`

const Description = styled.p`
	margin-top: 15px;
	margin-left: 2px;
`

const LearnMoreButton = styled(Button)`
	margin-top: 40px;
	width: 147px;
	height: 56px;
`

export default MainSection
