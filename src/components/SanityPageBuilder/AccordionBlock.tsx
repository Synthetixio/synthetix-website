// @ts-nocheck
import { useState } from 'react';
import styled from 'styled-components';
import { PortableText } from '@portabletext/react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { Container } from './ContentBlock';

const Wrapper = styled.div`
	.accordion-wrapper {
		border: 1px solid #2c3036;
		background-color: #0b0b22;
		border-radius: 4px;
		margin-bottom: 5px;
		box-shadow: 0px 14px 14px 0px rgba(0, 0, 0, 0.25);

		:hover {
			cursor: pointer;
			filter: brightness(120%);
		}
	}
	.open {
		border-style: solid;
		border-width: 2px;
		border-image: linear-gradient(180deg, #ed1eff, #00d1ff) 1;
	}

	.accordion-item {
		overflow: hidden;
		transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
		height: auto;
		max-height: 9999px;
	}

	.accordion-item.collapsed {
		max-height: 0;
		transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);
	}

	.accordion-title {
		font-weight: 700;
		font-size: 14px;
		color: #fff;
		padding: 1em 1.5em;
		display: flex;
		justify-content: space-between;
		align-items: center;

		svg {
			fill: #00d1ff;
		}
	}

	.accordion-content {
		padding: 1em 1.5em;
	}
`;

const Accordion = ({ title, children }) => {
	const [isOpen, setOpen] = useState(false);
	return (
		<div className={`accordion-wrapper ${isOpen ? 'open' : ''}`} onClick={() => setOpen(!isOpen)}>
			<div className={`accordion-title`}>
				{title} <span>{isOpen === true ? <FiChevronDown /> : <FiChevronUp />}</span>
			</div>
			<div className={`accordion-item ${!isOpen ? 'collapsed' : ''}`}>
				<div className="accordion-content">{children}</div>
			</div>
		</div>
	);
};

interface AccordionBlockProps {
	props: object;
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
			{accordions.map((accordion, index) => (
				<Accordion title={accordion.heading} key={index}>
					<PortableText value={accordion.body} />
				</Accordion>
			))}
		</Wrapper>
	);
}

export default AccordionBlock;
