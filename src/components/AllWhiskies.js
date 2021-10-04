import React from "react"
import TagsList from "./TagsList"
import WhiskiesList from "./WhiskiesList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulWhisky(sort: { fields: id, order: DESC }) {
      nodes {
        id
        title
        types
        price
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        url
      }
    }
  }
`
const AllWhiskies = () => {
  const data = useStaticQuery(query)
  const whiskies = data.allContentfulWhisky.nodes
  return (
    <section className="whiskies-container">
      <TagsList whiskies={whiskies} />
      <WhiskiesList whiskies={whiskies} />
    </section>
  )
}

export default AllWhiskies
