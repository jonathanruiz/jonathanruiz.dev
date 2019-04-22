import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const LogoImg = styled(Img)`
  width: 60px;
`

const Logo = ({ alt }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <LogoImg fluid={data.placeholderImage.childImageSharp.fluid} alt={alt} />
    )}
  />
)

export default Logo
