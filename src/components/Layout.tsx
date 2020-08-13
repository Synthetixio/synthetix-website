import styled from 'styled-components'

const Layout = ({children}) => {
	return (
		<Container>
			{children}
		</Container>
	)
}

const Container = styled.div`
	min-height: 100vh;
	padding: 0 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export default Layout
