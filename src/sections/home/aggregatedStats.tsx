import { Flex, Text, Box, Link, Button } from '@chakra-ui/react';
import millify from 'millify';
import { VolumeData } from 'src/typings';
import { links } from 'src/utils/constants';
import { numberWithCommas } from 'src/utils/formatters/number';

interface AggregatedStatsProps {
	tradingVolume: VolumeData;
	openInterestForLatestDate: number;
	markets: string;
	uniqueTradingAccounts: string;
}

export const AggregatedStats = ({
	tradingVolume,
	openInterestForLatestDate,
	markets,
	uniqueTradingAccounts,
}: AggregatedStatsProps) => {
	const volumeMillified = millify(
		Math.floor(tradingVolume?.cumulative_volume || 13590466291),
	);

	const oiMillified = millify(
		Math.floor(openInterestForLatestDate || 122087440),
	);

	return (
		<Box width="100%" my={{ base: '60px', lg: '100px' }} zIndex={1}>
			<Flex
				justifyContent="space-between"
				width="100%"
				flexDirection={{ base: 'column', lg: 'row' }}
			>
				<Flex flexDirection="column" mb={{ base: '24px', lg: 'unset' }}>
					<Text
						fontSize="16px"
						lineHeight="24px"
						color="white"
						mb="16px"
						fontFamily="heading"
					>
						ALL TIME VOLUME
					</Text>
					<Text textStyle="heading-4xl">${volumeMillified}</Text>
				</Flex>
				<Flex flexDirection="column" mb={{ base: '24px', lg: 'unset' }}>
					<Text
						fontSize="16px"
						lineHeight="24px"
						color="white"
						mb="16px"
						fontFamily="heading"
					>
						OPEN INTEREST
					</Text>
					<Text textStyle="heading-4xl">${oiMillified}</Text>
				</Flex>
				<Flex flexDirection="column" mb={{ base: '24px', lg: 'unset' }}>
					<Text
						fontSize="16px"
						lineHeight="24px"
						color="white"
						mb="16px"
						fontFamily="heading"
					>
						UNIQUE TRADING ACCOUNTS
					</Text>
					<Text textStyle="heading-4xl">
						{numberWithCommas(uniqueTradingAccounts)}
					</Text>
				</Flex>
				<Flex flexDirection="column" mb={{ base: '24px', lg: 'unset' }}>
					<Text
						fontSize="16px"
						lineHeight="24px"
						color="white"
						mb="16px"
						fontFamily="heading"
					>
						MARKETS
					</Text>
					<Text textStyle="heading-4xl">{markets}</Text>
				</Flex>
			</Flex>
			<Box mt="24px">
				<Link href={links.duneLink} target="_blank">
					<Button
						w="fit-content"
						variant="outline"
						colorScheme="gray"
						borderRadius="4px"
						fontWeight={700}
						fontSize="14px"
						padding="10px 16px"
						size={{ base: 'lg', md: 'md' }}
					>
						See All Stats
					</Button>
				</Link>
			</Box>
		</Box>
	);
};
