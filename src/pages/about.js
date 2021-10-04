import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import WhiskiesList from "../components/WhiskiesList"
import SEO from "../components/SEO"

const About = ({
  data: {
    allContentfulWhisky: { nodes: whiskies },
  },
}) => {
  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>개인적인 위스키 감상 노트</h2>
            <p>
              이름과는 다르게 이 블로그는 개츠비 학습 목적으로 만들어진
              블로그입니다. 위스키는 학습을 위한 구실일 뿐입니다.
            </p>
            <p>
              그러다보니 위스키에 대해서는 전문가적인 식견은 없습니다. 위스키
              마시기 시작한지 3개월 밖에 안된 사람이 내돈내산으로 먹고 마신
              그날의 위스키의 감상을 적는것 뿐입니다.
            </p>
            <p>
              위스키 초보이므로 감상 공유나 잘 못된 정보의 지적은 언제든
              환영합니다.　블로그 구성에 대한 조언도 물론 환영합니다.
            </p>

            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpg"
            alt="Whiskey Barrel"
            className="about-img"
            placeholder="blurred"
          />
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

export default About
