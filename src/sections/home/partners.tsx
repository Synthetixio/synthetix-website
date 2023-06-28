import { Box, Flex, Image, Text } from '@chakra-ui/react';

export const Partners = () => {
	return (
		<Box my="100px" width="100%">
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
				mt="16px"
				justifyContent="space-between"
				alignItems="center"
			>
				<Image alt="blocknative" src="/blocknative.svg" />
				<Image alt="cannon" src="/cannon.svg" />
				<Image alt="chainlink" src="/chainlinkText.svg" />
				<Image alt="infura" src="/infura.svg" />
				<Image height="29px" alt="iosiro" src="/iosiro.png" />
				<Image alt="macro" src="/macro.svg" />
				<Image alt="optimism" src="/optimism.svg" />
				<Image alt="pyth" src="/pythText.svg" />
			</Flex>
		</Box>
	);
};
