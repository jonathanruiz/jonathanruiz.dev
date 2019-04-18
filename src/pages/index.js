import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "devicon"
import Gatsby from "../images/icons/gatsbyjs-icon.svg"

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

const Skills = styled.div`
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "lt do";
  }
`

const LangTech = styled.div`
  grid-area: lt;
`

const DevOther = styled.div`
  grid-area: do;
`

const Items = styled.ul`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: center;
  margin: 0;
  list-style: none;
`

const SkillItem = styled.li`
  font-size: 60px;
  margin: 10px;
`

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`Jonathan Ruiz`, `portfolio`, `web developer`, `react`]}
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
          things to make (so shoot me an email if you have a tasty recipe). I
          love the outdoors! Anything from hiking to white water rafting
          (although I have only done it once) to canoeing.
        </p>
      </Info>

      <h2>Skills</h2>
      <Skills>
        <LangTech>
          <h3>Languages/Technologies</h3>
          <Items>
            <SkillItem>
              <i className="devicon-html5-plain colored" />
            </SkillItem>
            <SkillItem>
              <i className="devicon-css3-plain colored" />
            </SkillItem>
            <SkillItem>
              <i className="devicon-javascript-plain colored" />
            </SkillItem>
            <SkillItem>
              <i className="devicon-sass-original colored" />
            </SkillItem>
            <SkillItem>
              <i className="devicon-react-original colored" />
            </SkillItem>
            <SkillItem>
              <img src={Gatsby} alt="gatsby" />
            </SkillItem>
            <SkillItem>
              <i className="devicon-cplusplus-line colored" />
            </SkillItem>
            <SkillItem>
              <i className="devicon-express-original colored" />
            </SkillItem>
            <SkillItem>
              <i className="devicon-mongodb-plain colored" />
            </SkillItem>
            <SkillItem>
              <i className="devicon-nodejs-plain colored" />
            </SkillItem>
          </Items>
        </LangTech>
        <DevOther>
          <h3>Dev Tool/Other</h3>
          <Items>
            <SkillItem>
              <i class="devicon-git-plain colored" />
            </SkillItem>
            <SkillItem>
              <i class="devicon-github-plain colored" />
            </SkillItem>
            <SkillItem>
              <i class="devicon-grunt-line colored" />
            </SkillItem>
            <SkillItem>
              <i class="devicon-gulp-plain colored" />
            </SkillItem>
            <SkillItem>
              <i class="devicon-visualstudio-plain colored" />
            </SkillItem>
            <SkillItem>
              <i class="devicon-photoshop-plain colored" />
            </SkillItem>
            <SkillItem>
              <i class="devicon-slack-plain colored" />
            </SkillItem>
          </Items>
        </DevOther>
      </Skills>

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
