import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Link,
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
			px="16px"
		>
			<Flex
				w="100%"
				borderWidth="1px"
				borderStyle="solid"
				borderColor="gray.900"
				borderRadius="base"
				bg="navy.900"
				flexDir={{ base: 'column' }}
				mb={{ base: '16px' }}
			>
				<Image
					src="/ornament.png"
					alt="Ornament"
					w={{ base: '448px' }}
					height={{ base: '216px' }}
					objectFit="none"
				/>
				<Flex
					flexDir="column"
					maxW="600px"
					w="100%"
					p={{ base: '16px', xl: '48px' }}
				>
					<Heading
						fontSize={{ base: '30px', md: '36px' }}
						lineHeight={{ base: '40px' }}
						fontWeight={{ base: '700' }}
					>
						Want to integrate Synthetix Perps with your Platform?
					</Heading>
					<Text mt="16px" color="gray.500" fontSize={{ base: '16px' }}>
						Learn more about how to integrate Perps and other Synthetix markets
						in our developer documentation and reach out to the developers
						at&nbsp;
						<Link href="mailto: perps@snxdao.io" color="cyan.500">
							perps@snxdao.io.
						</Link>
					</Text>
					<Button
						size="lg"
						maxW={{ base: '205px' }}
						mt="24px"
						onClick={() =>
							window.open(
								'https://discord.com/invite/AEdUHzt',
								'_blank',
								'noopener noreferrer',
							)
						}
						fontSize={{ base: '14px' }}
					>
						Integrate with Synthetix
					</Button>
				</Flex>
			</Flex>
		</Box>
	);
}
