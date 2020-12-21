import Head from 'next/head';
import ContextWrapper from '../components/ContextWrapper';
import Layout from '../components/Layout';
import Translate from '../components/Translate';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Translate App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContextWrapper>
        <Layout>
          <Translate />
        </Layout>
      </ContextWrapper>
    </div>
  )
}
