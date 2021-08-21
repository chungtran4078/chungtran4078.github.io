import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

type StaticQueryData = {
  allMarkdownRemark: {
    edges: [{
      node: {
        fields: {
          slug: string
        },
        frontmatter: {
          date: string,
          title: string,
          category: string,
        },
      }
    }],
  },
}

class BlogIndex extends React.Component {
  render() {
    return (
      <StaticQuery 
        query={graphql`
        query {
          allMarkdownRemark(
            filter: { fields: { draft: { eq: false } } }
            sort: { fields: [frontmatter___date], order: DESC }
            ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  date(formatString: "YYYY-MM-DD")
                  title
                  category
                }
              }
            }
          }
        }
      `} 
        render={(data: StaticQueryData): React.ReactElement | null => {
          const posts = data.allMarkdownRemark.edges
          return (
            <Layout>
              <Seo title="All posts" />
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <div key={node.fields.slug} style={{borderBottom: '1px dotted #ddd', padding: '.5rem 0'}}>
                    <h3 className="post-title">
                      <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                        {title}
                      </Link>
                    </h3>
                  </div>
                )
              })}
            </Layout>
          )
        }
      }/>
    )
  }
}

export default BlogIndex
