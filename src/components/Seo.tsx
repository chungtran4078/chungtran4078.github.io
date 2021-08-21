import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'


type StaticQueryData = {
  site: {
    siteMetadata: {
      description: string,
      image: string,
      title: string,
      author: string,
    },
  },
}

type SeoProps = {
  description?: string,
  lang?: string,
  meta?: Array<{name: string, content: string}>,
  keywords?: string[],
  title: string,
  image?: string | null,
}

export default class Seo extends React.Component<SeoProps> {
  render() {
    const { description, lang = 'en', meta = [], keywords = [], title, image } = this.props
    return (
      <StaticQuery
        query={
          graphql`
            query DefaultSeoQuery {
              site {
                siteMetadata {
                  title
                  description
                  author
                  image
                }
              }
            }
        `
        }
        render={(data: StaticQueryData): React.ReactElement | null => {
          const metaDescription = description || data.site.siteMetadata.description
          const metaImage = image || data.site.siteMetadata.image
          return (
            <Helmet
              htmlAttributes={{
                lang,
              }}
              title={title}
              titleTemplate={`%s | ${data.site.siteMetadata.title}`}
              meta={[
                {
                  name: `description`,
                  content: metaDescription,
                },
                {
                  property: `og:title`,
                  content: title,
                },
                {
                  property: `og:description`,
                  content: metaDescription,
                },
                {
                  property: `og:type`,
                  content: `website`,
                },
                {
                  property: `og:image`,
                  content: metaImage,
                },
                {
                  name: `twitter:card`,
                  content: `summary`,
                },
                {
                  name: `twitter:creator`,
                  content: data.site.siteMetadata.author,
                },
                {
                  name: `twitter:title`,
                  content: title,
                },
                {
                  name: `twitter:description`,
                  content: metaDescription,
                },
                {
                  name: `google-site-verification`,
                  content: 'OXO63UNlYgp3J5znjIDm1AWeHj7MCcoSLxJV3ucTSUo',
                },
              ]
                .concat(
                  keywords.length > 0
                    ? {
                        name: `keywords`,
                        content: keywords.join(`, `),
                      }
                    : []
                )
                .concat(meta)}
            />
          )
        }}
      />
    )
  }
}

