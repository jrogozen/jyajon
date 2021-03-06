/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Link as ThemeLink } from 'theme-ui';
import React from 'react';
import { Box } from 'theme-ui';
import Link from 'next/link';
import PostHeader from './PostHeader';
import { RequiredBlogPost } from '../getAllPosts';
import PostBadge from './PostBadge';

const PostSnippet = ({ post }: { post: RequiredBlogPost }): JSX.Element => {
    const {
        link,
        module: { meta },
    } = post;

    return (
        <article>
            {meta.hero && (
                <Box
                    variant="styles.heroBackground"
                    sx={{
                        backgroundImage: `url(${meta.hero})`,
                    }}
                />
            )}
            <Box variant="content.primary">
                <PostBadge meta={meta} />
                <PostHeader meta={meta} isSnippet />
                <Box
                    sx={{
                        borderTop: '1px solid',
                        borderColor: 'background',
                        variant: 'subContent.primary',
                    }}
                >
                    <Link href={`/blog${link}`}>
                        <ThemeLink variant="cta">Read more</ThemeLink>
                    </Link>
                </Box>
            </Box>
        </article>
    );
};

export default PostSnippet;
