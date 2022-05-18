import { ExternalLink, Section, SectionTitle } from '../../styles/common';
import { Subline } from 'src/styles/common';
import styled from 'styled-components';
import media from 'styled-media-query';
import OneInch from '/public/powered-by/1inch.svg';
import Curve from '/public/powered-by/crv.svg';
import Dhedge from '/public/powered-by/dhedge.svg';
import Paraswap from '/public/powered-by/para.svg';
import Yearn from '/public/powered-by/yearn.svg';
import Aelin from '/public/powered-by/aelin.svg';
import Image from 'next/image';

interface ImageProps {
	title: string;
	image: StaticImageData;
	link: string;
}

const images: ImageProps[] = [
	{
		image: OneInch,
		title: '1INCH',
		link: 'https://1inch.io/',
	},
	{
		image: Curve,
		title: 'CURVE',
		link: 'https://curve.fi/',
	},
	{
		image: Dhedge,
		title: 'DHEDGE',
		link: 'https://www.dhedge.org/',
	},
	{
		image: Paraswap,
		title: 'PARASWAP',
		link: 'https://paraswap.io/',
	},
	{
		image: Yearn,
		title: 'YEARN',
		link: 'https://yearn.finance/',
	},
	{
		image: Aelin,
		title: 'AELIN',
		link: 'https://aelin.xyz/',
	},
];

export default function Ecosystem() {
	return (
		<EcoSystemSection customMaxWidth={true}>
			<EcosystemSectionTitle>SYNTHETIX ECOSYSTEM</EcosystemSectionTitle>
			<EcosystemSubline>
				Many platforms already leverage the deep liquidity and composability of Synthetix to deliver
				better trades with lower slippage, hedging, and other unique use cases.
			</EcosystemSubline>
			<ImageContainer>
				{images.map((image) => (
					<ImageInner key={image.link} href={image.link}>
						<StyledImage src={image.image} width="100%" height="100%" />
						<ImageTitle>{image.title}</ImageTitle>
					</ImageInner>
				))}
			</ImageContainer>
		</EcoSystemSection>
	);
}

const EcoSystemSection = styled(Section)`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.bgBlackHighlighted};
	padding: 0px 100px 120px;

	${media.lessThan('medium')`
		padding: 20px 40px;
		background-color: transparent;
		`}
`;

const EcosystemSectionTitle = styled(SectionTitle)`
	text-align: center;
	margin-bottom: 14px;
	${media.greaterThan('large')`
		padding-top:40px;
	`}
`;

const EcosystemSubline = styled(Subline)`
	max-width: 700px;
	text-align: center;
`;

const ImageContainer = styled.div`
	max-width: ${({ theme }) => theme.maxContentWidth};
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	margin-top: 80px;
	width: 100%;
	cursor: pointer;

	${media.lessThan('large')`
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 40px;
	`}

	${media.lessThan('medium')`
		margin-bottom: 40px;
	`}
`;

const ImageInner = styled(ExternalLink)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledImage = styled(Image)`
	width: 114px;
	height: 114px;
`;

const ImageTitle = styled.span`
	font-family: GT America;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	color: white;
	font-stretch: expanded;
`;
