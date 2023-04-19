import {
	Flex,
	Text,
	FlexProps,
	Box,
	Divider,
	Link,
	Heading,
} from '@chakra-ui/react';
import { Decentrex, Kwenta, LooperGroup, SuperSynthyIcon } from 'src/svg';
import { ImArrowUpRight2 } from 'react-icons/im';

const FrontEnds = ({ ...props }: FlexProps) => {
	return (
		<Flex
			pt="48px"
			flexDirection="column"
			alignItems="center"
			position="relative"
			height={{ base: 'fit-content', md: '610px' }}
			width="100%"
			{...props}
			bg="radial-gradient(circle at left top, rgba(238, 46, 255, 0.3) 10%, transparent, transparent 80%),
			radial-gradient(circle at right bottom, rgba(0, 209, 255, 0.3) 10%, transparent, transparent 80%)"
		>
			<Heading textAlign="center" mb="16px">
				Integrators
			</Heading>
			<Text textAlign="center" color="gray.500">
				Multiple front ends have chosen to integrate Synthetix’ composable and
				permissionless smart contracts
			</Text>
			<Flex
				maxW="1200px"
				w="100%"
				flexDirection="column"
				alignItems="center"
			></Flex>
		</Flex>
	);
};

export default FrontEnds;
