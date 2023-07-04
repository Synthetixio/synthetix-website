import { Flex, Text, Box, Link, Button } from '@chakra-ui/react';
import millify from 'millify';
import { ActiveStakersData, VolumeData } from 'src/typings';
import { links } from 'src/utils/constants';
import { numberWithCommas } from 'src/utils/formatters/number';

interface StatsProps {
	activeStakers: ActiveStakersData;
	tradingVolume: VolumeData;
	totalStakedValue: number;
}

export const Stats = ({
	activeStakers,
	tradingVolume,
	totalStakedValue,
}: StatsProps) => {
	const uniqueStakers = numberWithCommas(activeStakers?.All_stakers.toFixed(0));
	const cumulativeTradingFeesMillified = millify(
		Math.floor(tradingVolume?.cumulative_fees || 12457449),
	);
	const tvlMillified = millify(totalStakedValue);
	return (
		<Box width="100%" my={{ base: '75px', lg: '100px' }} zIndex={1}>
			<Flex
				justifyContent="space-between"
				width="100%"
				flexDirection={{ base: 'column', lg: 'row' }}
			>
				<Flex flexDirection="column" mb={{ base: '48px', lg: 'unset' }}>
					<Text
						fontSize="16px"
						lineHeight="24px"
						color="gray.50"
						mb="16px"
						fontFamily="heading"
					>
						TVL
					</Text>
					<Text textStyle="heading-4xl">${tvlMillified}</Text>
				</Flex>
				<Flex flexDirection="column" mb={{ base: '48px', lg: 'unset' }}>
					<Text
						fontSize="16px"
						lineHeight="24px"
						color="gray.50"
						mb="16px"
						fontFamily="heading"
					>
						UNIQUE STAKERS
					</Text>
					<Text textStyle="heading-4xl">{uniqueStakers}</Text>
				</Flex>
				<Flex flexDirection="column" mb={{ base: '48px', lg: 'unset' }}>
					<Text
						fontSize="16px"
						lineHeight="24px"
						color="gray.50"
						mb="16px"
						fontFamily="heading"
					>
						TOTAL TRADING FEES
					</Text>
					<Text textStyle="heading-4xl">${cumulativeTradingFeesMillified}</Text>
				</Flex>
			</Flex>
			<Box mt="24px">
				<Link href={links.duneLink} target="_blank">
					<Button
						w="fit-content"
						size={{ base: 'lg', xl: 'md' }}
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
	);
};
