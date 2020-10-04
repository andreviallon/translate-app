import Head from 'next/head';
import LoginForm from '../components/LoginForm';

export default function login() {
    return (
        <>
            <Head>
                <title>Translate App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LoginForm />
        </>
    )
}
