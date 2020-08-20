import styled from 'styled-components'
import { Logo, Menu, Socials } from './'

const FooterComponent = () => {
	return (
		<Footer>
			<Left>
				<Logo small={true} />
			</Left>
			<Right>
				<Menu />
				<FooterSocials />
			</Right>
		</Footer>
	)
}

const Footer = styled.footer`
	height: 159px;
	width: 100%;
	padding: 0 66px 0 114px;
	background-color: ${props => props.theme.colors.bgBlack};

	display: flex;
	align-items: center;
	justify-content: space-between;
`

const Left = styled.div`
	display: flex;
	max-width: 399px;
	justify-content: space-between;
	align-items: center;
`

const Right = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`

const FooterSocials = styled(Socials)`
	position: relative;
	top: 2px;
`

const Copyright = styled.p`
	margin-left: 38px;
`

export default FooterComponent
