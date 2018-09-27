import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { BlogsQuery } from '.'

const RecentBlogs = props => (
  <BlogsQuery
    render={data => (
      <div {...props}>
        {data.length > 0
          ? data.map(blog => (
            <div key={blog.node.frontmatter.title}>
              <RecentBlogContainer to={blog.node.frontmatter.path}>
                <header>
                  <h2>{blog.node.frontmatter.title}</h2>
                  <RecentBlogDates>
                    <span>Created:&nbsp;&nbsp;{blog.node.frontmatter.created}</span>
                    <span>Last Updated:&nbsp;&nbsp;{blog.node.frontmatter.updated}</span>
                  </RecentBlogDates>
                </header>
                <p>{blog.node.excerpt}</p>
              </RecentBlogContainer>
              <br />
            </div>
          ))
          : <h2>Blogs Section Coming Soon!</h2>
        }
      </div>
    )}
  />
)

export default RecentBlogs

const RecentBlogContainer = styled(Link)`
  background-color: #CBCBCB;
  padding: 10px;
  border: solid 1px rgba(24, 23, 23, 0.15);
  box-shadow: 0px 0px 1px 0.1px;
  display: block;
  color: inherit;
  text-decoration: none;
  &:visited{
    color: inherit;
  }
  &:hover{
    background-color: rgb(167, 167, 167)
  }
  & header{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 0 30px;
  }
`

const RecentBlogDates = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  & > span:last-child{
    font-size: 75%;
  }
`
