/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Text, Link } from 'theme-ui';
import React from 'react';
import { Heading } from 'theme-ui';
import { BlogPostMeta, dateToTimeAgo } from '../getAllPosts';

const PostHeader = ({ meta, isSnippet }: { meta: BlogPostMeta; isSnippet: boolean }): JSX.Element => (
    <Box mt={4}>
        <Heading as={isSnippet ? 'h2' : 'h1'}>{meta.title}</Heading>
        <div>
            <Text sx={{ fontWeight: 'bold' }} variant="subContent" mb={4}>
                by <Link href="#">@jyajon</Link> - {dateToTimeAgo(meta.date)}
            </Text>
            {isSnippet ? <Text variant="subContent">{meta.description}</Text> : null}
        </div>
    </Box>
);

export default PostHeader;
