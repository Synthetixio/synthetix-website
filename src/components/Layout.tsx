import styled from 'styled-components'
import { Header, Footer } from '.'

const Layout = ({ children } : { children: React.ReactNode }) => {
	return (
		<LayoutContainer>
			<ContentContainer>
				<Header />
				<Container>
					{children}
				</Container>
			</ContentContainer>
			<BgGradient />
			<Footer />
		</LayoutContainer>
	)
}

const LayoutContainer = styled.div`
	position: relative;
`

const ContentContainer = styled.div`
	position: relative;
	z-index: 10;
`

const BgGradient = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 1021px;
	background: linear-gradient(180deg, #08021E 0%, #120446 146.21%);
	pointer-events: none;
	z-index: 5;
`

const Container = styled.div`
	min-height: 100vh;
	padding: 0 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export default Layout
