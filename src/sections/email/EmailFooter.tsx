import { Box, Text, Flex, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { EmailSignup } from 'src/components/EmailSignup';

export const EmailFooter = () => {
	const { pathname } = useRouter();

	return (
		<Flex
			flexDir="column"
			justifyContent="center"
			height="100%"
			mt={5}
			w="100%"
		>
			<Text
				fontFamily="heading"
				fontStyle="normal"
				fontWeight="700"
				color="white"
			>
				JOIN OUR NEWSLETTER
			</Text>
			<EmailSignup pt={0} page={`footer ${pathname}`} />
		</Flex>
	);
};
