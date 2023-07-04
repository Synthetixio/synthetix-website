import { Button, Flex, Text } from '@chakra-ui/react';
import SNXMainLooperPlaceholder from 'src/svg/SNXMainLooperPlaceholder';

export const Hero = () => {
	let onClick = () => {};

	if (typeof window !== 'undefined') {
		onClick = () => {
			const ecosystem = document.getElementById('ecosystem');
			if (ecosystem) {
				ecosystem.scrollIntoView({ behavior: 'smooth' });
			}
		};
	}

	return (
		<Flex
			pt="182px"
			width="100%"
			id="hero"
			flexDirection={{ base: 'column-reverse', xl: 'row' }}
		>
			<Flex
				flexDirection="column"
				justifyContent="center"
				height="100%"
				pb={20}
				zIndex={1}
				mt={{ base: '400px', xl: '50px' }}
			>
				<Text
					as="h2"
					textStyle="heading-3xl"
					color="gray.50"
					mb="16px"
					width={{ base: '320px', md: '420px', lg: '500px', '2xl': '580px' }}
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
			<Flex position="relative" width="100%" justifyContent="center">
				<SNXMainLooperPlaceholder
					transform={{
						base: 'translate(0%, -20%)',
						md: 'translate(0%, -15%)',
						xl: 'translate(0%, -10%)',
					}}
					top="-130px"
					width={{ base: '600px', md: '700px', xl: '800px' }}
					position={{ base: 'absolute' }}
					zIndex={0}
				/>
			</Flex>
		</Flex>
	);
};
