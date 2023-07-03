import { Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/react';
import { ExternalLink } from 'src/styles/common';
import { links } from 'src/utils/constants';

interface VolumeProps {
	tvl: string;
	cumulativeTradingVolume: string;
}

export const Volume = ({ tvl, cumulativeTradingVolume }: VolumeProps) => {
	return (
		<Box width="100%" position="relative" my={{ base: '50px', md: '100px' }}>
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
							lineHeight={{ base: '60px', md: '100px' }}
							fontSize={{ base: '60px', md: '100px' }}
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
							lineHeight={{ base: '60px', md: '100px' }}
							fontSize={{ base: '60px', md: '100px' }}
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
		</Box>
	);
};
