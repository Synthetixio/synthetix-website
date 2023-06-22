import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

export const GradientText = ({ children }: { children: ReactNode }) => {
	return (
		<Box
			display="inline"
			bg="linear-gradient(73.6deg, #34EDB3 2.11%, #00D1FF 100%)"
			backgroundClip="text"
			text-fill-color="transparent"
		>
			{children}
		</Box>
	);
};
