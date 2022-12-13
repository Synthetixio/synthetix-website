import { useState } from 'react';
import { Flex, FlexProps, Text, Button, Link } from '@chakra-ui/react';
import { PerpetualSynth } from 'pages/futures';
import FutureSynthCard from 'src/components/FutureSynthCard';

interface PerpetualsProps extends FlexProps {
	synths: PerpetualSynth[];
}

export default function Perpetuals({ synths, ...props }: PerpetualsProps) {
	const [activeTab, setActiveTab] = useState('all');

	let tabs: string[] = ['all'];

	const synthsDictionary: Record<string, JSX.Element[]> = {
		all: [],
	};

	synths.forEach(synth => {
		if (!tabs.includes(synth.category)) {
			tabs.push(synth.category);
			synthsDictionary[synth.category] = [];
		}
		synthsDictionary[synth.category].push(
			<FutureSynthCard key={synth.name} {...synth} />,
		);
		synthsDictionary.all.push(<FutureSynthCard key={synth.name} {...synth} />);
	});

	return (
		<Flex flexDirection="column" alignItems="center" mt={8} {...props}>
			<Text
				fontFamily="GT America"
				fontWeight="900"
				fontSize={{ base: '20px', sm: '24px', md: '28px', lg: '32px' }}
				mt={{ base: 4, md: 0 }}
				lineHeight="35px"
				textTransform="uppercase"
				sx={{ fontStretch: 'expanded' }}
				mb={4}
				px={4}
				width={{ base: '80%' }}
				textAlign="center"
			>
				Trading Perpetuals
			</Text>
			<Text
				opacity={0.7}
				width={{ base: '90%', md: '50%' }}
				textAlign="center"
				fontSize="14px"
				lineHeight="20px"
			>
				Leveraging the Synthetix debt pool and our innovative liquidity
				framework, our traders are guaranteed to have some of the best price
				execution around, with little to no slippage and fills you can’t get
				elsewhere.
			</Text>
			<Flex width="100%" maxWidth="800px" justifyContent="center" my={10}>
				{tabs.map(tab => (
					<Button
						key={tab}
						onClick={() => setActiveTab(tab)}
						color={activeTab === tab ? 'cyan.500' : '#ffffff50'}
						bg="#0e052d"
						bgGradient="unset"
						_hover={{ bgGradient: 'unset' }}
						_active={{ bg: '#0e052d' }}
						textTransform="uppercase"
						width="100px"
						fontFamily="GT America"
						lineHeight="48px"
						sx={{ fontStretch: 'expanded' }}
					>
						{tab}
					</Button>
				))}
			</Flex>
			<Flex width="100%" justifyContent="center" flexWrap="wrap" maxW="1920px">
				{synthsDictionary[activeTab]}
			</Flex>
			<Link
				my={20}
				href="https://kwenta.io/"
				bg="cyan.500"
				maxWidth="687px"
				borderRadius="4px"
				py={4}
				mx={8}
				color="#0E052F"
				textAlign="center"
				textTransform="uppercase"
				fontWeight="700"
				fontFamily="GT America"
				_hover={{ textDecoration: 'none', bg: 'cyan.600' }}
				target="_blank"
				width="80%"
			>
				Trade Perpetual Futures
			</Link>
		</Flex>
	);
}
