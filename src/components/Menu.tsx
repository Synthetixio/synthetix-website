import styled from 'styled-components'
import { Logo } from './'
import { theme } from '../styles/theme'

const data = [{
	link: 'https://dashboard.synthetix.io',
	label: 'stats'
}, {
	link: 'https://mintr.synthetix.io',
	label: 'staking'
}, {
	link: 'https://docs.synthetix.io/',
	label: 'build'
}, {
	link: 'https://discord.com/invite/AEdUHzt',
	label: 'community'
}]

const MenuComponent = () => {
	return (
		<Menu>
			{data.map(item => (
				<MenuItem key={item.label}><a href={item.link} target="_blank">{item.label}</a></MenuItem>
			))}
		</Menu>
	)
}

const Menu = styled.ul`
`

const MenuItem = styled.li`
	display: inline-block;

	a {
		${theme.fonts.menu};
	}

	margin-right: 32px;
	&:last-child {
		margin-right: 0;
	}
`

export default MenuComponent
