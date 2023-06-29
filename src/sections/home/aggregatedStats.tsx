import { Flex, Text, Box, Link } from '@chakra-ui/react';
import { links } from 'src/utils/constants';

interface AggregatedStatsProps {
	allTimeVolume: string;
	openInterest: string;
	uniqueTradingAccounts: string;
	markets: string;
}

export const AggregatedStats = ({
	allTimeVolume,
	openInterest,
	uniqueTradingAccounts,
	markets,
}: AggregatedStatsProps) => {
	return (
		<Box width="100%" my="100px">
			<Flex justifyContent="space-between" width="100%">
				<Flex flexDirection="column">
					<Text
						fontSize="16px"
						lineHeight="24px"
						color="white"
						mb="16px"
						fontFamily="heading"
					>
						ALL TIME VOLUME
					</Text>
					<Text textStyle="heading-4xl">${allTimeVolume}</Text>
				</Flex>
				<Flex flexDirection="column">
					<Text
						fontSize="16px"
						lineHeight="24px"
						color="white"
						mb="16px"
						fontFamily="heading"
					>
						OPEN INTEREST
					</Text>
					<Text textStyle="heading-4xl">${openInterest}</Text>
				</Flex>
				<Flex flexDirection="column">
					<Text
						fontSize="16px"
						lineHeight="24px"
						color="white"
						mb="16px"
						fontFamily="heading"
					>
						UNIQUE TRADING ACCOUNTS
					</Text>
					<Text textStyle="heading-4xl">{uniqueTradingAccounts}</Text>
				</Flex>
				<Flex flexDirection="column">
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
				<Link
					padding="10px 16px"
					bg="transparent"
					bgGradient="none"
					color="white"
					border="1px"
					borderColor="gray.900"
					borderRadius="4px"
					fontSize="14px"
					fontWeight={700}
					fontFamily="heading"
					_hover={{
						bg: 'gray.900',
					}}
					_active={{
						bg: 'gray.900',
					}}
					href={links.duneLink}
					target="_blank"
				>
					See All Stats
				</Link>
			</Box>
		</Box>
	);
};
