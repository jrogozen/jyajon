import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import Layout from '../components/Layout';

import 'prismjs/themes/prism-coy.css';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Layout pageTitle="jyaajon - blog" description="for fun blog">
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;
