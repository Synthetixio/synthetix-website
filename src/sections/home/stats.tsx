import { Flex, Text, Box, Link } from '@chakra-ui/react';
import { links } from 'src/utils/constants';

interface StatsProps {
	tvl: string;
	uniqueStakers: string;
	cumulativeTradingFees: string;
}

export const Stats = ({
	tvl,
	uniqueStakers,
	cumulativeTradingFees,
}: StatsProps) => {
	return (
		<Box width="100%" my="100px">
			<Flex justifyContent="space-between" width="100%">
				<Flex flexDirection="column">
					<Text
						fontSize="16px"
						lineHeight="24px"
						color="gray.50"
						mb="16px"
						fontFamily="heading"
					>
						TVL
					</Text>
					<Text textStyle="heading-4xl">{`$${tvl}`}</Text>
				</Flex>
				<Flex flexDirection="column">
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
				<Flex flexDirection="column">
					<Text
						fontSize="16px"
						lineHeight="24px"
						color="gray.50"
						mb="16px"
						fontFamily="heading"
					>
						TOTAL TRADING FEES
					</Text>
					<Text textStyle="heading-4xl">{`$${cumulativeTradingFees}`}</Text>
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
