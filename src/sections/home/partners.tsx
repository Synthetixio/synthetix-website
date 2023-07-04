import { Box, Flex, Image, Text } from '@chakra-ui/react';

export const Partners = () => {
	return (
		<Box my={{ base: '60px', lg: '120px' }} width="100%">
			<Text
				color="gray.500"
				fontSize="16px"
				lineHeight="24px"
				fontFamily="heading"
			>
				INFRASTRUCTURE PARTNERS
			</Text>
			<Flex
				w="100%"
				justifyContent={{ base: 'start', xl: 'space-between' }}
				alignItems="center"
				flexWrap={{ base: 'wrap', xl: 'nowrap' }}
			>
				<Image alt="blocknative" src="/blocknative.svg" mr="16px" mt="16px" />
				<Image alt="cannon" src="/cannon.svg" mr="16px" mt="16px" />
				<Image alt="chainlink" src="/chainlinkText.svg" mr="16px" mt="16px" />
				<Image alt="infura" src="/infura.svg" mr="16px" mt="16px" />
				<Image
					height="29px"
					alt="iosiro"
					src="/iosiro.svg"
					mr="16px"
					mt="16px"
				/>
				<Image alt="macro" src="/macro.svg" mr="16px" mt="16px" />
				<Image alt="optimism" src="/optimism.svg" mr="16px" mt="16px" />
				<Image alt="pyth" src="/pythText.svg" mr="16px" mt="16px" />
			</Flex>
		</Box>
	);
};
