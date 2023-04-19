import {
	Box,
	Button,
	Flex,
	Heading,
	Text,
	useMediaQuery,
} from '@chakra-ui/react';
import LinkOffIcon from 'src/svg/LinkOffIcon';
import SNXPerpsLooper from 'src/svg/SNXPerpsLooper';

export default function FuturesMain() {
	const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
	return (
		<Box
			as="section"
			pos="relative"
			w="100%"
			height={isSmallerThan800 ? 'auto' : '600px'}
			bg="navy.900"
		>
			<SNXPerpsLooper
				position={isSmallerThan800 ? 'relative' : 'absolute'}
				top={isSmallerThan800 ? '0' : '-250px'}
				right={isSmallerThan800 ? '-50%' : '-200px'}
				transform={isSmallerThan800 ? 'translate(-50%,0)' : ''}
				mobile={isSmallerThan800}
			/>
			<Flex
				w="100%"
				h="100%"
				flexDir="column"
				justifyContent={'center'}
				p="24px"
				zIndex={5}
			>
				<Heading fontWeight={800} size="4xl" mb="24px">
					Decentralized <br /> Perpetual Futures
				</Heading>
				<Text size="md" color="gray.500" maxW="container.sm" mb="24px">
					Synthetix perpetual futures are a set of permissionless and
					decentralized smart contracts, offering deep liquidity and low trading
					fees on a range of synthetic assets. Third party integrators have
					decided to integrate with Synthetix.
				</Text>
				<Flex>
					<Button size="md" mr="24px">
						See Integrators
					</Button>
					<Button
						size="md"
						variant="outline"
						colorScheme="gray"
						rightIcon={<LinkOffIcon white />}
					>
						See Stats
					</Button>
				</Flex>
			</Flex>
		</Box>
	);
}
