import styled from 'styled-components';
import media from 'styled-media-query';

import { theme } from '../styles/theme';
import { ExternalLink } from '../styles/common';

const data = [
	{
		link: 'https://stats.synthetix.io',
		label: 'stats',
	},
	{
		link: 'https://staking.synthetix.io',
		label: 'staking',
	},
	{
		link: 'https://docs.synthetix.io/',
		label: 'build',
	},
	{
		link: 'https://gov.synthetix.io/',
		label: 'governance',
	},
	{
		link: 'https://discord.com/invite/AEdUHzt',
		label: 'community',
	},
	{
		link: 'https://blog.synthetix.io/',
		label: 'blog',
	},
	{
		link: 'https://research.synthetix.io/',
		label: 'research',
	},
];

interface MenuProps {
	isOpen?: boolean;
}

const MenuComponent = (props: MenuProps) => {
	return (
		<Menu {...props}>
			{data.map((item) => (
				<MenuItem key={item.label}>
					<ExternalLink href={item.link}>{item.label}</ExternalLink>
				</MenuItem>
			))}
		</Menu>
	);
};

const Menu = styled.ul`
	transition: left 0.3s ease-out;
	z-index: 101;

	${media.lessThan('medium')`
		position: fixed;
		display: flex;
		flex-direction: column;
		top: 0;
		padding-top: 100px;
		left: -100%;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		background: linear-gradient(180deg, #08021E 0%, #120446 146.21%);
	`}

	&.enter-active, &.enter-done {
		left: 0;
	}
`;

const MenuItem = styled.li`
	display: inline-block;

	margin-right: 32px;
	&:last-child {
		margin-right: 0;
	}

	a {
		${theme.fonts.menu};
		transition: color 0.3s ease-out;

		&:hover {
			color: ${theme.colors.cyan};
		}
	}

	${media.lessThan('medium')`
	margin: 0 0 51px 20px;
		a {
			font-size: 32px;
			line-height: 24px;
		}
	`}
`;

export default MenuComponent;
