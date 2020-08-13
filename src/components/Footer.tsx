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
	height: 100px;
	width: 100%;
	padding: 0 56px;
	background-color: ${props => props.theme.colors.grayBlack30};

	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

export default FooterComponent
