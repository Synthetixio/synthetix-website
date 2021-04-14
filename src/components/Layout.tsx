import { ReactNode } from 'react';
import styled from 'styled-components';
import { Header, Footer } from '.';
import media from 'styled-media-query';

type LayoutProps = {
	children: ReactNode;
	className?: string;
	showBgGradient?: boolean;
};

const Layout = ({ children, showBgGradient = false, ...rest }: LayoutProps) => (
	<LayoutContainer {...rest}>
		<ContentContainer className="content">
			<Header />
			<Container className="container">{children}</Container>
		</ContentContainer>
		{showBgGradient && <BgGradient />}
		<Footer className="footer" />
	</LayoutContainer>
);

const LayoutContainer = styled.div`
	position: relative;
`;

const ContentContainer = styled.div`
	position: relative;
	z-index: 10;
`;

const BgGradient = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	min-height: 853px;
	background: linear-gradient(180deg, #08021e 0%, #120446 146.21%);
	pointer-events: none;
	z-index: 5;

	${media.lessThan('medium')`
		height: 734px;
		min-height: auto;
	`}
`;

const Container = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export default Layout;
