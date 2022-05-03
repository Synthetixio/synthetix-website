import styled from 'styled-components';
import { PortableText } from '@portabletext/react';
import { Accordion } from '@synthetixio/ui';

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
	props: any;
}

export function AccordionBlock({ props }: AccordionBlockProps) {
	const accordions = props.accordions;
	return (
		<Wrapper>
			{props.body && (
				<Container>
					<PortableText value={props.body} />
				</Container>
			)}
			{accordions.map((accordion: any, index: number) => (
				<AccordionWrapper>
					<Accordion
						key={index}
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
					</Accordion>
				</AccordionWrapper>
			))}
		</Wrapper>
	);
}

export default AccordionBlock;
