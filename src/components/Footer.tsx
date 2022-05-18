import { FC } from 'react';
import styled from 'styled-components';
import { Logo, Menu, Socials } from './';
import media from 'styled-media-query';
import { StyledMenu } from './Menu';

type FooterComponentProps = {
	className?: string;
};

const FooterComponent: FC<FooterComponentProps> = ({ className, ...rest }) => (
	<Footer {...{ className }} {...rest}>
		<Left>
			<Logo small={true} />
		</Left>
		<Right>
			<Menu />
			<FooterSocials />
		</Right>
	</Footer>
);

const Footer = styled.footer`
	max-width: ${({ theme }) => theme.maxContentWidth};
	position: relative;
	height: 159px;
	width: 100%;
	padding: 0 66px 0 114px;
	background-color: ${({ theme }) => theme.colors.bgBlack};

	display: flex;
	align-items: center;
	justify-content: space-between;

	${({ theme }) => theme.animations.show};

	animation-delay: 200ms;
	opacity: 0;

	${media.lessThan('1110px' as any)`
		padding: 0 20px;
	`}

	${media.lessThan('medium')`
		background-color: transparent;
		${StyledMenu} {
			display: none;
		}

		flex-direction: column;
		justify-column: center;
		padding: 25px 29px;
	`}
`;

const Left = styled.div`
	display: flex;
	max-width: 399px;
	justify-content: space-between;
	align-items: center;

	${media.lessThan('medium')`
		max-width: 100%;
		justify-content: center;
	`}
`;

const Right = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

const FooterSocials = styled(Socials)`
	position: relative;
	top: 2px;
`;

export default FooterComponent;
