import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { BsCalendar, BsDroplet, BsGem } from "react-icons/bs"
import { Disqus } from "gatsby-plugin-disqus"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import moment from "moment"

const WhiskyTemplate = ({ data }) => {
  const {
    title,
    types,
    years,
    price,
    description: { description },
    image,
    content,
    url,
    createdAt,
    updatedAt,
  } = data.contentfulWhisky
  const pathToImage = getImage(image)
  const { tags, impression } = content
  const disqusConfig = {
    identifier: url,
    title: title,
  }
  return (
    <Layout>
      <SEO title={title} />
      <main className="page">
        <div className="whisky-page">
          {/* hero */}
          <section className="whisky-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="about-img"
            />
            <article className="whisky-info">
              <h2>{title}</h2>
              <h6 align="right">
                작성 : {moment(createdAt).format(`YY.MM.DD HH:mm`)}　 갱신 :{" "}
                {moment(updatedAt).format(`YY.MM.DD HH:mm`)}
              </h6>
              <p>{description}</p>
              {/* icons */}
              <div className="whisky-icons">
                <article>
                  <BsDroplet />
                  <h5>types</h5>
                  <p>{types}</p>
                </article>
                <article>
                  <BsCalendar />
                  <h5>years</h5>
                  <p>{years}</p>
                </article>
                <article>
                  <BsGem />
                  <h5>price</h5>
                  <p>{price}</p>
                </article>
              </div>
              {/* tags */}
              <p className="whisky-tags">
                Tags :{" "}
                {tags.map((tag, index) => {
                  return (
                    <Link to={`/tags/${decodeURI(tag)}`} key={index}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          {/* whisky of the content */}
          <section className="whisky-content">
            <article>
              <div>
                <h4>impression</h4>
                {impression}
              </div>
            </article>
          </section>
        </div>
        <Disqus config={disqusConfig} />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getsingleWhisky($url: String) {
    contentfulWhisky(url: { eq: $url }) {
      title
      types
      years
      price
      content {
        impression
        tags
      }
      description {
        description
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
      url
      createdAt
      updatedAt
    }
  }
`

export default WhiskyTemplate
