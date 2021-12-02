import { PropsWithChildren } from 'react';
import { FlexDivColCentered } from 'src/styles/common';
import { Footer, Header } from '.';

export default function PageLayout({ children, backgroundColor }: PropsWithChildren<{}>) {
	return (
		<FlexDivColCentered>
			<Header />
			{children}
			<Footer />
		</FlexDivColCentered>
	);
}
