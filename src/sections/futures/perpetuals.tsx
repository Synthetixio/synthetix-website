import { Section, SectionTitle, Subline } from 'src/styles/common';
import styled from 'styled-components';

export default function Perpetuals() {
	return (
		<PerpetualsSection>
			<SectionTitle>TRADING PERPETUALS</SectionTitle>
			<PerpetualSubline>
				Leveraging the Synthetix debt pool and our innovative liquidity framework, our traders are
				guaranteed to have some of the best price execution around, with little to no slippage and
				fills you can’t get elsewhere.
			</PerpetualSubline>
		</PerpetualsSection>
	);
}

const PerpetualsSection = styled(Section)`
	padding-top: 70px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const PerpetualSubline = styled(Subline)`
	max-width: 710px;
`;
