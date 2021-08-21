import React from 'react'
import { Link, graphql } from 'gatsby'
import _ from "lodash";
import Layout from '../components/Layout'
import Seo from '../components/Seo'

type TagTemplateProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    },
    allMarkdownRemark: {
      edges: [{
        node: {
          excerpt: string,
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
  },
  pageContext: {
    category: string,
    tag: string,
  },
}

class TagTemplate extends React.Component<TagTemplateProps> {
  render() {
    const { tag } = this.props.pageContext
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout>
        <Seo
          title={`Posts in tag "${tag}"`}
        />
        <h2>Tags: {tag}</h2>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3 className="post-title">
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>Date: {node.frontmatter.date} | Category: <Link
              style={{ textDecoration: "none" }}
              to={`/categories/${_.kebabCase(node.frontmatter.category)}`}
              >
              {node.frontmatter.category}
            </Link></small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              <hr/>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default TagTemplate

export const pageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            category
            tags
          }
        }
      }
    }
  }
`
