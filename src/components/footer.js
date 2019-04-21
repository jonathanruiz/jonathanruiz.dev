import React from "react"
import styled from "styled-components"

const Container = styled.div`
  font-family: Poppins, Roboto, sans-serif;
  background-color: #fff;
`

const Inner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding-bottom: 20px;
  color: #000;

  hr {
    margin-left: 50px;
    margin-right: 50px;
    height: 2px;
    border-radius: 3px;
  }

  footer {
    text-align center;
  }
`

const Footer = () => (
  <Container>
    <Inner>
      <hr />
      <footer>© {new Date().getFullYear()}, built by Jonathan Ruiz</footer>
    </Inner>
  </Container>
)

export default Footer
