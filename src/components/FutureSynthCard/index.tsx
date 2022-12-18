import { Flex, Image, Text } from '@chakra-ui/react';
import { PerpetualSynth } from 'pages/perps';
import { getAssetLogo } from 'src/constants/urls';
import PriceArrow from 'src/svg/PriceArrow';

export default function FutureSynthCard({
	priceChange,
	priceInUSD,
	volume,
	category,
	name,
}: PerpetualSynth) {
	return (
		<Flex
			width="298px"
			height="165px"
			bg="#10104e"
			borderRadius="5px"
			p="24px"
			m={4}
		>
			<Image height="48px" width="48px" src={getAssetLogo(name)} />
			<Flex width="100%" flexDirection="column" ml="12px">
				<Flex justifyContent="space-between">
					<Flex flexDirection="column">
						<Text
							fontFamily="Poppins"
							fontSize="18px"
							fontWeight="500"
							lineHeight="24px"
							mr="auto"
						>
							{name}
						</Text>
						<Text
							fontFamily="heading"
							fontWeight="600"
							lineHeight="20px"
							fontSize="14px"
							textTransform="uppercase"
							color="#808191"
						>
							{category}
						</Text>
					</Flex>
					<Flex>
						<PriceArrow priceChange={priceChange} />
						<Text
							fontFamily="heading"
							ml={2}
							color={priceChange >= 0 ? '#31D8A4' : '#FF7A68'}
							lineHeight="20px"
							fontWeight="700"
						>
							{priceChange.toFixed(2)}%
						</Text>
					</Flex>
				</Flex>
				<Text
					fontSize="16px"
					lineHeight="20px"
					mt={4}
					sx={{ fontStretch: 'expanded' }}
				>
					<Text
						fontFamily="GT America"
						fontStyle="normal"
						fontWeight="900"
						fontSize="18px"
						lineHeight="20px"
						mt={2}
						mr={2}
						as="span"
					>
						{priceInUSD}
					</Text>
					USD
				</Text>
				<Text fontSize="16px" lineHeight="20px" mt={4}>
					VOL &nbsp;
					<Text
						fontFamily="heading"
						fontSize="16px"
						lineHeight="20px"
						mt={1}
						as="span"
						color="#808191"
					>
						${volume}
					</Text>
				</Text>
			</Flex>
		</Flex>
	);
}
