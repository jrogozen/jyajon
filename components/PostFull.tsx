import React from 'react';
import PostHeader from './PostHeader';
import { BlogPostMeta } from '../getAllPosts';

const PostFull = ({ children, meta }: { children: JSX.Element; meta: BlogPostMeta }): JSX.Element => (
    <>
        <PostHeader meta={meta} isSnippet={false} />
        <article>{children}</article>
    </>
);

export default PostFull;
