import { Flex, Text, FlexProps, Heading, Image } from '@chakra-ui/react';
import { IntegratorCard } from 'src/components';
import { integrators } from 'src/utils/integrators';

const FrontEnds = ({ ...props }: FlexProps) => {
	return (
		<Flex
			id="frontends-integrators"
			maxW={{
				base: '100vw',
				md: '48rem',
				lg: '62rem',
				xl: '80rem',
				'2xl': '96rem',
			}}
			flexDirection="column"
			alignItems="center"
			position="relative"
			width="100%"
			my={{ base: '62px', md: '100px' }}
			px={{ base: '16px', lg: '24px' }}
			{...props}
		>
			<Heading
				mb="16px"
				w="100%"
				fontSize={{ base: '36px', md: '48px' }}
				fontWeight={{ base: '700' }}
			>
				Integrators
			</Heading>
			<Text color="gray.500" w="100%">
				Multiple front ends have chosen to integrate Synthetix’ composable and
				permissionless smart contracts.
			</Text>
			<Flex
				w="100%"
				flexWrap="wrap"
				justifyContent={{ lg: 'flex-start' }}
				columnGap={{ lg: '16px', xl: '24px' }}
			>
				{integrators.map((card, i) => (
					<IntegratorCard
						{...card}
						key={card.name.concat(i.toString())}
						uri={card.uri}
					/>
				))}
			</Flex>
		</Flex>
	);
};

export default FrontEnds;
