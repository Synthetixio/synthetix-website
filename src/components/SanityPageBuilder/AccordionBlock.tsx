import styled from 'styled-components';
import { PortableText } from '@portabletext/react';
//import { Accordion } from '@synthetixio/ui';

import { Container } from './ContentBlock';

const Wrapper = styled.div`
	display: inline-table;
`;

const AccordionWrapper = styled.div`
	margin-bottom: 10px;
`;

const AccordionTitle = styled.div`
	color: #fff;
	font-weight: 700;
	font-size: 14px;
`;

interface AccordionBlockProps {
	accordions: { heading: string; body: any }[];
	body?: any;
}

export function AccordionBlock({ accordions, body }: AccordionBlockProps) {
	return (
		<Wrapper>
			{body && (
				<Container>
					<PortableText value={body} />
				</Container>
			)}
			{accordions.map((accordion, index) => (
				<AccordionWrapper key={index}>
					{/* <Accordion
						key={accordion.heading.concat(index.toString())}
						headerChildren={<AccordionTitle>{accordion.heading}</AccordionTitle>}
						isOpen={false}
						gradient="darkBlue"
					>
						<div
							style={{
								color: 'white',
							}}
						>
							<PortableText value={accordion.body} />
						</div>
					</Accordion> */}
				</AccordionWrapper>
			))}
		</Wrapper>
	);
}

export default AccordionBlock;
