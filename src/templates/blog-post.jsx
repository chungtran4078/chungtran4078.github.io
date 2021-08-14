import React from 'react'
import { Link, graphql } from 'gatsby'
import _ from "lodash";
import Layout from '../components/layout'
import Seo from '../components/seo'
import Tags from '../components/Tags'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Seo title={post.frontmatter.title} description={post.excerpt} image={post.frontmatter.image ? post.frontmatter.image.childImageSharp.sizes.src : null}/>
        <div className="post-meta">
          <h1 className="post-title">{post.frontmatter.title}</h1>
          <small>Date: {post.frontmatter.date} | Category: <Link
                style={{ textDecoration: "none" }}
                to={`/categories/${_.kebabCase(post.frontmatter.category)}`}
                >
                {post.frontmatter.category}
              </Link></small>
        </div>
        <hr/>
        <div className="post-content">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <Tags tags={post.frontmatter.tags}/>
        <hr/>

        <ul className="prev-next">
            {previous && (
              <li>
                <span>Prev:</span>
                <Link to={previous.fields.slug} rel="prev">
                  {previous.frontmatter.title}
                </Link>
              </li>
            )}
            {next && (
              <li>
                <span>Next:</span>
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title}
                </Link>
              </li>
            )}
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        category
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 630) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`