import type { NextPage } from 'next'
import Head from 'next/head'
import Search from '../components/search'
import style from '../styles/home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ネタ画像庫 | Home</title>
      </Head>
      <Search />
      <section className={style.home}>
        <p>main section</p>
      </section>
    </>
  )
}

export default Home
