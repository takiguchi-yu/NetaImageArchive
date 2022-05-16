import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import type { ImageLoaderProps } from 'next/image'
import Search from '../components/search'
import styles from '../styles/home.module.scss'

const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `http://localhost:3000/_next/image/?url=/images/${src}&w=${width}&q=${quality || 75}`
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | ネタ画像庫</title>
      </Head>
      
      <Search />

      <section className={styles.gallery} id="gallery">

        <h1 className={styles.heading}> カテゴリー: <span>煽り</span></h1>

        <div className={styles.boxContainer}>

          <div className={styles.box}>
            <a href="http://localhost:3000/_next/image/?url=%2Fimages%2Fi-1.jpg&w=1200&q=75" target="_blank" rel="noopener noreferrer">
            <Image src="/images/i-1.jpg" alt="来月から小学校ですか？" layout='fill' objectFit='scale-down' />

            </a>
            <div className={styles.overlay}>
              <div className={styles.title}>
                <h3>来月から小学校ですか？</h3>
              </div>
              <div className={styles.keywords}>
                <a href="#" className="keyword">煽り</a>
                <a href="#" className="keyword">笑顔</a>
                <a href="#" className="keyword">愉快</a>
              </div>
            </div>
          </div>

          <div className={styles.box}>
            <Image loader={myLoader} src="g-1.jpg" alt="Picture of the author" layout='fill' objectFit='scale-down' />
            <div className={styles.overlay}>
              <div className={styles.title}>
                <h3>photos and events</h3>
              </div>
              <div className={styles.keywords}>
                <a href="#" className="keyword">煽り</a>
                <a href="#" className="keyword">笑顔</a>
                <a href="#" className="keyword">愉快</a>
              </div>
            </div>
          </div>

          <div className={styles.box}>
            <Image src="/images/g-2.jpg" alt="Picture of the author" layout='fill' objectFit='scale-down' />
            <div className={styles.overlay}>
              <div className={styles.title}>
                <h3>photos and events</h3>
              </div>
              <div className={styles.keywords}>
                <a href="#" className="keyword">煽り</a>
                <a href="#" className="keyword">笑顔</a>
                <a href="#" className="keyword">愉快</a>
              </div>
            </div>
          </div>

          <div className={styles.box}>
            <Image src="/images/g-3.jpg" alt="Picture of the author" layout='fill' objectFit='scale-down' />
            <div className={styles.overlay}>
              <div className={styles.title}>
                <h3>photos and events</h3>
              </div>
              <div className={styles.keywords}>
                <a href="#" className="keyword">煽り</a>
                <a href="#" className="keyword">笑顔</a>
                <a href="#" className="keyword">愉快</a>
              </div>
            </div>
          </div>

          <div className={styles.box}>
            <Image src="/images/g-4.jpg" alt="Picture of the author" layout='fill' objectFit='scale-down' />
            <div className={styles.overlay}>
              <div className={styles.title}>
                <h3>photos and events</h3>
              </div>
              <div className={styles.keywords}>
                <a href="#" className="keyword">煽り</a>
                <a href="#" className="keyword">笑顔</a>
                <a href="#" className="keyword">愉快</a>
              </div>
            </div>
          </div>

          <div className={styles.box}>
            <Image src="/images/g-5.jpg" alt="Picture of the author" layout='fill' objectFit='scale-down' />
            <div className={styles.overlay}>
              <div className={styles.title}>
                <h3>photos and events</h3>
              </div>
              <div className={styles.keywords}>
                <a href="#" className="keyword">煽り</a>
                <a href="#" className="keyword">笑顔</a>
                <a href="#" className="keyword">愉快</a>
              </div>
            </div>
          </div>

          <div className={styles.box}>
            <Image src="/images/g-6.jpg" alt="Picture of the author" layout='fill' objectFit='scale-down' />
            <div className={styles.overlay}>
              <div className={styles.title}>
                <h3>photos and events</h3>
              </div>
              <div className={styles.keywords}>
                <a href="#" className="keyword">煽り</a>
                <a href="#" className="keyword">笑顔</a>
                <a href="#" className="keyword">愉快</a>
              </div>
            </div>
          </div>

          <div className={styles.box}>
            <Image src="/images/g-7.jpg" alt="Picture of the author" layout='fill' objectFit='scale-down' />
            <div className={styles.overlay}>
              <div className={styles.title}>
                <h3>photos and events</h3>
              </div>
              <div className={styles.keywords}>
                <a href="#" className="keyword">煽り</a>
                <a href="#" className="keyword">笑顔</a>
                <a href="#" className="keyword">愉快</a>
              </div>
            </div>
          </div>

          <div className={styles.box}>
            <Image src="/images/g-8.jpg" alt="Picture of the author" layout='fill' objectFit='scale-down' />
            <div className={styles.overlay}>
              <div className={styles.title}>
                <h3>photos and events</h3>
              </div>
              <div className={styles.keywords}>
                <a href="#" className="keyword">煽り</a>
                <a href="#" className="keyword">笑顔</a>
                <a href="#" className="keyword">愉快</a>
              </div>
            </div>
          </div>

          <div className={styles.box}>
            <Image src="/images/g-9.jpg" alt="Picture of the author" layout='fill' objectFit='scale-down' />
            <div className={styles.overlay}>
              <div className={styles.title}>
                <h3>photos and events</h3>
              </div>
              <div className={styles.keywords}>
                <a href="#" className="keyword">煽り</a>
                <a href="#" className="keyword">笑顔</a>
                <a href="#" className="keyword">愉快</a>
              </div>
            </div>
          </div>

          <div className={styles.box}>
            <Image src="/images/g-10.png" alt="Picture of the author" layout='fill' objectFit='scale-down' />
            <div className={styles.overlay}>
              <div className={styles.title}>
                <h3>夢見させるようなことを言うな!!</h3>
              </div>
              <div className={styles.keywords}>
                <a href="#" className="keyword">煽り</a>
                <a href="#" className="keyword">笑顔</a>
                <a href="#" className="keyword">愉快</a>
              </div>
            </div>
          </div>

        </div>

      </section>

      <Search />
    </>
  )
}

export default Home
