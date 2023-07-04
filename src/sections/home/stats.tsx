import { Flex, Text, Box, Link, Button } from '@chakra-ui/react';
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
					<Text textStyle="heading-4xl">{`$${tvl}`}</Text>
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
					<Text textStyle="heading-4xl">{`$${cumulativeTradingFees}`}</Text>
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
