import React from 'react'
import { Link, graphql } from 'gatsby'
import _ from "lodash";
import Layout from '../components/layout'
import SEO from '../components/seo'

class CategoryTemplate extends React.Component {
  render() {
    const { category } = this.props.pageContext
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={`Posts in category "${category}"`}
        />
        <h2>Category: {category}</h2>
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

export default CategoryTemplate

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { category: { eq: $category } } }
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
          }
        }
      }
    }
  }
`
