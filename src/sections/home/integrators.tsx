import { Flex } from '@chakra-ui/react';
import { IntegratorCard } from 'src/components';
import { integrators } from 'src/utils/integrators';

export const Integrators = () => {
	// TOTAL HACK
	const largestDescription = integrators.reduce((prev, current) => {
		return prev.description.length > current.description.length
			? prev
			: current;
	});

	return (
		<Flex
			flexWrap="wrap"
			my={20}
			width="100%"
			justifyContent={{ base: 'space-between', lg: 'flex-start' }}
		>
			{integrators.map(({ description, link, name, uri, tag }, i) => (
				<IntegratorCard
					className="integratorCard"
					name={name}
					link={link}
					description={description}
					largestDescription={largestDescription.description}
					key={name.concat(i.toString())}
					uri={uri}
					tag={tag}
					mt={{ base: '24px' }}
					mr={{ lg: '24px' }}
					p={{ base: '24px' }}
					width={{
						base: '100%',
						md: 'calc(50% - 12px)',
						lg: 'calc(30% - 12px)',
						xl: 'calc(22% - 12px)',
					}}
				/>
			))}
		</Flex>
	);
};
