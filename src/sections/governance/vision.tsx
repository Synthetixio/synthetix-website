import { Button, Flex, Heading, Link, Text } from '@chakra-ui/react';
import { InterestedLooper } from 'src/svg/InterestedLooper';
import { links } from 'src/utils/constants';

export const Vision = () => {
	return (
		<Flex
			flexDir="column"
			rounded="base"
			boxShadow="dark-lg"
			bg="navy.700"
			border="1px solid"
			borderColor="gray.900"
			p={{ base: '6', lg: 12 }}
			mb={{ base: '4' }}
			mt={{ base: 4, lg: 6 }}
			zIndex={10}
			pos="relative"
			overflow="hidden"
			w="100%"
		>
			<InterestedLooper
				position="absolute"
				top="-100px"
				right="-50px"
				bottom="0px"
				zIndex={0}
				height="490px"
				viewBox="0 0 590 488px"
			/>
			<Heading
				mb={{ base: 12, lg: 4 }}
				mt={{ base: '390px', lg: 0 }}
				maxW={{ lg: '399px', xl: '700px' }}
			>
				Synthetix Vision 2025
			</Heading>

			<Text
				display="inline"
				fontSize={{ base: '16px' }}
				color="gray.500"
				maxW={{ lg: '399px', xl: '700px' }}
			>
				Our new roadmap and vision realign our efforts, increase awareness in
				the crypto community, and set clear objectives for Synthetix&apos;s
				future.
			</Text>

			<Link href={links.vision} target="_blank">
				<Button mt={{ base: '6' }}>Explore Our Vision</Button>
			</Link>
		</Flex>
	);
};
