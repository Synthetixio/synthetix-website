import { ReactNode } from 'react';
import styled from 'styled-components';
import { Header, Footer } from '.';
import media from 'styled-media-query';

import Ecosystem from 'src/sections/home/ecosystem';
import dynamic from 'next/dynamic';

type LayoutProps = {
	children: ReactNode;
	className?: string;
	showBgGradient?: boolean;
};

const PoweredBy = dynamic(() => import('../sections/home/poweredBy'), {
	ssr: false,
});

const Layout = ({ children, ...rest }: LayoutProps) => (
	<LayoutContainer {...rest}>
		<ContentContainer className="content">
			<Header />
			{children}
		</ContentContainer>
		<PoweredBy />
		<Ecosystem />
		<Footer className="footer" />
		<BgGradient />
	</LayoutContainer>
);

const LayoutContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ContentContainer = styled.div`
	position: relative;
	z-index: 10;
	max-width: 1920px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
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
		height: 671px;
		min-height: auto;
	`}
`;

export default Layout;
