import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import { Profile } from "../components/image"
import SEO from "../components/seo"

const ProfileImage = styled(Profile)`
  width: 200px;
`

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`Jonathan Ruiz`, `portfolio`, `web developer`]}
    />
    <h1>About Me</h1>
    <p>
      I usually go by Johnny! I am a Front-End Developer from Miami, Florida and
      am currently attending Brigham Young University - Idaho.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <ProfileImage />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
