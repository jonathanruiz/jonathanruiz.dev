import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  font-family: Poppins, Roboto, sans-serif;
`

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Nav = styled.nav`
  list-style: none;
`

const NavLink = styled(Link)`
  padding: 1em;
  color: #08497c;
  font-weight: bold;
  text-decoration: none;
`

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', { speed: 1500 })
}

const Navigation = () => (
  <Container>
    <Inner>
      <Nav>
        <NavLink to="/#about">About</NavLink>
        <NavLink to="/#projects">Projects</NavLink>
        <NavLink to="/#contact">Contact</NavLink>
      </Nav>
    </Inner>
  </Container>
)

export default Navigation
