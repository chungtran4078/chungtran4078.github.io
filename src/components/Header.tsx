import { Link } from 'gatsby'
import React from 'react'

type HeaderProps = {
  siteTitle: string,
}

export default function Header ({ siteTitle = '' } : HeaderProps) {
  return (
    <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <div className="site-title">
          <Link to={'/'}>{siteTitle}</Link>
        </div>
        <p className="site-sub-title">Lôm côm, ba lăng nhăng.</p>
      </div>
  )
}
