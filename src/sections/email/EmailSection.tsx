import { Box, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Wrapper, EmailSignup } from 'src/components/EmailSignup';

export const EmailSection = () => {
	const { pathname } = useRouter();
	return (
		<Wrapper minHeight={['180px', '180px', '180px', '158px']}>
			<Box mr={[0, 0, 16]} height={[2, 2, 'unset', 'unset']}>
				<Text
					fontFamily="GT America"
					fontStyle="normal"
					fontSize={['28px', '32px']}
					color="white"
					mt={[6, 6, 0, 0]}
				>
					JOIN OUR NEWS LETTER
				</Text>
			</Box>
			<EmailSignup page={`${pathname}`} mt={[8, 8, 0, 0]} />
		</Wrapper>
	);
};
