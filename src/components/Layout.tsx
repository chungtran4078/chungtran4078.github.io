import React, { ReactNode } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Header from './Header'

type StaticQueryData = {
  site: {
    siteMetadata: {
      title: string,
    },
  },
}

type LayoutProps = {
  children: ReactNode
}

export default function Layout ({ children } : LayoutProps) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data: StaticQueryData) => (
        <div>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            {children}
            <footer>
              © me 2018, Built with <a target="_blank" rel="noopener noreferrer" href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </div>
        </div>
      )}
    />
  )
}
