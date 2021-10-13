import { FC } from 'react';
import styled from 'styled-components';
import { Logo, Menu, Socials } from './';
import media from 'styled-media-query';
import Line from './Line';

type FooterComponentProps = {
	className?: string;
};

const FooterComponent: FC<FooterComponentProps> = ({ className, ...rest }) => (
	<Footer {...{ className }} {...rest}>
		<Line />
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
	position: relative;
	height: 159px;
	width: 100%;
	padding: 0 66px 0 114px;
	background-color: ${(props) => props.theme.colors.bgBlack};

	display: flex;
	align-items: center;
	justify-content: space-between;

	${(props) => props.theme.animations.show};

	animation-delay: 200ms;
	opacity: 0;

	${media.lessThan('medium')`
		${Menu as any} {
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
