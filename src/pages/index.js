import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllWhiskies from "../components/AllWhiskies"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home " />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpg"
            alt="bottle"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Luv Whisky</h1>
              <h4>개인적인 위스키 감상 노트</h4>
            </div>
          </div>
        </header>
        <AllWhiskies />
      </main>
    </Layout>
  )
}
