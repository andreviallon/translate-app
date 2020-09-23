import Head from 'next/head';
import Header from '../components/header';
import styled from 'styled-components';

export interface UserDetails {
  firstName: string;
  lastName: string;
}

const userInfo: UserDetails = {
  firstName: 'John',
  lastName: 'Doe'
}

const Container = styled.div`
  margin-top: 5rem;
  display: flex;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Translate App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header userInfo={userInfo}/>
      
      <Container>
        content
      </Container>

    </div>
  )
}
