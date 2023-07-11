import { Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/react';
import { VolumeData } from 'src/typings';
import { links } from 'src/utils/constants';
import { numberWithCommas } from 'src/utils/formatters/number';

interface VolumeProps {
	totalStakedValue: number;
	swapsVolumeTotal: number;
	tradingVolume: VolumeData;
}

export const Volume = ({
	totalStakedValue,
	tradingVolume,
	swapsVolumeTotal,
}: VolumeProps) => {
	const tvl = `${numberWithCommas(totalStakedValue?.toFixed(0))}`;

	const cumulativeTradingVolume = `${numberWithCommas(
		(
			tradingVolume?.cumulative_volume +
			5765647285 + // Note Include Perps V1 Volume https://dune.com/queries/541996/1018884 (retired product)
			swapsVolumeTotal
		).toFixed(),
	)}`;

	return (
		<Box width="100%" position="relative" my={{ base: '60px', md: '100px' }}>
			<Box zIndex={1} position="relative">
				<Flex flexDirection="column" width="100%">
					<Flex flexDirection="column">
						<Text
							fontSize="16px"
							lineHeight="24px"
							color="white"
							fontFamily="heading"
							mb="16px"
						>
							TRADING VOLUME
						</Text>
						<Heading
							fontFamily="heading"
							fontWeight={700}
							lineHeight={{ base: '44px', md: '90px' }}
							fontSize={{ base: '44px', md: '90px' }}
							color="gray.50"
						>
							{cumulativeTradingVolume}
						</Heading>
					</Flex>
					<Flex flexDirection="column" mt="48px">
						<Text
							fontSize="16px"
							lineHeight="24px"
							color="white"
							fontFamily="heading"
							mb="16px"
						>
							TOTAL VALUE LOCKED
						</Text>
						<Heading
							fontFamily="heading"
							fontWeight={700}
							lineHeight={{ base: '44px', md: '90px' }}
							fontSize={{ base: '44px', md: '90px' }}
							color="gray.50"
						>
							{tvl}
						</Heading>
					</Flex>
				</Flex>
				<Box mt="24px">
					<Link href={links.duneLink} target="_blank">
						<Button
							w="fit-content"
							size={{ base: 'lg', md: 'md' }}
							variant="outline"
							colorScheme="gray"
							borderRadius="4px"
							fontWeight={700}
							fontSize="14px"
							padding="10px 16px"
						>
							See All Stats
						</Button>
					</Link>
				</Box>
			</Box>
		</Box>
	);
};
