import { makeStyles, createStyles, Container } from '@material-ui/core';
import Head from 'next/head';
import Header from '../components/header';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      marginTop: '5rem'
    }
  })
);

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Translate App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Container className={classes.container}>
        content
      </Container>


    </div>
  )
}
