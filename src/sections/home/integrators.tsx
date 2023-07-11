import { Flex } from '@chakra-ui/react';
import { IntegratorCard } from 'src/components';
import { integrators } from 'src/utils/integrators';

interface IntegratorsProps {
	sortList: string[];
}

export const Integrators = ({ sortList }: IntegratorsProps) => {
	// We use this element (with display none) to get the largest description length.
	// This means we will have consistent heights across cards.
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
			mb={{ base: '60px', md: '100px' }}
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
				.map(
					(
						{
							description,
							link,
							name,
							uri,
							tag,
							height: iconHeight,
							width: iconWidth,
						},
						i,
					) => (
						<IntegratorCard
							className="integratorCard"
							name={name}
							link={link}
							description={description}
							largestDescription={largestDescription.description}
							key={name.concat(i.toString())}
							uri={uri}
							tag={tag}
							mb={{ base: '16px' }}
							p={{ base: '24px' }}
							width={{
								base: 'calc(50% - 10px)',
								lg: 'calc(33% - 10.85px)',
								xl: 'calc(25% - 16px)',
							}}
							minHeight={{ md: '270px' }}
							imageHeight={iconHeight}
							imageWidth={iconWidth}
						/>
					),
				)}
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
				mb={{ base: '16px' }}
				p={{ base: '24px' }}
				width={{
					base: 'calc(50% - 10px)',
					lg: 'calc(33% - 10.85px)',
					xl: 'calc(25% - 16px)',
				}}
				minHeight={{ md: '270px' }}
				opacity={0}
				enabled={false}
				display={{ base: 'none', lg: 'initial', xl: 'none' }}
			/>
		</Flex>
	);
};
