import React from 'react'
import { Link, graphql } from 'gatsby'
import _ from "lodash";
import { getSrc } from "gatsby-plugin-image"
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Tags from '../components/Tags'

type BlogPostProps = {
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
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        tags: string[],
        title: string,
        date: string,
        category: string,
        image: any,
      }
    }
  },
  pageContext: {
    previous: {
      fields: {
        slug: string
      },
      frontmatter: {
        title: string
      }
    },
    next: {
      fields: {
        slug: string
      },
      frontmatter: {
        title: string
      }
    }
  },
}

class BlogPostTemplate extends React.Component<BlogPostProps> {
  render() {
    const post = this.props.data.markdownRemark
    
    const { previous, next } = this.props.pageContext

    return (
      <Layout>
        <Seo title={post.frontmatter.title} description={post.excerpt} image={getSrc(post.frontmatter.image)}/>
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
            gatsbyImageData(width: 630)
          }
        }
      }
    }
  }
`