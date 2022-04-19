// @ts-nocheck
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import HamburgerMenu from 'react-hamburger-menu';
import { Logo, Menu } from './';

const HeaderComponent = (props: any) => {
	const { navDocs, navShort } = props || null;
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [subOpen, setSubOpen] = useState<boolean>(false);

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('fixed');
		} else {
			document.body.classList.remove('fixed');
		}
		setSubOpen(navDocs ? true : false);
	}, [isOpen]);

	const clickMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Header data-test-id="header" navShort={navShort}>
			<StyledHamburgerMenu
				isOpen={isOpen}
				menuClicked={clickMenu}
				width={22}
				height={16}
				strokeWidth={2}
				rotate={0}
				color="white"
				borderRadius={0}
				animationDuration={0.3}
			/>
			<Logo />
			<Menu
				navDocs={navDocs}
				subOpen={subOpen}
				isHeader={true}
				isOpen={isOpen}
				data-test-id="header-menu"
			/>
		</Header>
	);
};

export const headerHeight = 100;

const Header = styled.header`
	${({ theme }) => theme.animations.show};
	max-width: ${({ navShort, theme }) =>
		navShort ? theme.maxContentWidthBuild : theme.maxContentWidth};
	animation-delay: 200ms;
	opacity: 0;
	height: ${headerHeight}px;
	width: 100%;
	padding: 0 56px;
	position: relative;
	z-index: 100;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);

	${media.lessThan('medium')`
		border-bottom: 0;
		padding: 0 20px;
		justify-content: center;
	`}
`;

const StyledHamburgerMenu = styled(HamburgerMenu)`
	display: none;

	${media.lessThan('medium')`
		display: block;
		cursor: pointer;
		user-select: none;
		left: 20px;
		top: 39px;
		position: ${(props) => ((props as any).isOpen ? 'fixed' : 'absolute')} !important;
		z-index: 999;
	`}
`;

export default HeaderComponent;
