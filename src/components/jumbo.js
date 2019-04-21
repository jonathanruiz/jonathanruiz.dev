import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Typed from "react-typed"
import styled from "styled-components"

// Styled Components
const StyledBackgroundHeader = styled.div`
  width: 100%;
  background-repeat: repeat-y;
  background-size: cover;
`

const Container = styled.div`
  font-family: Poppins, Roboto, sans-serif;
`

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  z-index: 1;
`

const Heading = styled.h1`
  font-family: Poppins, Roboto, sans-serif;
  margin: 0;
  flex-grow: 1;
`

const HeadingLink = styled(Link)`
  color: #08497c;
  text-decoration: none;
`

const Hero = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 70vh;
`

const MainTyped = styled(Typed)`
  font-size: 30px;
  font-weight: bold;
  line-height: 1;

  @media (min-width: 480px) {
    font-size: 45px;
  }

  @media (min-width: 700px) {
    font-size: 60px;
  }
`

const SubTyped = styled(Typed)`
  line-height: 1;

  @media (min-width: 480px) {
    font-size: 20px;
  }

  @media (min-width: 700px) {
    font-size: 30px;
  }
`

const JumboHead = ({ siteTitle, className }) => (
  <StyledBackgroundHeader>
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "trianglify.png" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        const imageData = data.desktop.childImageSharp.fluid
        return (
          // Background Image
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#040e18`}
            style={{ height: "100vh" }}
          >
            <Container>
              <Inner>
                <Heading>
                  <HeadingLink to="/">{siteTitle}</HeadingLink>
                </Heading>
              </Inner>
              <Hero>
                <MainTyped
                  strings={["Hi, my name is Jonathan Ruiz"]}
                  typeSpeed={30}
                />
                <SubTyped
                  strings={[
                    "I love to hike.",
                    "I love to cook.",
                    "And I love to code!",
                  ]}
                  typeSpeed={50}
                  backSpeed={50}
                  smartBackspace
                />
              </Hero>
            </Container>
          </BackgroundImage>
        )
      }}
    />
  </StyledBackgroundHeader>
)

JumboHead.propTypes = {
  siteTitle: PropTypes.string,
}

JumboHead.defaultProps = {
  siteTitle: ``,
}

export default JumboHead
