import { Flex } from '@chakra-ui/react';
import { IntegratorCard } from 'src/components';
import { integrators } from 'src/utils/integrators';

interface IntegratorsProps {
	sortList: string[];
}

export const Integrators = ({ sortList }: IntegratorsProps) => {
	// TOTAL HACK
	const largestDescription = integrators.reduce((prev, current) => {
		return prev.description.length > current.description.length
			? prev
			: current;
	});

	return (
		<Flex
			flexWrap="wrap"
			width="100%"
			justifyContent={{ base: 'space-between' }}
			mb={{ base: '100px', md: '50px', lg: '124px' }}
		>
			{integrators
				.sort((a, b) => {
					const aIndex = sortList.indexOf(a.name);
					const bIndex = sortList.indexOf(b.name);
					if (aIndex === -1) {
						return 1;
					}
					if (bIndex === -1) {
						return -1;
					}
					return aIndex - bIndex;
				})
				.map(({ description, link, name, uri, tag }, i) => (
					<IntegratorCard
						className="integratorCard"
						name={name}
						link={link}
						description={description}
						largestDescription={largestDescription.description}
						key={name.concat(i.toString())}
						uri={uri}
						tag={tag}
						mb={{ base: '24px' }}
						mr={{ lg: '24px' }}
						p={{ base: '24px' }}
						width={{
							base: '48.5%',
							md: '48.5%',
							lg: 'calc(32% - 12px)',
							xl: 'calc(24% - 12px)',
						}}
						minHeight="270px"
					/>
				))}
			<IntegratorCard
				_hover={{
					cursor: 'default',
				}}
				className="integratorCard"
				name={'Blank'}
				link={''}
				description={'Dummy card'}
				largestDescription={largestDescription.description}
				key={'blank'}
				uri={'/kwenta.svg'}
				tag={'Perps'}
				mb={{ base: '24px' }}
				mr={{ lg: '24px' }}
				p={{ base: '24px' }}
				width={{
					base: '48.5%',
					md: '48.5%',
					lg: 'calc(32% - 12px)',
					xl: 'calc(24% - 12px)',
				}}
				minHeight="270px"
				opacity={0}
				enabled={false}
				display={{ base: 'none', lg: 'initial', xl: 'none' }}
			/>
		</Flex>
	);
};
