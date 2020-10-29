/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Head from 'next/head';
import Header from './Header';

const Layout = ({
    children,
    pageTitle,
    description,
}: {
    children: JSX.Element;
    pageTitle: string;
    description: string;
}): JSX.Element => {
    return (
        <div
            sx={{
                backgroundColor: 'background',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="Description" content={description} />
                <title>{pageTitle}</title>
            </Head>
            <main>
                <Header />
                <div className="content">{children}</div>
            </main>
        </div>
    );
};

export default Layout;
