import styled from 'styled-components';
import media from 'styled-media-query';
import Link from 'next/link';

import { theme } from '../styles/theme';
import { ExternalLink } from '../styles/common';

const data = [
	{
		link: '/synths',
		label: 'synths',
		hideOnHeader: false,
	},
	{
		externalLink: 'https://stats.synthetix.io',
		label: 'stats',
		hideOnHeader: false,
	},
	{
		externalLink: 'https://staking.synthetix.io',
		label: 'staking',
		hideOnHeader: false,
	},
	{
		externalLink: 'https://docs.synthetix.io/',
		label: 'build',
		hideOnHeader: false,
	},
	{
		externalLink: 'https://gov.synthetix.io/',
		label: 'governance',
		hideOnHeader: false,
	},
	{
		externalLink: 'https://discord.com/invite/AEdUHzt',
		label: 'community',
		hideOnHeader: false,
	},
	{
		externalLink: 'https://jobs.defialliance.co/jobs?q=synthetix',
		label: 'careers',
		hideOnHeader: true,
	},
	{
		externalLink: 'https://blog.synthetix.io/',
		label: 'blog',
		hideOnHeader: false,
	},
	{
		externalLink: 'https://research.synthetix.io/',
		label: 'research',
		hideOnHeader: true,
	},
];

interface MenuProps {
	isOpen?: boolean;
	isHeader?: boolean;
}

const MenuComponent = (props: MenuProps) => {
	return (
		<Menu {...props}>
			{data.map((item) => {
				if (props.isHeader) {
					return (
						<>
							{!item.hideOnHeader && (
								<MenuItem key={item.label}>
									{item.link ? (
										<Link href={item.link}>
											<a>{item.label}</a>
										</Link>
									) : (
										<ExternalLink href={item.externalLink}>{item.label}</ExternalLink>
									)}
								</MenuItem>
							)}
						</>
					);
				} else {
					return (
						<MenuItem key={item.label}>
							{item.link ? (
								<Link href={item.link}>
									<a>{item.label}</a>
								</Link>
							) : (
								<ExternalLink href={item.externalLink}>{item.label}</ExternalLink>
							)}
						</MenuItem>
					);
				}
			})}
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
