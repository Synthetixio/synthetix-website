import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components';
import numeral from 'numeral'

import { theme } from '../styles/theme';
import { Logo, Layout, Header, Footer } from '../components'
import MainSection from '../sections/home/main';
import BuildSection from '../sections/home/build';

const currencyFormat = '$0,0'
const stakedValue = 435603623

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
				<MainSection />
				<TotalStakedBar>
					<StakedHeader>The TOTAL VALUE OF SNX STAKED ON SYNTHETIX</StakedHeader>
					<StakedValue>{numeral(stakedValue).format(currencyFormat)}</StakedValue>
				</TotalStakedBar>
				<BuildSection />
      </Layout>
    </>
  )
}

const TotalStakedBar = styled.div`
	width: calc(100% - 228px);
	height: 336px;
	padding: 0 114px;
	position: absolute;
	margin-top: -${(336 / 2 + 13)}px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	background: linear-gradient(0deg, rgba(14, 4, 53, 0.29), rgba(14, 4, 53, 0.29)), linear-gradient(88.63deg, #00D1FF -14.83%, #ED1EFF 108.22%);
`

const StakedHeader = styled.h2`
	font-family: GT America;
	font-weight: 900;
	font-size: 40px;
	line-height: 39px;
	text-align: center;
	text-transform: uppercase;
	/* border: 1.5px solid #FFFFFF; */
`

const StakedValue = styled.p`
	font-family: GT America;
	font-weight: 900;
	font-size: 48px;
	line-height: 48px;
	text-align: center;
	text-transform: uppercase;
	color: white;
`
