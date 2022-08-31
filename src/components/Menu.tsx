import styled from 'styled-components';
import media from 'styled-media-query';
import Link from 'next/link';
import { ImArrowUpRight2 } from 'react-icons/im';
import Search from './Search';
import { useRouter } from 'next/router';

import { theme } from '../styles/theme';
import { ExternalLink } from '../styles/common';
import { SubMenu } from '.';
import { Flex } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

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
		// {
		// 	link: '/build/welcome-to-snx',
		// 	label: 'build',
		// 	hideOnHeader: false,
		// },
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
			<MenuContainer {...rest} isOpen={!!isOpen}>
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
			</MenuContainer>
			<StyledSearch isOpen={!!isOpen} {...rest}>
				<Search />
			</StyledSearch>
		</>
	);
};

export const MenuContainer = ({
	children,
	isOpen,
	...rest
}: PropsWithChildren<{ isOpen?: boolean }>) => {
	return (
		<Flex
			as="ul"
			position={{ base: 'fixed', md: 'initial' }}
			zIndex="101"
			justifyContent={{ base: 'flex-start', md: 'right' }}
			wrap={{ md: 'wrap', base: 'nowrap' }}
			top="0px"
			padding={{ base: '100px', md: 'unset' }}
			transition="all 250ms linear"
			w="100%"
			height={{ base: '100%', md: 'auto' }}
			overflow={{ base: 'scroll', md: 'visible' }}
			background={{
				base: 'linear-gradient(180deg, #08021E 0%, #120446 146.21%)',
				md: 'transparent',
			}}
			left={{ base: isOpen ? '0' : '-100%' }}
			{...rest}
		>
			{children}
		</Flex>
	);
};

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
		width: fit-content;
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
	margin-left: 20px;
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
