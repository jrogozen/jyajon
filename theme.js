export default {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fonts: {
        body: 'Menlo, monospace',
        heading: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        monospace: 'Menlo, monospace',
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125,
    },
    colors: {
        content: '#fff',
        text: '#000',
        background: '#f6f6f6',
        primary: '#695d79',
        secondary: '#e77a82',
        muted: '#5e5e5e',
    },
    radii: {
        primary: 2,
    },
    sizes: {
        container: 720,
    },
    text: {
        heading: {
            marginBottom: 4,
        },
        subContent: {
            color: 'muted',
        },
    },
    images: {
        hero: {
            borderRadius: 4,
            width: '100%',
            height: 'auto',
            marginBottom: '-4px', //hack, remove
        },
    },
    links: {
        default: {
            color: 'primary',
            textDecoration: 'underline',
            '&:hover': {
                color: 'secondary',
                cursor: 'pointer',
            },
        },
        cta: {
            fontWeight: 'bold',
            color: 'primary',
            textDecoration: 'underline',
            '&:hover': {
                color: 'secondary',
                cursor: 'pointer',
            },
        },
        home: {
            fontSize: 18,
            textDecoration: 'none',
            color: 'text',
            letterSpacing: '0.1em',
            '&:hover': {
                color: 'secondary',
                cursor: 'pointer',
            },
        },
        navlink: {
            textDecoration: 'none',
            color: 'text',
            '&:hover': {
                color: 'secondary',
                cursor: 'pointer',
            },
        },
    },
    badges: {
        primary: {
            color: 'content',
            bg: 'primary',
            borderRadius: 40,
            borderColor: 'content',
            border: '2px solid #fff',
            paddingTop: 2,
            paddingBottom: 2,
            paddingLeft: 3,
            paddingRight: 3,
            fontSize: 13,
            fontWeight: 'bold',
        },
        muted: {
            color: 'muted',
            bg: 'content',
            borderRadius: 40,
            border: '2px solid #fff',
            paddingTop: 2,
            paddingBottom: 2,
            paddingLeft: 3,
            paddingRight: 3,
            fontSize: 13,
            fontWeight: 'bold',
        },
    },
    content: {
        primary: {
            color: 'text',
            bg: 'content',
            borderRadius: 4,
            padding: 4,
            boxShadow: '0 0 15px rgba(0,0,0,.05)',
        },
    },
    subContent: {
        primary: {
            color: 'muted',
            paddingTop: 4,
            marginTop: 4,
        },
    },
    styles: {
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body',
        },
        h1: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 5,
        },
        h2: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 4,
        },
        h3: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 3,
        },
        h4: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 2,
        },
        h5: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 1,
        },
        h6: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 0,
        },
        p: {
            color: 'text',
            fontFamily: 'body',
            fontWeight: 'body',
            lineHeight: 'body',
        },
        a: {
            color: 'primary',
        },
        pre: {
            fontFamily: 'monospace',
            overflowX: 'auto',
            code: {
                color: 'inherit',
            },
        },
        code: {
            fontFamily: 'monospace',
            fontSize: 'inherit',
        },
        table: {
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0,
        },
        th: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
        td: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
        img: {
            maxWidth: '100%',
        },
    },
};
