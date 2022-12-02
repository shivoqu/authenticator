import Head from 'next/head'
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
          <div tabIndex={0} className={styles.card}>
            <h1>JWT LOGO HERE</h1>
            <h2><span>JWT</span> Authentication</h2>

            <label>User name
              <input type="text" name="jwt-user-name" id="jwt-user-name" />
            </label>

            <label>Password
              <input type="password" name="jwt-user-password" id="jwt-user-password" />
            </label>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Sequi laborum nobis facilis numquam fuga facere neque possimus
              suscipit quod consequuntur nam dolorum laboriosam maxime dolors
            </p>

          </div>

          

        </div>
      </main>

      <footer className={styles.footer}>
        <small>&copy;Copyright 2022, Ivan Budiakov. All Rights Reserved</small>
      </footer>
    </div>
  )
}
