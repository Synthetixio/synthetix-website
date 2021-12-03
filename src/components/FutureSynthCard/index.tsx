import { PerpetualSynth } from 'pages/futures';
import { FlexDiv } from 'src/styles/common';
import { theme } from 'src/styles/theme';
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
			<StyledSynthImage
				src={`https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/${name}.svg`}
			/>
			<StyledFutureContent>
				<FlexDiv>
					<StyledSynthName>{name}</StyledSynthName>
					<svg
						width="14"
						height="16"
						viewBox="0 0 14 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						transform={`rotate(${priceChange >= 0 ? 0 : '180'})`}
						style={{ marginTop: 2 }}
					>
						<path
							d="M13.7 6.7L12.3 8.1L8 3.8L8 16L6 16L6 3.8L1.7 8.1L0.299997 6.7L7 -5.85733e-07L13.7 6.7Z"
							fill={priceChange >= 0 ? theme.colors.green : theme.colors.red}
						/>
					</svg>
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
