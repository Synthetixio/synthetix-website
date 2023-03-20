import { FC } from 'react';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { ExternalLink, FlexDivCentered, FlexDivRowCentered } from 'src/styles/common';

import { Synth } from '@synthetixio/contracts-interface';

import { formatFiatCurrency, formatPercent } from 'src/utils/formatters/number';
import { getAssetLogo } from 'src/constants/urls';

export enum SynthStatus {
	LIVE = 'live',
	CLOSED = 'closed',
	PAUSED = 'paused',
}

type SynthCardProps = {
	synth: Synth;
	price: number | null;
	exchangeFeeRate: number | null;
	status: SynthStatus;
};

const SynthCard: FC<SynthCardProps> = ({ synth, price, exchangeFeeRate, status }) => {
	const currencyKey = synth.name;

	let synthDescription = `Tracks the price of ${currencyKey} ${synth.description} through price feeds supplied by an oracle.`;

	if (currencyKey === 'sUSD') {
		synthDescription =
			'Tracks the price of a single US Dollar (USD). This Synth always remains constant at 1.';
	} else if (currencyKey.startsWith('i')) {
		synthDescription = `Inversely tracks the price of ${currencyKey} ${synth.description} through price feeds supplied by an oracle.`;
	} else if (synth.category.includes('index')) {
		synthDescription = `Tracks the price of the index: ${currencyKey} ${synth.description} through price feeds supplied by an oracle.`;
	}

	return (
		<ExternalLink
			href={
				currencyKey !== 'sUSD'
					? `https://kwenta.eth.limo/exchange/?quote=${currencyKey}&base=sUSD`
					: `https://kwenta.eth.limo/exchange/?quote=${currencyKey}&base=sETH`
			}
		>
			<StyledCard>
				<CardGradient />
				<FlexDivCentered>
					<SynthImageContainer>
						<img src={getAssetLogo(synth.name)} alt={synth.name} />
					</SynthImageContainer>
					<div>
						<SynthSymbol>{currencyKey}</SynthSymbol>
						<div>
							<SynthPriceLabel>usd price</SynthPriceLabel>
							<SynthPrice>
								{price != null ? formatFiatCurrency(price, { sign: '$' }) : '-'}
							</SynthPrice>
						</div>
					</div>
				</FlexDivCentered>
				<SynthDescription>{synthDescription}</SynthDescription>
				<FlexDivRowCentered>
					<FeeInfo>fee: {exchangeFeeRate != null ? formatPercent(exchangeFeeRate) : '-'}</FeeInfo>
					<Status synthStatus={status}>
						<StatusDot /> {status}
					</Status>
				</FlexDivRowCentered>
			</StyledCard>
		</ExternalLink>
	);
};

const CardGradient = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 6px;
	background: linear-gradient(88.63deg, #00d1ff -14.83%, #ed1eff 108.22%);
`;

const Card = styled.div`
	width: 360px;
	height: 298px;
	position: relative;
	padding: 24px 0;

	background: #1c1c3d;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);

	${media.lessThan('medium')`
		width: 310px;		
	`}

	&:hover {
		background: #161b44;
		${CardGradient} {
			background: ${(props) => props.theme.colors.cyan};
		}
	}
`;

const StyledCard = styled(Card)`
	padding: 30px;
	${media.lessThan('medium')`
		width: 100%;
    	max-width: 360px;
	`}
	display: grid;
	grid-template-rows: auto 1fr auto;
`;

const Placeholder = styled(FlexDivCentered)`
	border-radius: 50%;
	color: ${(props) => props.theme.colors.white};
	border: 1px solid ${(props) => props.theme.colors.white};
	font-family: ${(props) => props.theme.fonts.bold};
	justify-content: center;
	margin: 0 auto;
	width: 60px;
	height: 60px;
`;

const SynthImageContainer = styled.div`
	display: flex;
	padding-right: 25px;
	img {
		width: 60px;
		height: 60px;
	}
`;

const SynthSymbol = styled.div`
	font-family: GT America;
	font-weight: 900;
	font-stretch: expanded;
	font-size: 24px;
	line-height: 48px;
	color: ${(props) => props.theme.colors.white};
`;

const SynthPriceLabel = styled.div`
	font-family: GT America;
	font-weight: 700;
	font-stretch: condensed;
	color: ${(props) => props.theme.colors.gray55};
	text-transform: uppercase;
`;

const SynthPrice = styled.div`
	font-family: GT America;
	font-weight: 700;
	font-stretch: expanded;
	color: ${(props) => props.theme.colors.white};
	font-size: 16px;
`;

const SynthDescription = styled(FlexDivCentered)`
	font-size: 14px;
	line-height: 20px;
	color: ${(props) => props.theme.colors.gray20};
`;

const FeeInfo = styled.div`
	color: ${(props) => props.theme.colors.white};
	font-size: 14px;
	line-height: 24px;
	text-transform: uppercase;
	font-family: GT America;
	font-weight: 700;
	font-stretch: condensed;
`;

const StatusDot = styled.div`
	width: 10px;
	height: 10px;
	box-shadow: 0px 0px 10px rgba(0, 209, 255, 0.5);
	margin-right: 8px;
	border-radius: 50%;
`;

const Status = styled(FlexDivCentered)<{ synthStatus: SynthStatus }>`
	text-transform: uppercase;
	font-family: GT America;
	font-weight: 700;
	font-stretch: condensed;

	${(props) => {
		switch (props.synthStatus) {
			case SynthStatus.LIVE: {
				return css`
					color: ${(props) => props.theme.colors.green};
					${StatusDot} {
						background: ${(props) => props.theme.colors.green};
					}
				`;
			}
			case SynthStatus.PAUSED: {
				return css`
					color: ${(props) => props.theme.colors.orange};
					${StatusDot} {
						background: ${(props) => props.theme.colors.orange};
					}
				`;
			}
			case SynthStatus.CLOSED: {
				return css`
					color: ${(props) => props.theme.colors.pink};
					${StatusDot} {
						background: ${(props) => props.theme.colors.pink};
					}
				`;
			}
			default:
				return css`
					color: ${(props) => props.theme.colors.green};
					${StatusDot} {
						background: ${(props) => props.theme.colors.green};
					}
				`;
		}
	}}
`;

export default SynthCard;
