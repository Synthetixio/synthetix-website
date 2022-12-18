import { useState } from 'react';
import { Flex, FlexProps, Text, Button, Link } from '@chakra-ui/react';
import { PerpetualSynth } from 'pages/perps';
import FutureSynthCard from 'src/components/FutureSynthCard';

interface PerpetualsProps extends FlexProps {
	synths: PerpetualSynth[];
}

const perpV2Synths = ['sETH'];

export default function Perpetuals({ synths, ...props }: PerpetualsProps) {
	const [activeTab, setActiveTab] = useState('all');
	const [activeVersion, setActiveVersion] = useState<'V1' | 'V2'>('V1');

	let tabs: string[] = ['all'];

	const synthsDictionaryV1: Record<string, JSX.Element[]> = {
		all: [],
	};

	const synthsV2: PerpetualSynth[] = [];

	synths.forEach(synth => {
		if (perpV2Synths.includes(synth.name)) {
			synthsV2.push(synth);
		}
	});

	synths.forEach(synth => {
		if (!tabs.includes(synth.category)) {
			tabs.push(synth.category);
			synthsDictionaryV1[synth.category] = [];
		}
		synthsDictionaryV1[synth.category].push(
			<FutureSynthCard key={synth.name} {...synth} />,
		);
		synthsDictionaryV1.all.push(
			<FutureSynthCard key={synth.name} {...synth} />,
		);
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
				<Button
					onClick={() => setActiveVersion('V1')}
					color={activeVersion === 'V1' ? 'cyan.500' : '#ffffff50'}
					bg="#0e052d"
					bgGradient="unset"
					_hover={{ bgGradient: 'unset' }}
					_active={{ bg: '#0e052d' }}
					textTransform="uppercase"
					width="100px"
					fontFamily="GT America"
					lineHeight="48px"
					sx={{ fontStretch: 'expanded' }}
					mx={4}
				>
					Perps V1
				</Button>
				<Button
					onClick={() => setActiveVersion('V2')}
					color={activeVersion === 'V2' ? 'cyan.500' : '#ffffff50'}
					bg="#0e052d"
					bgGradient="unset"
					_hover={{ bgGradient: 'unset' }}
					_active={{ bg: '#0e052d' }}
					textTransform="uppercase"
					width="100px"
					fontFamily="GT America"
					lineHeight="48px"
					sx={{ fontStretch: 'expanded' }}
					mx={4}
				>
					Perps V2
				</Button>
			</Flex>
			{activeVersion === 'V1' && (
				<>
					<Flex width="100%" maxWidth="800px" justifyContent="center" mb={10}>
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
					<Flex
						width="100%"
						justifyContent="center"
						flexWrap="wrap"
						maxW="1920px"
					>
						{synthsDictionaryV1[activeTab]}
					</Flex>
				</>
			)}
			{activeVersion === 'V2' && (
				<>
					<Flex width="100%" maxWidth="800px" justifyContent="center" mb={10}>
						{synthsV2.map(synth => {
							return (
								<FutureSynthCard
									name={synth.name}
									category={synth.category}
									priceChange={synth.priceChange}
									priceInUSD={synth.priceInUSD}
								/>
							);
						})}
					</Flex>
					<Text
						textAlign="center"
						fontSize="14px"
						lineHeight="20px"
						opacity={0.7}
					>
						Markets are dependant on{' '}
						<Link
							color="cyan.500"
							href="https://sips.synthetix.io/all-sip/"
							target="_blank"
						>
							governance
						</Link>
					</Text>
				</>
			)}
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
