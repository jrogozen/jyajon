function importBlogPosts(requireContext: __WebpackModuleApi.RequireContext, linkFilter: RegExp) {
    return requireContext.keys().map((filename: string) => ({
        // e.g. filename
        // /auth-hooks/index.mdx --> auth-hooks

        // title of the blog
        link: filename.substr(1).replace(linkFilter, ''),

        // the content of the file
        module: requireContext(filename),
    }));
}

export type BlogPostMeta = {
    title: string;
    description: string;
    date: string;
    readTime: string;
};

export type BlogMdx = {
    meta: BlogPostMeta;
    default: any;
};
export type RequiredBlogPost = {
    link: string;
    module: BlogMdx;
};

export const posts = importBlogPosts(require.context('./pages/blog', true, /\.mdx$/), /\/index\.mdx$/);
