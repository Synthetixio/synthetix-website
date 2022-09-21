import { PageBuilderProps } from 'pages/build/[slug]';
import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Box,
	Heading,
} from '@chakra-ui/react';
import { TextComponent } from './ContentBlock';
import { ArrowDownIcon } from '@chakra-ui/icons';

interface AccordionBlockProps {
	accordions: { heading: string; body: PageBuilderProps['body'] }[];
	body?: PageBuilderProps['body'];
}

export function AccordionBlock({ accordions, body }: AccordionBlockProps) {
	return (
		<Box>
			{body && body[0]?.children && (
				<Heading>{body[0].children[0].text}</Heading>
			)}
			{accordions.map(accordion => (
				<Accordion allowToggle key={accordion.heading}>
					<AccordionItem>
						<AccordionButton w="100%">
							<Heading size="md" as="h2">
								{accordion.heading}
							</Heading>
							<ArrowDownIcon ml="auto" />
						</AccordionButton>
						<AccordionPanel>
							<TextComponent body={accordion.body} />
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
			))}
		</Box>
	);
}

export default AccordionBlock;
