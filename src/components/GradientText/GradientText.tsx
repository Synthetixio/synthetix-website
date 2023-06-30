import { ReactNode } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

interface GradientTextProps extends BoxProps {
	children: ReactNode;
}

export const GradientText = ({ children, ...props }: GradientTextProps) => {
	return (
		<Box
			display="inline"
			bg="linear-gradient(73.6deg, #34EDB3 2.11%, #00D1FF 100%)"
			backgroundClip="text"
			text-fill-color="transparent"
			as="div"
			{...props}
		>
			{children}
		</Box>
	);
};
