/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Link } from 'theme-ui';
import React from 'react';
import { getPrevNextLinks, posts, BlogPostMeta } from '../getAllPosts';

const PostNav = ({ meta }: { meta: BlogPostMeta }): JSX.Element => {
    const links = getPrevNextLinks(posts, meta);

    return (
        <Box
            as="nav"
            sx={{
                borderTop: '1px solid',
                borderColor: 'background',
                variant: 'subContent.primary',
            }}
        >
            <ul
                sx={{
                    display: 'grid',
                    listStyle: 'none',
                    alignItems: 'center',
                    gridTemplateColumns: '1fr 1fr',
                    m: 0,
                    px: 0,
                    py: 0,
                }}
            >
                <li>
                    {links.prev && (
                        <Link variant="default" href={`/blog${links.prev.link}`}>
                            {links.prev.module.meta.title}
                        </Link>
                    )}
                </li>
                <li sx={{ textAlign: 'right' }}>
                    {links.next && <Link href={`/blog${links.next.link}`}>{links.next.module.meta.title}</Link>}
                </li>
            </ul>
        </Box>
    );
};

export default PostNav;
