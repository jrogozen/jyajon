/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import React from 'react';
import PostHeader from './PostHeader';
import PostBadge from './PostBadge';
import { BlogPostMeta } from '../getAllPosts';
import PostNav from './PostNav';

const PostFull = ({ children, meta }: { children: JSX.Element; meta: BlogPostMeta }): JSX.Element => (
    <Container>
        <Box variant="content.primary">
            <PostBadge meta={meta} />
            <PostHeader meta={meta} isSnippet={false} />
            <article>{children}</article>
            <PostNav meta={meta} />
        </Box>
    </Container>
);

export default PostFull;
