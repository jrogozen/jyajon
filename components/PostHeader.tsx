import React from 'react';
import { BlogPostMeta } from '../getAllPosts';

const PostHeader = ({ meta, isSnippet }: { meta: BlogPostMeta; isSnippet: boolean }): JSX.Element => (
    <>
        <h1>{meta.title}</h1>
        <div>
            {isSnippet ? <p>{meta.description}</p> : null}
            <span>{meta.date}</span>
            <span role="img" aria-label="one coffee">
                ☕ {`${meta.readTime} min read`}
            </span>
        </div>
    </>
);

export default PostHeader;
