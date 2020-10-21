import { useState, useEffect } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import HamburgerMenu from 'react-hamburger-menu';
import { CSSTransition } from 'react-transition-group';

import { Logo, Menu } from './';

const HeaderComponent = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	let [animationProps, setAnimationProps] = useState({ mountOnEnter: false, unmountOnExit: false });

	useEffect(
		function () {
			if (isOpen) {
				document.body.classList.add('fixed');
			} else {
				document.body.classList.remove('fixed');
				if (window.innerWidth < 768) {
					setAnimationProps({
						mountOnEnter: true,
						unmountOnExit: true,
					});
				}
			}
		},
		[isOpen]
	);

	const clickMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Header>
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
			<CSSTransition in={isOpen} timeout={300} {...animationProps}>
				<Menu isOpen={isOpen} />
			</CSSTransition>
		</Header>
	);
};

export const headerHeight = 100;

const Header = styled.header`
	${(props) => props.theme.animations.show};

	animation-delay: 200ms;
	opacity: 0;
	height: ${headerHeight}px;
	width: 100%;
	padding: 0 56px;
	position: relative;
	/* background: linear-gradient(180deg, #08021E 0%, #120446 146.21%); */
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
