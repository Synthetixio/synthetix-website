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

export const headerHeight = 100

const Header = styled.header`
	${props => props.theme.animations.show};

	animation-delay: 200ms;
	opacity: 0;
	height: ${headerHeight}px;
	width: 100%;
	padding: 0 56px;

	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

export default HeaderComponent
