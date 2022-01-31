import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import Banner from '../components/banner'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yohanes William</title>
        <meta name="description" content="Yohanes William | Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Banner />
      </Layout>
    </>
  )
}

export default Home
