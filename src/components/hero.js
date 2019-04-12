import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const BigHero = styled.div`
  background: url("../images/trianglify.png");
`

const Hero = () => (
  <BigHero>
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "trianglify.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      )}
    />
  </BigHero>
)

export default Hero
