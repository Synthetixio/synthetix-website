import { PageBuilderProps } from 'pages/build/[slug]';
import { Box, Flex, Text } from '@chakra-ui/react';
import { TextComponent } from './ContentBlock';

export interface StepsBlockProps {
	style: string;
	steps: { body: PageBuilderProps['body']; _key: string; _type: string }[];
}

export function StepsBlock({ style, steps }: StepsBlockProps) {
	return (
		<Flex gap="2" flexWrap="wrap">
			{steps.map((step, index) => (
				<Box
					maxW="200px"
					borderRadius="base"
					borderWidth="2px"
					borderStyle="solid"
					borderColor={`${style}.500`}
					p="2"
					key={step._key}
					display="flex"
					flexWrap="wrap"
				>
					<Box background={`${style}.500`} borderRadius="full" px="3" mr="2">
						<Text fontWeight="bold" fontSize="2xl">
							{index + 1}
						</Text>
					</Box>
					<TextComponent body={step.body} />
				</Box>
			))}
		</Flex>
	);
}

export default StepsBlock;
