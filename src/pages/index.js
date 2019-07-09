import React from "react"
import { Link } from "gatsby"

import AuthChecker from '../components/AuthChecker'
import CatModal from '../components/CatModal'
import ModalOpenBtn from '../components/ModalOpenBtn'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AuthChecker />
    <ModalOpenBtn />
    <Link to="/page-2">Check that Page 2</Link>
    <CatModal />
  </Layout>
 
)

export default IndexPage
