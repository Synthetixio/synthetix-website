import { Box, Button, Flex, Text } from '@chakra-ui/react';
import SNXMainLooper from 'src/svg/SNXMainLooper';

export const Hero = () => {
	const onClick = () => {
		if (typeof window !== 'undefined') {
			const ecosystem = document.getElementById('ecosystem');
			if (ecosystem) {
				ecosystem.scrollIntoView({ behavior: 'smooth' });
			}
		}
	};

	return (
		<Flex pt="182px" width="100%" id="hero" flexDirection="row">
			<Flex
				flexDirection="column"
				justifyContent="center"
				height="100%"
				pb={20}
				zIndex={2}
				mt="50px"
			>
				<Text
					as="h2"
					textStyle="heading-3xl"
					color="gray.50"
					mb="16px"
					width={{ base: '320px', md: '420px', lg: '525px', '2xl': '628px' }}
				>
					The Liquidity Layer of DeFi
				</Text>
				<Text
					mb="24px"
					fontSize="16px"
					lineHeight="24px"
					color="gray.500"
					fontFamily="heading"
					fontWeight={400}
					width={{ base: '100%', lg: '525px', '2xl': '628px' }}
				>
					Synthetix provides liquidity for permissionless derivatives like
					perpetual futures, options, parimutuel markets, and more across EVM
					chains. Powering the next generation of permissionless protocols.
				</Text>
				<Button
					gap="8px"
					p="10px 16px"
					borderRadius="4px"
					width="fit-content"
					onClick={onClick}
					size={{ base: 'lg', md: 'md' }}
				>
					Explore Ecosystem
				</Button>
			</Flex>
			<Box
				position="absolute"
				bg="#06061B"
				width="800px"
				height="800px"
				zIndex={1}
				borderRadius="100%"
				filter="blur(250px)"
				top="20px"
				left={{ base: '-500px' }}
			/>
			<SNXMainLooper
				top={{ base: '0px', md: '50px', lg: '100px' }}
				left={{ base: '-200px', sm: '-100px', md: 'unset' }}
				position="absolute"
				zIndex={0}
				width={{ base: '250%', sm: '200%', md: '175%', lg: 'unset' }}
			/>
		</Flex>
	);
};
