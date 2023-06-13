import { Box, BoxProps } from '@chakra-ui/react';

interface VectorLineProps extends BoxProps {
	direction?: 'vertical' | 'horizontal';
}

export const VectorLine = ({
	direction = 'vertical',
	...props
}: VectorLineProps) => {
	return (
		<Box
			position="absolute"
			top="20px"
			right="-10%"
			height="1px"
			width="800px"
			bgGradient="linear(to-r, #FFFFFF05, #FFFFFF80, #FFFFFF05)"
			opacity={0.25}
			sx={{
				transform: direction === 'vertical' ? 'rotate(90deg)' : 'rotate(0deg)',
			}}
			{...props}
		/>
	);
};
