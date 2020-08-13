import styled from 'styled-components'
import { Logo } from './'
import { theme } from '../styles/theme'

const data = [{
	link: '/stats',
	label: 'stats'
}, {
	link: '/staking',
	label: 'staking'
}, {
	link: '/build',
	label: 'build'
}, {
	link: '/community',
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
