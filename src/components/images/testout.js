import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const CertImage = styled(Img)`
  width: 50%;

  @media (min-width: 700px) {
    width: 25%;
    margin-right: 20px;
    margin-bottom: 0;
  }
`

const TestOut = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "testout.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <CertImage fluid={data.placeholderImage.childImageSharp.fluid} />
    )}
  />
)

export default TestOut
