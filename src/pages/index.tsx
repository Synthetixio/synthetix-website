import Head from 'next/head'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

import MainSection from '../sections/home/main';
import BuildSection from '../sections/home/build';
import TotalSection from '../sections/home/total';
import EarnSection from '../sections/home/earn';
import PartnersSection from '../sections/home/partners';
import dynamic from 'next/dynamic'
import { Layout } from '../components';
import { fetchTotalLocked } from '../../lib/exchange-api';

export interface ApiStatsProps {
	totalLocked?: number
}

const PoweredBy = dynamic(
  () => import('../sections/home/poweredBy'),
  { ssr: false }
)

const Home = ({ totalLocked }: ApiStatsProps) => {
  return (
    <>
      <Head>
        <title>Synthetix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
				<MainSection />
				<TotalSection totalLocked={totalLocked} />
				<BuildSection />
				<EarnSection />
				<PoweredBy />
				<PartnersSection />
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const totalLocked = await fetchTotalLocked()

  return { props: {
		totalLocked
	 }}
}

export default Home
