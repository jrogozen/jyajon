import React from 'react';
import Link from 'next/link';
import PostHeader from './PostHeader';
import { RequiredBlogPost } from '../getAllPosts';

const PostSnippet = ({ post }: { post: RequiredBlogPost }): JSX.Element => {
    const {
        link,
        module: { meta },
    } = post;

    return (
        <article>
            <PostHeader meta={meta} isSnippet />
            <Link href={`/blog${link}`}>
                <a>Read more</a>
            </Link>
        </article>
    );
};

export default PostSnippet;
