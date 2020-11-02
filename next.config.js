/* eslint-disable @typescript-eslint/no-var-requires */
var toc = require('remark-toc');
// var rehype = require('rehype');
const rehypePrism = require('@mapbox/rehype-prism');
// var prism = require('remark-prism');
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [toc],
        rehypePlugins: [rehypePrism],
    },
});

module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
});
