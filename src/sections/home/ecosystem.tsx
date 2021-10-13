import { Line, Section } from 'src/components';
import { FlexDivColCentered, SectionTitle, Subline } from 'src/styles/common';
import styled from 'styled-components';
import media from 'styled-media-query';

const images: Record<'title' | 'link', string>[] = [
	{
		link: '/home/powered-by/1inch.svg',
		title: '1INCH',
	},
	{
		link: '/home/powered-by/crv.svg',
		title: '1INCH',
	},
	{
		link: '/home/powered-by/dhedge.svg',
		title: '1INCH',
	},
	{
		link: '/home/powered-by/para.svg',
		title: '1INCH',
	},
	{
		link: '/home/powered-by/yearn.svg',
		title: '1INCH',
	},
];

export default function Ecosystem() {
	return (
		<EcoSystemSection>
			<SectionTitle>SYNTHETIX ECOSYSTEM</SectionTitle>
			<Subline>
				Many platforms already leverage the deep liquidity and composability of Synthetix to deliver
				better trades with lower slippage, hedging, and other unique use cases.
			</Subline>
			<ImageContainer>
				{images.map((image) => (
					<FlexDivColCentered>
						<Image src={image.link} />
						<span>{image.title}</span>
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
	padding: 0px 100px 120px;

	${media.lessThan('medium')`
		align-items: start;
		padding: 0 40px;
		background-color: transparent;
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
`;

const Image = styled.img`
	width: 114px;
	height: 114px;
`;
