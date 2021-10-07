import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${metaDescription}`}
      meta={[
        {
          name: `google-site-verification`,
          content: `OPQn_CdAjWgEB4bSXSZS_D-68IdDxHBmRySgr-qZpGs`,
        },
        {
          name: `naver-site-verification`,
          content: `b0c6d618ba2ef787badd2d00f23b2ba28cf93334`,
        },
        { name: `description`, content: description },
      ]}
    ></Helmet>
  )
}

export default SEO
