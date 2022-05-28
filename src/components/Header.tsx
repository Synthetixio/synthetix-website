import { useState, useEffect } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import HamburgerMenu from 'react-hamburger-menu';
import { NavBar } from '@synthetixio/ui';
import { Menu } from './';

const HeaderComponent = (props: any) => {
	const { navDocs } = props || null;
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
		<NavBar data-test-id="header">
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
			<Menu
				navDocs={navDocs}
				subOpen={subOpen}
				isHeader={true}
				isOpen={isOpen}
				data-test-id="header-menu"
			/>
		</NavBar>
	);
};

export const headerHeight = 100;

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
