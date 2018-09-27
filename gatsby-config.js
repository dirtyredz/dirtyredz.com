module.exports = {
  siteMetadata: {
    title: 'Digital Redz',
    author: 'David McClain',
    description: 'DigitalRedz.com',
    siteUrl: 'https://digitalredz.com',
    links: [
      {
        title: 'GitHub',
        logo: 'Github',
        url: 'https://github.com/dirtyredz',
      },
      {
        title: 'Facebook',
        logo: 'Facebook',
        url: 'https://www.facebook.com/Digital-Redz-294497057750359/',
      },
      {
        title: 'Codepen',
        logo: 'Codepen',
        url: 'https://codepen.io/dirtyredz/',
      },
      {
        title: 'LinkedIn',
        logo: 'Linkedin',
        url: 'https://www.linkedin.com/in/david-mcclain-a26847b7/',
      },
      {
        title: 'Twitter',
        logo: 'Twitter',
        url: 'https://twitter.com/Digitalredz',
      },
      {
        title: 'Instagram',
        logo: 'Instagram',
        url: 'https://www.instagram.com/digitalredz/?hl=en',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Roboto\:100,300,400,500,700,900', // eslint-disable-line
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './static/images/digitalredz.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/project`,
        name: 'project',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/static`,
        name: 'static',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
            },
          },
          {
            resolve: 'gatsby-remark-component',
            options: { components: ['project-summary'] },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-remove-trailing-slashes',
    // {
    //   resolve: `gatsby-mdx`,
    //   options: {
    //     extensions: [".mdx", ".md"]
    //   }
    // },
  ],
}
