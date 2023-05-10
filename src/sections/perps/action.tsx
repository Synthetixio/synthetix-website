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
			px={{ base: '16px', lg: '24px' }}
			my="62px"
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
					w={{ base: '448px', md: '100%', lg: '320px' }}
					height={{ base: '289px', lg: '257px' }}
					objectFit={{ base: 'none', md: 'cover', lg: 'none' }}
				/>
				<Flex
					flexDir="column"
					w={{ base: '100%', lg: '648px' }}
					p={{ base: '32px 16px 16px 16px', lg: '24px 0px 24px 24px' }}
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
						size={{ base: 'lg', md: 'sm' }}
						h={{ md: '40px' }}
						maxW={{ base: '205px' }}
						mt="24px"
						onClick={() =>
							window.open(
								'https://discord.com/invite/AEdUHzt',
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
