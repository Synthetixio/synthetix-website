import { FlexDivCol } from '../../styles/common';
import styled from 'styled-components';
import AccordionItem, { AccordionItemProps } from './AccordionItem';

export type AccordionItemsType = Omit<
	AccordionItemProps,
	'onHeaderClick' | 'open' | 'isLast'
>;

export interface AccordionProps {
	items: AccordionItemsType[];
	onAccordionItemChange: (index: number) => void;
	activeIndex: number;
}

export default function Accordion({
	items,
	onAccordionItemChange,
	activeIndex,
}: AccordionProps) {
	return (
		<AccordionContainer>
			{items.map((item, index) => {
				return (
					<AccordionItem
						{...item}
						key={item.title}
						open={activeIndex === index}
						isLast={index === items.length - 1}
						onHeaderClick={() => onAccordionItemChange(index)}
					></AccordionItem>
				);
			})}
		</AccordionContainer>
	);
}

const AccordionContainer = styled(FlexDivCol)`
	margin-left: 8px;
`;
