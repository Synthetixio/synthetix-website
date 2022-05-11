import { PerpetualSynth } from 'pages/futures';
import { getAssetLogo } from 'src/constants/urls';
import { FlexDiv } from 'src/styles/common';
import PriceArrow from 'src/svg/PriceArrow';
import styled from 'styled-components';

export default function FutureSynthCard({
	priceChange,
	priceInUSD,
	volume,
	category,
	name,
}: PerpetualSynth) {
	return (
		<StyledFutureSynthCard>
			<StyledSynthImage src={getAssetLogo(name)} />
			<StyledFutureContent>
				<FlexDiv>
					<StyledSynthName>{name}</StyledSynthName>
					<PriceArrow priceChange={priceChange} />
					<StyledPriceChange positive={priceChange >= 0}>
						{priceChange.toFixed(2)}%
					</StyledPriceChange>
				</FlexDiv>
				<StyledSynthCategory>{category}</StyledSynthCategory>
				<StyledPrefix>
					<StyledSynthPrice>{priceInUSD}</StyledSynthPrice> USD
				</StyledPrefix>
				<StyledPrefix>
					VOL &nbsp;
					<StyledSynthVolume>${volume}</StyledSynthVolume>
				</StyledPrefix>
			</StyledFutureContent>
		</StyledFutureSynthCard>
	);
}

const StyledFutureSynthCard = styled.div`
	width: 298px;
	height: 152px;
	background-color: #10104e;
	border-radius: 5px;
	display: flex;
	padding: 24px;
	margin: 16px;
`;

const StyledFutureContent = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	margin-left: 12px;
`;

const StyledPriceChange = styled.span<{ positive: boolean }>`
	color: ${({ positive, theme }) => (positive ? theme.colors.green : theme.colors.red)};
	font-family: Inter;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 24px;
	margin-left: 8px;
`;

const StyledSynthName = styled.h6`
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 24px;
	color: white;
	margin-right: auto;
`;

const StyledSynthImage = styled.img`
	width: 48px;
	height: 48px;
`;

const StyledSynthCategory = styled.span`
	font-family: Inter;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 24px;
	text-transform: uppercase;
`;

const StyledPrefix = styled.span`
	font-style: normal;
	font-size: 16px;
	line-height: 20px;
	margin-top: 12px;
`;

const StyledSynthPrice = styled.span`
	font-family: GT America;
	font-style: normal;
	font-weight: 900;
	font-size: 18px;
	line-height: 20px;
	color: white;
	margin-top: 12px;
`;

const StyledSynthVolume = styled.span`
	font-family: GT America;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 20px;
	color: white;
	margin-top: 4px;
`;
