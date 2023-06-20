import { Flex, SimpleGrid } from '@chakra-ui/react';
import { IntegratorCard } from 'src/components';
import { integrators } from 'src/utils/integrators';

export const Integrators = () => {
	return (
		<SimpleGrid
			w="100%"
			columns={2}
			spacingX="400px"
			spacingY="20px"
			// flexWrap="wrap"
			// alignItems="stretch"
			justifyContent={{ lg: 'flex-start' }}
			columnGap={{ lg: '16px', xl: '24px' }}
			my={20}
		>
			{integrators.map(({ description, link, name, uri, tag }, i) => (
				<IntegratorCard
					name={name}
					link={link}
					description={description}
					key={name.concat(i.toString())}
					uri={uri}
					tag={tag}
					mt={{ base: '24px' }}
					p={{ base: '24px' }}
					w="22.5%"
					flex="1 0 auto"
				/>
			))}
		</SimpleGrid>
	);
};
