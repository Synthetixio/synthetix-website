import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Link,
	Show,
	Text,
} from '@chakra-ui/react';

export default function Action() {
	return (
		<Box
			maxW={{
				base: '100vw',
				md: '48rem',
				lg: '62rem',
				xl: '80rem',
				'2xl': '96rem',
			}}
			w="100%"
			px={{ base: '16px', lg: '24px' }}
			my={{ base: '62px', md: '100px' }}
		>
			<Flex
				w="100%"
				borderWidth="1px"
				borderStyle="solid"
				borderColor="gray.900"
				borderRadius="base"
				bg="navy.900"
				flexDir={{ base: 'column', lg: 'row' }}
				mb={{ base: '16px' }}
				position={{ lg: 'relative' }}
			>
				<Image
					src="/ornament.png"
					alt="Ornament"
					position={{ base: 'relative', lg: 'absolute' }}
					top={{ lg: 0 }}
					right={{ lg: 0 }}
					transform={{ lg: 'translate(0%, -7%)' }}
					w={{ base: '448px', md: '100%', lg: '418px' }}
					height={{ base: '289px', lg: '354px' }}
					objectFit={{ base: 'cover' }}
				/>
				<Flex
					flexDir="column"
					w={{ base: '100%', lg: '648px' }}
					p={{ base: '16px', md: '48px' }}
				>
					<Show below="sm">
						<Heading
							fontSize={{ base: '36px' }}
							lineHeight={{ base: '40px' }}
							fontWeight={{ base: '700' }}
						>
							Integrate Synthetix Perps with your Platform.
						</Heading>
					</Show>
					<Show above="sm">
						<Heading
							fontSize={{ base: '36px' }}
							lineHeight={{ base: '40px' }}
							fontWeight={{ base: '700' }}
						>
							Integrate Synthetix Perps <br /> with your Platform.
						</Heading>
					</Show>
					<Text mt="16px" color="gray.500" fontSize={{ base: '16px' }}>
						Learn more about how to integrate Perps and other Synthetix markets
						in our developer documentation and reach out to the developer
						over&nbsp;
						<Link
							href="https://discord.com/channels/413890591840272394/459603818246701056"
							color="cyan.500"
							target="_blank"
							rel="noopener noreferrer"
						>
							Synthetix Discord.
						</Link>
					</Text>
					<Button
						size={{ base: 'lg', md: 'sm' }}
						h={{ md: '40px' }}
						maxW={{ base: '205px' }}
						mt="24px"
						onClick={() =>
							window.open(
								'https://docs.synthetix.io/integrations/perps-integration-guide',
								'_blank',
								'noopener noreferrer',
							)
						}
					>
						<Text fontSize={{ base: '14px' }}>Integrate with Synthetix</Text>
					</Button>
				</Flex>
			</Flex>
		</Box>
	);
}
