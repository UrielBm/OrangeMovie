import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "./../css/home.scss"
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
  </Layout>
)

export default IndexPage
