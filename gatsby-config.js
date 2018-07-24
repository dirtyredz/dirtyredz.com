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
        url: 'https://www.github.com'
      },
      {
        title: 'Facebook',
        logo: 'Facebook',
        url: 'https://www.facebook.com'
      },
      {
        title: 'Codepen',
        logo: 'Codepen',
        url: 'https://www.codepen.com'
      },
      {
        title: 'LinkedIn',
        logo: 'Linkedin',
        url: 'https://www.linkedin.com'
      },
      {
        title: 'Twitter',
        logo: 'Twitter',
        url: 'https://www.twitter.com'
      },
      {
        title: 'Instagram',
        logo: 'Instagram',
        url: 'https://www.instagram.com'
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
        name: "images",
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        path: `${__dirname}/src/pages/blog`,
        name: 'blog',
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
