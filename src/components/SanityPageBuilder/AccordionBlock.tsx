// @ts-nocheck
import { useState } from 'react';
import styled from 'styled-components';
import { PortableText } from '@portabletext/react';
//import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const Wrapper = styled.div`
	.accordion-wrapper {
		border: 1px solid #2c3036;
		background-color: #0b0b22;
		border-radius: 4px;
		cursor: pointer;
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
				{title} <span>{isOpen === true ? <FiMinus /> : <FiPlus />}</span>
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
			{accordions.map((accordion, index) => (
				<Accordion title={accordion.heading} key={index}>
					<PortableText value={accordion.body} />
				</Accordion>
			))}
		</Wrapper>
	);
}

export default AccordionBlock;
