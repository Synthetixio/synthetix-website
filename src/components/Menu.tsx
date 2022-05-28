import styled from 'styled-components';
import media from 'styled-media-query';
import Link from 'next/link';
import { ImArrowUpRight2 } from 'react-icons/im';
import Search from './Search';
import { useRouter } from 'next/router';

import { theme } from '../styles/theme';
import { ExternalLink } from '../styles/common';
import { SubMenu } from '.';

interface MenuProps {
	isOpen?: boolean;
	isHeader?: boolean;
	navDocs?: any;
	subOpen?: boolean;
}

const MenuComponent = ({ isHeader, isOpen, subOpen, navDocs, ...rest }: MenuProps) => {
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
			button: true,
		},
		{
			externalLink: 'https://staking.synthetix.io',
			label: 'staking',
			hideOnHeader: false,
			button: true,
		},
		{
			link: '/build/welcome-to-snx',
			label: 'build',
			hideOnHeader: false,
		},
		{
			link: '/guides',
			label: 'guides',
			hideOnHeader: false,
			subMenu: (navDocs && navDocs.label === 'guides' && navDocs) || null,
		},
		{
			link: '/governance',
			label: 'governance',
			hideOnHeader: false,
		},
		{
			externalLink: 'https://discord.com/invite/AEdUHzt',
			label: 'community',
			hideOnHeader: false,
		},
		{
			externalLink: 'https://jobs.defialliance.co/companies/synthetix',
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

	const router = useRouter();
	const urlFolderPathName = router.pathname.split('/')[1];

	return (
		<>
			<StyledMenu isOpen={!!isOpen} {...rest}>
				{data.map((item) => {
					if (isHeader) {
						return (
							!item.hideOnHeader &&
							!item.button && (
								<MenuItem key={item.label} subOpen={!!subOpen} {...rest}>
									{item.link ? (
										<Link href={item.link}>
											<a className={urlFolderPathName === item.label ? 'active' : ''}>
												{item.label}
											</a>
										</Link>
									) : (
										<ExternalLink href={item.externalLink} key={item.label}>
											{item.label}
										</ExternalLink>
									)}
								</MenuItem>
							)
						);
					} else {
						return (
							<MenuItem subOpen={false} key={item.label}>
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

				{data.map((item: any) => {
					if (isHeader) {
						return (
							item.button && (
								<MenuBtn
									key={item.label}
									border={item.label === 'staking' ? true : false}
									subOpen={!!subOpen}
									{...rest}
								>
									{item.link ? (
										<Link href={item.link}>
											<a>
												{item.label}
												<span>
													<ImArrowUpRight2 />
												</span>
											</a>
										</Link>
									) : (
										<ExternalLink href={item.externalLink} key={item.label}>
											{item.label}{' '}
											<span>
												<ImArrowUpRight2 />
											</span>
										</ExternalLink>
									)}
								</MenuBtn>
							)
						);
					}
				})}

				{subOpen && <SubMenu navDocs={navDocs} />}
			</StyledMenu>
			<StyledSearch isOpen={!!isOpen} {...rest}>
				<Search />
			</StyledSearch>
		</>
	);
};

export const StyledMenu = styled.ul<{ isOpen: boolean }>`
	transition: left 0.3s ease-out;
	z-index: 101;
	display: flex;
	justify-content: right;
	flex-wrap: wrap;
	transition: all 250ms linear;
	width: inherit;

	${media.lessThan<{ isOpen: boolean }>('medium')`
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-content: start;
		flex-wrap: nowrap;
		top: 0;
		padding-top: 100px;
		left: -100%;
		width: 100%;
		height: 100%;
		overflow: scroll;
		background: linear-gradient(180deg, #08021E 0%, #120446 146.21%);
		${({ isOpen }) => (isOpen ? 'left: 0;' : 'left: -100%;')}
	`}
`;

const MenuItem = styled.li<{ subOpen: boolean }>`
	display: inline-block;
	margin: 10px 16px;
	&:last-child {
		margin-right: 0;
	}
	a {
		${theme.fonts.menu};
		transition: color 0.3s ease-out;
		display: block;
		color: #828295;
		&:hover {
			color: ${theme.colors.cyan};
		}
	}
	a.active {
		border-bottom: 3px solid #00d1ff; /* or whatever colour you'd prefer */
		outline: 3px solid black;
		color: #fff;
	}
	${media.lessThan<{ subOpen: boolean }>('medium')`
        ${({ subOpen }) => (subOpen ? 'display: none;' : 'display: inline-block;')}
        margin: 0 0 51px 20px;
            a {
                font-size: 32px;
                line-height: 24px;
            }
    `}
`;

const StyledSearch = styled.div<{ isOpen: boolean }>`
	${media.lessThan<{ subOpen: boolean }>('medium')`
        right: 20px;
        position: absolute !important;
    `}
`;

const MenuBtn = styled.li<{ subOpen: boolean; border: boolean }>`
	display: inline-block;
	margin: 0 10px;
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
		linear-gradient(311.52deg, #3d464c -36.37%, #131619 62.81%);
	${({ border }) => (border ? 'border: 1px solid #00d1ff;' : 'border: none;')}
	box-sizing: border-box;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);
	border-radius: 30px;
	text-align: center;
	padding: 10px 25px;
	&:last-child {
		//margin-right: 0;
	}
	a {
		${theme.fonts.menu};
		${({ border }) => (border ? 'color:#00d1ff;' : '')}
		transition: color 0.3s ease-out;
		&:hover {
			color: ${theme.colors.cyan};
		}
	}
	span {
		margin-left: 10px;
	}
	${media.lessThan('medium')`
        ${({ subOpen }: any) => (subOpen ? 'display: none;' : 'display: inline-block;')}
        margin: 0 0 51px 20px;
        width: fit-content;
            a {
                font-size: 20px;
                line-height: 24px;
            }
    `}
`;

export default MenuComponent;
