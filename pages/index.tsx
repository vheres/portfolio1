import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import Banner from '../components/home/banner'
import Overview from '../components/home/overview'
import Stack from '../components/home/stack'
import Contact from '../components/home/contact'

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
        <Overview />
        <Stack />
        <Contact />
      </Layout>
    </>
  )
}

export default Home
