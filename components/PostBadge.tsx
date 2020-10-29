/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Badge } from 'theme-ui';
import React from 'react';
import { BlogPostMeta } from '../getAllPosts';

const PostBadge = ({ meta }: { meta: BlogPostMeta }): JSX.Element => {
    return (
        <div
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                mt: -50,
                ml: -10,
                mr: -10,
            }}
        >
            <Box>
                <Badge variant="primary">
                    <span>{meta.category}</span>
                </Badge>
            </Box>
            <Box>
                <Badge variant="muted">
                    <span role="img" aria-label="one coffee">
                        ☕ {`${meta.readTime} min`}
                    </span>
                </Badge>
            </Box>
        </div>
    );
};

export default PostBadge;
