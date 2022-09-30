import { PageBuilderProps } from 'pages/build/[slug]';
import { Box, Flex, Text } from '@chakra-ui/react';
import { TextComponent } from './ContentBlock';

export interface StepsBlockProps {
	style: string;
	steps: { body: PageBuilderProps['body']; _key: string; _type: string }[];
}

export function StepsBlock({ style, steps }: StepsBlockProps) {
	const isFullWidth = style === 'black';
	return (
		<Flex
			gap="2"
			flexWrap={isFullWidth ? 'nowrap' : 'wrap'}
			flexDirection={isFullWidth ? 'column' : 'row'}
		>
			{steps.map((step, index) => (
				<Flex
					maxW={isFullWidth ? 'unset' : '300px'}
					borderRadius="base"
					borderWidth="1px"
					borderStyle="solid"
					borderColor="gray.900"
					p="2"
					key={step._key}
					w="100%"
					overflow="scroll"
				>
					<Box
						background={isFullWidth ? 'purple.500' : 'pink.500'}
						borderRadius="full"
						minW="30px"
						minH="30px"
						m="3"
						h="fit-content"
						display="flex"
						justifyContent="center"
						alignItems="center"
					>
						<Text fontWeight="bold" fontSize="md">
							{index + 1}
						</Text>
					</Box>
					<Flex flexDir="column" py="2" pr="1">
						<TextComponent body={step.body} />
					</Flex>
				</Flex>
			))}
		</Flex>
	);
}

export default StepsBlock;
