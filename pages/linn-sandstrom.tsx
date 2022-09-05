// import { ArrowLinkOffIcon, LinkButton, theme, Card, Flex } from '@synthetixio/ui';
import Head from 'next/head';
import React from 'react';
import { Header } from 'src/components';
import styled from 'styled-components';

function LinnSandstrom() {
	return (
		<>
			<Head>
				<title>Synthetix | Linn Sandstrom</title>
				<script
					dangerouslySetInnerHTML={{
						__html: `
                        (function(m,a,i,l,e,r){ m['MailerLiteObject']=e;function f(){
                            var c={ a:arguments,q:[]};var r=this.push(c);return "number"!=typeof r?r:f.bind(c.q);}
                            f.q=f.q||[];m[e]=m[e]||f.bind(f.q);m[e].q=m[e].q||f.q;r=a.createElement(i);
                            var _=a.getElementsByTagName(i)[0];r.async=1;r.src=l+'?v'+(~~(new Date().getTime()/1000000));
                            _.parentNode.insertBefore(r,_);})(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');
                            var ml_account = ml('accounts', '1130930', 'b3w8m6s6a3', 'load');
                            `,
					}}
				></script>
			</Head>
			<Header />
			{/*
			<StyledHeader>
			 <H1>LINN SANDSTROM</H1>
				<StyledText>
					Synthetix is proud to welcome Linn as our latest Spartan and we’re excited to support her
					in her upcoming title match. Learn more about her fight, why we’re sponsoring her, and our
					call for Spartans here.
				</StyledText>
				<H3>Sponsored By</H3>
				<img src="snx.svg" alt="synthetix" style={{ marginBottom: '14px' }} />
				<StyledText>
					Enter your email address for access to a private TG group with Linn for exclusive behind
					the scenes content on her fight plus details on how to dive into the world of Synthetix
					and DeFi.
				</StyledText>
				<StyledInputWrapper>
					<div
						className="ml-form-embed"
						data-account="1130930:b3w8m6s6a3"
						data-form="5672948:p8g2d9"
					></div>
				</StyledInputWrapper>
				<H3 style={{ paddingTop: '20px', paddingBottom: '0px' }}>Don’t have SNX yet?</H3>
				<TextBold style={{ marginBottom: '20px', textAlign: 'center' }}>
					Buy some now to stake and start earning over 50% APY on your tokens.
				</TextBold>
				<LinkButton
					isExternalLink
					text="BUY SNX"
					icon={<ArrowLinkOffIcon active />}
					link="https://www.kraken.com/learn/buy-synthetix-snx"
					size="tiniest"
					style={{ padding: '1px' }}
				></LinkButton>
			</StyledHeader>
			<StyledMain>
				<H1 fontSize="22px">Ecosystem for traders</H1>
				<StyledSubline>
					Looking for a decentralized way to trade? Synthetix powers a growing ecosystem of trading
					platforms for everything from crypto tokens to commodities to forex. Trade options or
					perpetual futures with up to 10x leverage. Visit our ecosystem partners below:
				</StyledSubline>
				<StyledCardContainer>
					<StyledCard gradient="rainbow">
						<StyledCardContent direction="column" justifyContent="space-between">
							<img src="kwenta.svg" width="186" height="30" alt="kwenta" />
							<p>
								Trade with up to 10x leverage and simulated liquidity for the best price fills.
								Coming soon.
							</p>
							<StyledLinkButton
								isExternalLink
								icon={<ArrowLinkOffIcon active />}
								text="Trade"
								link="https://kwenta.io/"
							></StyledLinkButton>
						</StyledCardContent>
					</StyledCard>
					<StyledCard gradient="rainbow">
						<StyledCardContent direction="column" justifyContent="space-between">
							<img src="lyra.svg" width="80" height="30" alt="lyra" />
							<p> The first completely decentralized options protocol.</p>
							<StyledLinkButton
								isExternalLink
								icon={<ArrowLinkOffIcon active />}
								text="Trade"
								link="https://www.lyra.finance/"
							></StyledLinkButton>
						</StyledCardContent>
					</StyledCard>
					<StyledCard gradient="rainbow">
						<StyledCardContent direction="column" justifyContent="space-between">
							<img src="thales.svg" width="120" height="30" alt="thales" />
							<p>
								A Parimutuel Markets protocol for trading on price action, sports, and other events.
							</p>
							<StyledLinkButton
								isExternalLink
								icon={<ArrowLinkOffIcon active />}
								text="Trade"
								link="https://thalesmarket.io/"
							></StyledLinkButton>
						</StyledCardContent>
					</StyledCard>
					<StyledCard gradient="rainbow">
						<StyledCardContent direction="column" justifyContent="space-between">
							<img src="polynomial-fi.svg" width="30" height="30" alt="polynomial" />
							<p>
								Derivatives vaults making it easy for traders to gain access to advanced trading
								models.
							</p>
							<StyledLinkButton
								isExternalLink
								icon={<ArrowLinkOffIcon active />}
								text="Trade"
								link="https://www.polynomial.fi/"
							></StyledLinkButton>
						</StyledCardContent>
					</StyledCard>
				</StyledCardContainer>
			</StyledMain> */}
		</>
	);
}

const StyledHeader = styled.header`
	background-image: url('linn-sandstrom.png');
	min-width: 100%;
	height: 790px;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding-top: 50px;
	> * {
		margin-left: 114px;
	}
	:first-child {
		padding-top: 170px;
	}
	@media (max-width: 1000px) {
		background-position: -500px;
		height: 900px;
		> * {
			margin: 0px;
			padding: 8px 10px;
		}
		:first-child {
			padding: 16px 0px;
		}
		align-items: center;
	}
`;

const H1 = styled.h1<{ fontSize?: string }>`
	font-family: 'GT America';
	font-weight: 400;
	font-size: 40px;
	line-height: 48px;
	text-transform: uppercase;
	color: #ffffff;
	margin-top: 0;
	margin-bottom: 0;
	@media (max-width: 500px) {
		text-align: center;
		font-size: ${({ fontSize }) => (fontSize ? fontSize : '32px')};
	}
`;

const H3 = styled.h3`
	font-family: 'GT America';
	font-weight: 400;
	font-size: 14px;
	line-height: 18px;
	text-transform: uppercase;
	color: #ffffff;
	margin-top: 0;
	margin-bottom: 0;
`;

const Text = styled.span`
	font-family: 'Inter';
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	color: #ffffff;
	opacity: 0.7;
	overflow-wrap: break-word;
`;

const TextBold = styled.span`
	font-family: 'Inter Bold';
	font-weight: 700;
	font-size: 14px;
	line-height: 20px;
	color: #ffffff;
`;

const StyledText = styled(Text)`
	max-width: 500px;
	margin-bottom: 30px;
	@media (max-width: 1000px) {
		text-align: center;
	}
`;

const StyledInputWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: baseline;
	padding: 0;
	> * {
		margin: 5px;
	}
	width: 345px;
`;

const StyledSubline = styled(Text)`
	max-width: 700px;
	text-align: center;
	margin-bottom: 20px;
`;

// const StyledMain = styled.main`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	padding: 72px;
// 	background-color: ${theme.colors.backgroundColor};
// 	@media (max-width: 1000px) {
// 		padding: 20px;
// 	}
// `;

// const StyledCardContainer = styled.div`
// 	display: flex;
// 	flex-wrap: wrap;
// 	justify-content: center;
// 	max-width: 1000px;
// `;

// const StyledCardContent = styled(Flex)`
// 	background-color: ${theme.colors.backgroundColor};
// 	height: 99%;
// 	color: #828295;
// 	border-radius: 5px;
// 	margin: 1px;
// 	> * {
// 		margin: 10px;
// 	}
// `;

// const StyledCard = styled(Card)`
// 	width: 470px;
// 	height: 210px;
// 	margin: 10px;
// 	@media (max-width: 500px) {
// 		width: 320px;
// 	}
// `;

// const StyledLinkButton = styled(LinkButton)`
// 	align-self: flex-end;
// `;

export default LinnSandstrom;
