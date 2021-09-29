import * as React from "react"
import Intro from "../components/Intro"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
	<Intro />
	<Trips />
	<Testimonials />
  </Layout>
)

export default IndexPage
