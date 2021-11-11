import { FlexDiv, Section } from 'src/styles/common';
import styled from 'styled-components';

export default function PoweredBy() {
	return (
		<PoweredBySection customMaxWidth={true}>
			<SpaceBetween>
				<h1>test</h1>
				<h1>test</h1>
			</SpaceBetween>
			<Wave src="/home/futures/powered-by-wave.svg" />
		</PoweredBySection>
	);
}

const PoweredBySection = styled(Section)`
	width: 100vw;
`;

const SpaceBetween = styled(FlexDiv)`
	justify-content: space-between;
`;

const Wave = styled.img`
	width: 100%;
`;
