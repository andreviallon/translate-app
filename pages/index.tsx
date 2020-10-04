import Head from 'next/head';
import ContextWrapper from '../components/ContextWrapper';
import Layout from '../components/Layout';

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
      <ContextWrapper>
        <Layout>
          <h1>content</h1>
        </Layout>
      </ContextWrapper>
    </div>
  )
}
