import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import cardStyles from '../styles/Card.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="website description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header} ><h1 style={{margin: 0}}>Authenticator</h1></header>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Card title='JWT' logo='🌸' desc='lorem ipsum dolor alpha JWT' />
          <Card title='Auth0' logo='⭐' desc='lorem ipsum dolor alpha Auth0' />
          <Card title='Cookies' logo='🍪' desc='lorem ipsum dolor tasty cookies' />
        </div>
      </main>

      <footer className={styles.footer}>
        <small>&copy;Copyright 2022, Ivan Budiakov. All Rights Reserved</small>
      </footer>
    </div>
  )
}

function Card({ title, logo, desc }: { title: string, logo: string, desc: string }) {
  return (
    <Link href={'/' + title.toLowerCase()} className={cardStyles.card}>
      <h2>
        <span>{logo + ' '}</span>{title}
      </h2>

      <p>{desc}</p>
    </Link>
  )
}