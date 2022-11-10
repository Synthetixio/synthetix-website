import { PageBuilderProps } from 'pages/build/[slug]';
import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Alert,
	Box,
	Heading,
} from '@chakra-ui/react';
import { TextComponent } from './ContentBlock';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { useState } from 'react';

interface AccordionBlockProps {
	accordions: { heading: string; body: PageBuilderProps['body'] }[];
	body?: PageBuilderProps['body'];
}

export function AccordionBlock({ accordions, body }: AccordionBlockProps) {
	const [accordionStates, setAccordionStates] = useState(
		new Array(accordions.length).fill(1),
	);

	return (
		<Box w="100%">
			{body && body[0]?.children && (
				<Heading>{body[0].children[0].text}</Heading>
			)}
			{accordions.map((accordion, index) => (
				<Accordion
					allowToggle
					key={accordion.heading}
					borderStyle="solid"
					border="1px"
					borderColor="gray.900"
					borderRadius="base"
					my="2"
					py="2"
					onChange={() =>
						setAccordionStates(
							accordionStates.map((state, i) =>
								index === i ? state * -1 : state,
							),
						)
					}
				>
					<AccordionItem>
						<AccordionButton w="100%">
							<Heading fontSize="lg" as="h2" textAlign="start">
								{accordion.heading}
							</Heading>
							{accordionStates[index] >= 0 ? (
								<ChevronDownIcon ml="auto" boxSize="6" />
							) : (
								<ChevronUpIcon ml="auto" boxSize="6" />
							)}
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
