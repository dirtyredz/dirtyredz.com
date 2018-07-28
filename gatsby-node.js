const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
        query BuildQuery {
          Blogs: allMarkdownRemark(limit: 500,filter: {fileAbsolutePath: { regex: "/blog/"}},sort: { fields: [frontmatter___created], order: DESC }) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  path
                }
              }
            }
          }
        Projects: allMarkdownRemark(limit: 500,filter: {fileAbsolutePath: { regex: "/projects/"}},sort: { fields: [frontmatter___created], order: DESC }) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  path
                }
              }
            }
          }
        }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.Blogs.edges;

        _.each(posts, (post, index) => {
          const previous = index === posts.length - 1 ? null : posts[index + 1].node;
          const next = index === 0 ? null : posts[index - 1].node;

          createPage({
            path: post.node.frontmatter.path,
            name: post.node.frontmatter.title,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              title: post.node.frontmatter.title,
              previous,
              next,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  return new Promise(resolve => {
    const oldPage = Object.assign({}, page)
    const Title = page.path.replace("/","");

    page.context = Object.assign({title: Title != "" ? Title : "Home"}, page.context)
    // console.log(page.path)
    // deletePage(oldPage)
    createPage(page)
    resolve()
  })
}
