import React from "react"
import { Link } from "gatsby"

import ConnectedCounter from '../components/ConnectedCounter'
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Link to="/page-2/">Go to page 2</Link>
    <ConnectedCounter />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
