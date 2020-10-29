import { formatDistance } from 'date-fns';

export type BlogPostMeta = {
    title: string;
    description: string;
    date: Date;
    readTime: string;
    category: string;
    hero?: string;
};

export type BlogMdx = {
    meta: BlogPostMeta;
    default: any;
};

export type RequiredBlogPost = {
    link: string;
    module: BlogMdx;
};

export type BlogPostLinks = {
    prev?: RequiredBlogPost;
    next?: RequiredBlogPost;
};

function importBlogPosts(requireContext: __WebpackModuleApi.RequireContext, linkFilter: RegExp) {
    return requireContext.keys().map((filename: string) => ({
        // e.g. filename
        // /auth-hooks/index.mdx --> auth-hooks

        // title of the blog
        link: filename.substr(1).replace(linkFilter, ''),

        // the content of the file
        module: requireContext(filename),
    }));
    // .sort((a, b) => {
    //     return b.module.meta.date - a.module.meta.date;
    // });
}

export function getPrevNextLinks(posts: RequiredBlogPost[], meta: BlogPostMeta): BlogPostLinks {
    const links: BlogPostLinks = {};
    const index = posts.findIndex((post) => post.module.meta.title === meta.title);

    if (!index && index !== 0) {
        return links;
    }

    if (posts[index + 1]) {
        links.next = posts[index + 1];
    }

    if (posts[index - 1]) {
        links.prev = posts[index - 1];
    }

    return links;
}

export function dateToTimeAgo(postDate?: Date): string {
    const defaultAgo = 'a while ago';

    if (!postDate) {
        return defaultAgo;
    }

    const timeAgo = formatDistance(new Date(), postDate, { includeSeconds: true });

    return timeAgo ? timeAgo + ' ago' : defaultAgo;
}

export const posts = importBlogPosts(require.context('./pages/blog', true, /\.mdx$/), /\/index\.mdx$/);
