import React from "react"
import Layout from "../components/Layout"
import AllWhiskies from "../components/AllWhiskies"
import SEO from "../components/SEO"

const Whiskies = () => {
  return (
    <Layout>
      <SEO title="Whiskies" />
      <main className="page">
        <AllWhiskies />
      </main>
    </Layout>
  )
}

export default Whiskies
