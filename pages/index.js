/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import React from 'react';
import PostSnippet from '../components/PostSnippet';
import { posts } from '../getAllPosts';

const IndexPage = () => {
    return (
        <Container>
            <ul
                sx={{
                    listStyle: 'none',
                    m: 0,
                    px: 0,
                    py: 0,
                }}
            >
                {posts.map((post) => (
                    <li
                        key={post.link}
                        sx={{
                            mb: 5,
                        }}
                    >
                        <PostSnippet post={post} />
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default IndexPage;
