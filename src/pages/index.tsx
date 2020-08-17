import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components';

import { theme } from '../styles/theme';
import { Logo, Layout, Header, Footer } from '../components'
import MainSection from '../sections/home/main';
import BuildSection from '../sections/home/build';
import TotalSection from '../sections/home/total';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
				<MainSection />
				<TotalSection />
				<BuildSection />
      </Layout>
    </>
  )
}
