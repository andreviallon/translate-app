import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import Header from './header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Translate App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div>
        content
      </div>


    </div>
  )
}
