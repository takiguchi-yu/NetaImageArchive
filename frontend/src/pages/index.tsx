import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Search from '../components/search'
import Footer from '../components/footer'
import style from '../styles/home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Navbar />
      <Search />
      <section className={style.home}>
        <p>main section</p>
      </section>
      <Footer />
    </>
  )
}

export default Home
