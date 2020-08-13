import styled from 'styled-components'
import { Logo, Menu } from './'


const FooterComponent = () => {
	return (
		<Footer>
			<Logo small={true} />
			<Menu />
		</Footer>
	)
}

const Footer = styled.footer`
	height: 159px;
	width: 100%;
	padding: 0 114px 0 56px;
	background-color: ${props => props.theme.colors.bgBlack};

	display: flex;
	align-items: center;
	justify-content: space-between;
	border-top: 1px solid rgba(255, 255, 255, 0.1);
`

export default FooterComponent
