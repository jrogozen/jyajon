import React from 'react';
import '../styles/globals.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: { Component: React.FunctionComponent; pageProps: any }): JSX.Element {
    return (
        <Layout pageTitle="jyaajon - blog" description="for fun blog">
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
