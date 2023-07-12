import Link from 'next/link';
import { Button, Flex, Text, Show } from '@chakra-ui/react';
import { Spartan } from 'src/svg/Spartan';
import { links } from 'src/utils/constants';

export const Governance = () => {
	return (
		<Flex
			w="100%"
			my={{ base: '60px', md: '100px' }}
			position="relative"
			flexDirection={{ base: 'column-reverse', md: 'column' }}
		>
			<Flex flexDirection="column" width="100%" zIndex={1}>
				<Text
					fontSize="16px"
					lineHeight="24px"
					fontFamily="heading"
					color="gray.500"
					mb="16px"
				>
					SYNTHETIX GOVERNANCE
				</Text>
				<Text
					fontFamily="heading"
					color="gray.50"
					mb="16px"
					textStyle="heading-2xl"
				>
					Protocol Governance
				</Text>
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
							py="20px"
							width="fit-content"
							size={{ base: 'lg', md: 'md' }}
							fontSize="16px"
						>
							Learn More
						</Button>
					</Link>
					<Link href={links.governanceApp} target="_blank">
						<Button
							w="fit-content"
							variant="outline"
							colorScheme="gray"
							borderRadius="4px"
							fontWeight={700}
							fontSize="14px"
							padding="10px 16px"
							size={{ base: 'lg', md: 'md' }}
							ml="16px"
						>
							Governance App
						</Button>
					</Link>
				</Flex>
			</Flex>
			<Show above="base" below="md">
				<Flex
					position="relative"
					width="100%"
					height="300px"
					justifyContent={'center'}
				>
					<Spartan
						position="absolute"
						top={{ base: '-50px', sm: '-50px' }}
						width="100%"
						height="max-content"
					/>
				</Flex>
			</Show>
			<Show above="md">
				<Spartan
					position="absolute"
					right="-80px"
					top="-150"
					width={{ md: '500px', lg: '600px', xl: '900px' }}
				/>
			</Show>
		</Flex>
	);
};
