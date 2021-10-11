import { Line, Section } from 'src/components';
import { SectionTitle } from 'src/styles/common';
import styled from 'styled-components';
import media from 'styled-media-query';

export default function Ecosystem() {
	return (
		<EcoSystemSection>
			<SectionTitle>POWERED BY SYNTHETIX</SectionTitle>
			<Line />
		</EcoSystemSection>
	);
}

const EcoSystemSection = styled(Section)`
	display: flex;
	justify-content: center;
	padding-top: 65px;
	background-color: ${({ theme }) => theme.colors.bgBlackHighlighted};
	padding: 70px 100px;

	${media.lessThan('medium')`
		background-color: transparent;
	`}
`;
