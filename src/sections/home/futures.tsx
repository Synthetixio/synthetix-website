import styled from 'styled-components';
import { Section, Button, Line } from '../../components';
import { SectionDescription } from '../../components/Section';
import media from 'styled-media-query';

const FuturesSection = () => (
	<BuildContainer>
		<Line />
	</BuildContainer>
);

const BuildContainer = styled(Section)`
	min-height: 891px;

	display: flex;
	justify-content: center;
	align-items: center;

	${media.lessThan('large')`
		padding: 0 76px;
		min-height: 742px;
	`}
`;

export default FuturesSection;
