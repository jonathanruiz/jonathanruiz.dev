import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Heading = styled.h1`
  margin: 0;
`

const HeadingLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <Container>
    <Inner>
      <Heading>
        <HeadingLink to="/">{siteTitle}</HeadingLink>
      </Heading>
    </Inner>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
