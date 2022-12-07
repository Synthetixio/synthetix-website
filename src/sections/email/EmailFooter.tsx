import { Box, Text, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { EmailSignup } from 'src/components/EmailSignup';

export const EmailFooter = () => {
	const { pathname } = useRouter();

	return (
		<Flex flexDir="column" justifyContent="center" height="100%" mt={4} pl={8}>
			<Box>
				<Text
					fontFamily="GT America"
					fontStyle="normal"
					fontSize="18px"
					color="white"
					mb={4}
				>
					JOIN OUR NEWS LETTER TO KEEP UPDATED
				</Text>
			</Box>
			<EmailSignup pt={0} page={`footer ${pathname}`} />
		</Flex>
	);
};
