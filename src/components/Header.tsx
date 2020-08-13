import styled from 'styled-components'
import { Logo, Menu } from './'


const HeaderComponent = () => {
	return (
		<Header>
			<Logo />
			<Menu />
		</Header>
	)
}

const Header = styled.header`
	height: 100px;
	width: 100%;
	padding: 0 56px;

	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

export default HeaderComponent
