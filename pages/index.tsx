import Head from 'next/head'
import Link from 'next/link'
import cardStyles from '../styles/Card.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="website description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header><h1 className='text-7xl text-center ' >Authenticator</h1></header>

      <main className='min-h-screen flex justify-center items-center flex-1 '>
        <div className='flex items-center justify-center flex-wrap  large:max-w-2xl medium:max-w-md'>          
          <Card title='JWT' logo='🌸' desc='lorem ipsum dolor alpha JWT' />
          <Card title='Auth0' logo='⭐' desc='lorem ipsum dolor alpha Auth0' />
          <Card title='Cookies' logo='🍪' desc='lorem ipsum dolor tasty cookies' />
        </div>
      </main>

      <footer className='text-center p-8 border-t'>
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