/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Link, Container } from 'theme-ui';
import React from 'react';

const Header = (): JSX.Element => {
    return (
        <div sx={{ bg: 'content', mb: 5 }}>
            <Container>
                <header
                    sx={{
                        display: 'grid',
                        gap: 3,
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        px: 2,
                        py: 2,
                        alignItems: 'center',
                        variant: 'styles.header',
                    }}
                >
                    <button
                        title="toggle menu"
                        sx={{
                            appearance: 'none',
                            width: 32,
                            height: 32,
                            m: 0,
                            p: 1,
                            color: 'inherit',
                            bg: 'transparent',
                            border: 0,
                            ':hover': {
                                color: 'primary',
                            },
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentcolor"
                            viewBox="0 0 24 24"
                            sx={{
                                display: 'block',
                                margin: 0,
                            }}
                        >
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                        </svg>
                    </button>
                    <div
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Link
                            href="/"
                            variant="home"
                            sx={{
                                px: 3,
                                py: 1,
                            }}
                        >
                            @jyajon
                        </Link>
                    </div>
                    <div
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Link
                            variant="navlink"
                            href="/blog"
                            sx={{
                                ml: 3,
                                py: 3,
                            }}
                        >
                            blog
                        </Link>
                    </div>
                </header>
            </Container>
        </div>
    );
};

export default Header;
