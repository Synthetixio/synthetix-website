import { Line, Section } from 'src/components';
import { FlexDivColCentered, SectionTitle, Subline } from 'src/styles/common';
import styled from 'styled-components';
import media from 'styled-media-query';

const images: Record<'title' | 'link', string>[] = [
	{
		link: '/home/powered-by/1inch.png',
		title: '1INCH',
	},
	{
		link: '/home/powered-by/crv.png',
		title: 'CURVE',
	},
	{
		link: '/home/powered-by/dhedge.png',
		title: 'DHEDGE',
	},
	{
		link: '/home/powered-by/para.png',
		title: 'PARASWAP',
	},
	{
		link: '/home/powered-by/yearn.png',
		title: 'YEARN',
	},
];

export default function Ecosystem() {
	return (
		<EcoSystemSection>
			<EcosystemSectionTitle>SYNTHETIX ECOSYSTEM</EcosystemSectionTitle>
			<Subline>
				Many platforms already leverage the deep liquidity and composability of Synthetix to deliver
				better trades with lower slippage, hedging, and other unique use cases.
			</Subline>
			<ImageContainer>
				{images.map((image) => (
					<FlexDivColCentered key={image.title}>
						<Image src={image.link} />
						<ImageTitle>{image.title}</ImageTitle>
					</FlexDivColCentered>
				))}
			</ImageContainer>
			<Line />
		</EcoSystemSection>
	);
}

const EcoSystemSection = styled(Section)`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.bgBlackHighlighted};
	padding: 50px 100px 120px;

	${media.lessThan('medium')`
		align-items: start;
		padding: 0 40px;
		background-color: transparent;
		`}
`;

const EcosystemSectionTitle = styled(SectionTitle)`
	text-align: center;
	${media.lessThan('medium')`
		text-align:start;
	`}
`;

const ImageContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	margin-top: 80px;
	width: 100%;

	${media.lessThan('large')`
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 40px;
	`}

	${media.lessThan('medium')`
		margin-bottom: 40px;
	`}
`;

const Image = styled.img`
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
