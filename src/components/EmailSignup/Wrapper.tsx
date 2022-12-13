import { Box, Flex, FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface WrapperProps extends FlexProps {
	children: ReactNode;
	innerProps?: FlexProps;
}

export const Wrapper = ({
	children,
	justifyContent = 'center',
	innerProps,
	...props
}: WrapperProps) => (
	<Box
		width="100vw"
		bgGradient="linear(to-r, pink.800, cyan.800)"
		borderTopColor="#00D1FF10"
		borderTopStyle="solid"
		borderTopWidth="1px"
		borderBottomColor="#00D1FF10"
		borderBottomStyle="solid"
		borderBottomWidth="1px"
		position="relative"
		{...props}
	>
		<Flex
			width="100%"
			height="100%"
			justifyContent="center"
			alignItems="center"
			position="absolute"
			bg="blackAlpha.500"
			top="0"
			right="0"
			bottom="0"
			left="0"
			direction={['column', 'column', 'row']}
			bgImage="url('static/Background_Pattern.svg')"
			bgRepeat="repeat"
			{...innerProps}
		>
			{children}
		</Flex>
	</Box>
);
