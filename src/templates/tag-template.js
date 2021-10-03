import React from "react"
import { graphql } from "gatsby"
import WhiskiesList from "../components/WhiskiesList"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const TagTempalte = ({ data, pageContext }) => {
  const whiskies = data.allContentfulWhisky.nodes
  return (
    <Layout>
      <SEO title={pageContext.tag} />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <WhiskiesList whiskies={whiskies} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetWhiskiesByTag($tag: String) {
    allContentfulWhisky(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        types
        price
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        url
      }
    }
  }
`

export default TagTempalte
