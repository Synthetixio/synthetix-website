import Link from 'next/link';
import {
	Button,
	Flex,
	Heading,
	Link as ChakraLink,
	Text,
	Show,
} from '@chakra-ui/react';
import { Spartan } from 'src/svg/Spartan';
import { links } from 'src/utils/constants';

export const Governance = () => {
	return (
		<Flex
			w="100%"
			mt={{ base: '50px', md: '100px' }}
			mb="265px"
			position="relative"
			flexDirection={{ base: 'column' }}
		>
			<Flex flexDirection="column" width="100%">
				<Text
					fontSize="16px"
					lineHeight="24px"
					fontFamily="heading"
					color="gray.500"
					mb="16px"
				>
					SYNTHETIX GOVERNANCE
				</Text>
				<Heading
					fontFamily="heading"
					fontWeight={700}
					fontSize="48px"
					lineHeight="57.6px"
					color="gray.50"
					width="57.5%"
					mb="16px"
				>
					Protocol Governance
				</Heading>
				<Text
					fontSize="16px"
					fontFamily="heading"
					lineHeight="24px"
					color="gray.500"
					width={{ base: '100%', md: '57%' }}
					mb="16px"
				>
					The Synthetix protocol is governed by a decentralized set of
					representative councils that are voted on by stakers. The protocol and
					ecosystem is more broadly maintained and improved by a combination of
					core contributors, ecosystem partners, and community members.
				</Text>
				<Flex mt="16px">
					<Link href="/governance">
						<Button
							as={Text}
							borderRadius="base"
							px="16px"
							py="10px"
							width="fit-content"
						>
							Learn More
						</Button>
					</Link>
					<ChakraLink
						ml="16px"
						padding="10px 16px"
						bg="transparent"
						bgGradient="none"
						color="white"
						border="1px"
						borderColor="gray.900"
						borderRadius="4px"
						fontSize="14px"
						fontWeight={700}
						fontFamily="heading"
						_hover={{
							bg: 'gray.900',
						}}
						_active={{
							bg: 'gray.900',
						}}
						href={links.governanceApp}
						target="_blank"
					>
						Governance App
					</ChakraLink>
				</Flex>
			</Flex>
			<Show above="base" below="md">
				<Flex
					position="relative"
					width="100%"
					height="300px"
					justifyContent={'center'}
				>
					<Spartan position="absolute" top="-75" width="500px" />
				</Flex>
			</Show>
			<Show above="md">
				<Spartan
					position="absolute"
					right="-79"
					top="-150"
					width={{ md: '500px', lg: '600px', xl: '900px' }}
				/>
			</Show>
		</Flex>
	);
};
