import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components';

import { theme } from '../styles/theme';
import { Logo, Layout, Header, Footer } from '../components'
import MainSection from '../sections/home/main';
import BuildSection from '../sections/home/build';
import TotalSection from '../sections/home/total';
import EarnSection from '../sections/home/earn';
// import PoweredBySection from '../sections/home/poweredBy';
import PartnersSection from '../sections/home/partners';

import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('../sections/home/poweredBy'),
  { ssr: false }
)


export default function Home() {
  return (
    <>
      <Head>
        <title>Synthetix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
				<MainSection />
				<TotalSection />
				<BuildSection />
				<EarnSection />
				<DynamicComponentWithNoSSR />
				<PartnersSection />
      </Layout>
    </>
  )
}
