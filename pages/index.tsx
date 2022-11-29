import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="website description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <a className={styles.card}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta fugit distinctio animi laudantium expedita?</a>
          <a className={styles.card}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam tenetur minima, consequatur dignissimos quod? </a>
          <a className={styles.card}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam vel nihil cupiditate, id saepe inventore officia.</a>
          <a className={styles.card}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aspernatur adipisci quibusdam rem illo ut vero.</a>
          <a className={styles.card}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum earum explicabo aspernatur accusamus?</a>
          <a className={styles.card}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cumque corporis ratione nihil maxime reprehenderit nulla.</a>
        </div>
      </main>

      <footer className={styles.footer}>
          <small>&copy;Copyright 2022, Ivan Budiakov. All Rights Reserved</small>
      </footer>
    </div>
  )
}
