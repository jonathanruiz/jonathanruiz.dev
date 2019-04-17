import React from "react"
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

const NavLink = styled.a`
  padding: 1em;
  color: rebeccapurple;
  font-weight: bold;
  text-decoration: none;
`

const Navagation = () => (
  <Container>
    <Inner>
      <Nav>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Projects</NavLink>
        <NavLink href="#">Contact</NavLink>
      </Nav>
    </Inner>
  </Container>
)

export default Navagation
