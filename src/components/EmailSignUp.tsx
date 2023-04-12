import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { FC } from 'react';

export const EmailSignUp: FC<{}> = () => {
	return (
		<Flex flexDir="column" mt="4" w="100%">
			<Text fontWeight="bold" textTransform="uppercase" minW="95px" mb="8px">
				Join our Newsletter
			</Text>
			<Flex w="100%">
				<Input
					type="email"
					placeholder="Enter Email Address"
					w="100%"
					mr="16px"
					borderColor="gray.900"
				/>
				<Button
					variant="outline"
					colorScheme="gray"
					py="8px"
					px="10px"
					w="100%"
					maxW="96px"
				>
					Sign Up
				</Button>
			</Flex>
		</Flex>
	);
};
