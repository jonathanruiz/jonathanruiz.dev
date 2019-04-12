import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

// Styled Components
const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  margin-bottom: 1.45rem;
`

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Heading = styled.h1`
  margin: 0;
  flex-grow: 1;
`

const HeadingLink = styled(Link)`
  color: rebeccapurple;
  text-decoration: none;
`

const List = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;
`

const ListItem = styled.li`
  padding: 1em;
`

const ItemLink = styled.a`
  color: rebeccapurple;
  text-decoration: none;
`

// Heading
const Header = ({ siteTitle }) => (
  <Container>
    <Inner>
      <Heading>
        <HeadingLink to="/">{siteTitle}</HeadingLink>
      </Heading>
      <List>
        <ListItem>
          <ItemLink href="#">About</ItemLink>
        </ListItem>
        <ListItem>
          <ItemLink href="#">Projects</ItemLink>
        </ListItem>
        <ListItem>
          <ItemLink href="#">Contact</ItemLink>
        </ListItem>
      </List>
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
