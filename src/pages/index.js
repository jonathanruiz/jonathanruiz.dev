import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import { Profile } from "../components/image"
import SEO from "../components/seo"

const Heading = styled.h1`
  text-align: center;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`

const ImageContainer = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;

  @media (min-width: 700px) {
    padding-right: 30px;
  }
`

const ProfileImage = styled(Profile)`
  width: 200px;
`

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`Jonathan Ruiz`, `portfolio`, `web developer`]}
    />
    <section id="about">
      <Heading>About Me</Heading>
      <Info>
        <ImageContainer>
          <ProfileImage />
        </ImageContainer>
        <p>
          But you can call me Johnny! I am a Front-End Developer from Miami,
          Florida and am currently attending Brigham Young University - Idaho. I
          have recently found a passion for cooking and constantly look for new
          things to make (so shoot me an email if you have something tasty). A
          great time can be defined as going out to the outdoors and go hiking.
        </p>
      </Info>
      <h2>Skills</h2>
      <h2>Certification</h2>
    </section>
    <section id="projects">
      <Heading>Projects</Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        magni ducimus voluptatem, cum ad minus nobis iusto libero itaque
        asperiores. Facilis repellendus ipsa amet ratione unde, praesentium
        voluptate assumenda repellat vitae voluptatibus possimus animi labore
        beatae expedita neque quo nam enim nobis necessitatibus aliquid id ipsam
        dicta magnam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        magni ducimus voluptatem, cum ad minus nobis iusto libero itaque
        asperiores. Facilis repellendus ipsa amet ratione unde, praesentium
        voluptate assumenda repellat vitae voluptatibus possimus animi labore
        beatae expedita neque quo nam enim nobis necessitatibus aliquid id ipsam
        dicta magnam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        magni ducimus voluptatem, cum ad minus nobis iusto libero itaque
        asperiores. Facilis repellendus ipsa amet ratione unde, praesentium
        voluptate assumenda repellat vitae voluptatibus possimus animi labore
        beatae expedita neque quo nam enim nobis necessitatibus aliquid id ipsam
        dicta magnam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        magni ducimus voluptatem, cum ad minus nobis iusto libero itaque
        asperiores. Facilis repellendus ipsa amet ratione unde, praesentium
        voluptate assumenda repellat vitae voluptatibus possimus animi labore
        beatae expedita neque quo nam enim nobis necessitatibus aliquid id ipsam
        dicta magnam.
      </p>
    </section>
    <section id="contact">
      <Heading>Contact</Heading>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        exercitationem unde, aspernatur at dicta eius numquam voluptatem beatae
        in reiciendis eveniet? Consequatur odio excepturi minus!
      </p>
    </section>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
