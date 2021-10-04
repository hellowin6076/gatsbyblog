import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import WhiskiesList from "../components/WhiskiesList"
import SEO from "../components/SEO"

const Contact = ({ data }) => {
  const whiskies = data.allContentfulWhisky.nodes
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              First you take a drink, then the drink takes a drink, then the
              drink takes you. - F. Scott Fitzgerald
            </p>
            <p>
              Too much of anything is bad, but too much good whiskey is barely
              enough. – Mark Twain
            </p>
            <p>
              I like whiskey. I always did, and that is why I never drink it. –
              Robert E. Lee
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mdoyjzlj"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name"></input>
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email"></input>
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-whiskies">
          <h5>Look at this Awesomesouce!</h5>
          <WhiskiesList whiskies={whiskies} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulWhisky(
      sort: { fields: title, order: ASC }
      filter: { freatured: { eq: true } }
    ) {
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

export default Contact
