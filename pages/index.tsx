import Head from 'next/head';
import Layout from '../components/layout';

export interface UserDetails {
  firstName: string;
  lastName: string;
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Translate App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>content</h1>
      </Layout>
      
    </div>
  )
}
