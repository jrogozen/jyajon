import React from 'react';
import PostSnippet from '../components/PostSnippet';
import { posts } from '../getAllPosts';

const IndexPage = () => {
    return (
        <>
            {posts.map((post) => (
                <PostSnippet key={post.link} post={post} />
            ))}
        </>
    );
};

export default IndexPage;
