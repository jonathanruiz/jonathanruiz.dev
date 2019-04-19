import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "devicon"
import Gatsby from "../images/gatsbyjs-icon.svg"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Profile from "../components/images/profile"
import Udacity from "../components/images/udacity"
import TestOut from "../components/images/testout"
import MTA from "../components/images/mta"
import CIW from "../components/images/ciw"

const Sections = styled.section`
  margin-bottom: 20px;
`

const Heading = styled.h1`
  text-align: center;
`

const SubHeading = styled.h2`
  margin-top: 20px;
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
  text-align: center;

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

  @media (min-width: 600px) {
    font-size: 70px;
  }

  @media (min-width: 800px) {
    font-size: 90px;
  }
`
const SkillText = styled.p`
  font-size: 10px;

  @media (min-width: 600px) {
    font-size: 12px;
  }

  @media (min-width: 800px) {
    font-size: 16px;
  }
`

const Certification = styled.div``

const CertificationItem = styled.div`
  margin: 10px 0;
  padding: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
`

const CertHeading = styled.h3`
  margin: 5px 0;
`

const CertContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`

const CertText = styled.p`
  order: 1;

  @media (min-width: 700px) {
    order: 0;
    width: 75%;
    margin-left: 20px;
    margin-bottom: 0;
  }
`

const GatsbyImage = styled.img`
  margin: 0;
  width: 60px;
  height: 60px;

  @media (min-width: 600px) {
    width: 70px;
    height: 70px;
  }

  @media (min-width: 800px) {
    width: 90px;
    height: 90px;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`Jonathan Ruiz`, `portfolio`, `web developer`, `react`]}
    />
    <Sections id="about">
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

      <SubHeading>Skills</SubHeading>
      <Skills>
        <LangTech>
          <h3>Languages/Technologies</h3>
          <Items>
            <SkillItem>
              <i className="devicon-html5-plain colored" />
              <SkillText>HTML5</SkillText>
            </SkillItem>
            <SkillItem>
              <i className="devicon-css3-plain colored" />
              <SkillText>CSS3</SkillText>
            </SkillItem>
            <SkillItem>
              <i className="devicon-sass-original colored" />
              <SkillText>Sass</SkillText>
            </SkillItem>
            <SkillItem>
              <i className="devicon-javascript-plain colored" />
              <SkillText>Javascript</SkillText>
            </SkillItem>
            <SkillItem>
              <i className="devicon-react-original colored" />
              <SkillText>React.js</SkillText>
            </SkillItem>
            <SkillItem>
              <GatsbyImage src={Gatsby} alt="Gatsby" />
              <SkillText>Gatsby.js</SkillText>
            </SkillItem>
            <SkillItem>
              <i className="devicon-nodejs-plain colored" />
              <SkillText>Node.js</SkillText>
            </SkillItem>
            <SkillItem>
              <i className="devicon-express-original colored" />
              <SkillText>Express.js</SkillText>
            </SkillItem>
            <SkillItem>
              <i className="devicon-mongodb-plain colored" />
              <SkillText>MongoDB</SkillText>
            </SkillItem>
            <SkillItem>
              <i className="devicon-cplusplus-line colored" />
              <SkillText>C++</SkillText>
            </SkillItem>
          </Items>
        </LangTech>
        <DevOther>
          <h3>Dev Tool/Other</h3>
          <Items>
            <SkillItem>
              <i className="devicon-visualstudio-plain colored" />
              <SkillText>VS Code</SkillText>
            </SkillItem>
            <SkillItem>
              <i className="devicon-git-plain colored" />
              <SkillText>Git</SkillText>
            </SkillItem>
            <SkillItem>
              <i className="devicon-github-plain colored" />
              <SkillText>GitHub</SkillText>
            </SkillItem>
            <SkillItem>
              <i className="devicon-grunt-line colored" />
              <SkillText>Grunt</SkillText>
            </SkillItem>
            <SkillItem>
              <i className="devicon-gulp-plain colored" />
              <SkillText>Gulp</SkillText>
            </SkillItem>
            <SkillItem>
              <i className="devicon-photoshop-plain colored" />
              <SkillText>Photoshop</SkillText>
            </SkillItem>
            <SkillItem>
              <i className="devicon-slack-plain colored" />
              <SkillText>Slack</SkillText>
            </SkillItem>
          </Items>
        </DevOther>
      </Skills>

      <SubHeading>Certifications</SubHeading>
      <Certification>
        <CertificationItem>
          <CertHeading>Front End Web Nanodegree</CertHeading>
          <h4>Udacity</h4>
          <CertContent>
            <CertText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              culpa qui beatae. Ipsum distinctio voluptate doloremque minima
              atque dicta, sint quasi harum temporibus odio quaerat? Illum sequi
              eius quis quos! Molestiae veniam quas optio illum laboriosam
              soluta minus nobis eius.
            </CertText>
            <Udacity />
          </CertContent>
        </CertificationItem>
        <CertificationItem>
          <CertHeading>Switching Pro Certification</CertHeading>
          <h4>TestOut</h4>
          <CertContent>
            <CertText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              culpa qui beatae. Ipsum distinctio voluptate doloremque minima
              atque dicta, sint quasi harum temporibus odio quaerat? Illum sequi
              eius quis quos! Molestiae veniam quas optio illum laboriosam
              soluta minus nobis eius.
            </CertText>
            <TestOut />
          </CertContent>
        </CertificationItem>
        <CertificationItem>
          <CertHeading>MTA: Security Fundamentals</CertHeading>
          <h4>Microsoft</h4>
          <CertContent>
            <CertText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              culpa qui beatae. Ipsum distinctio voluptate doloremque minima
              atque dicta, sint quasi harum temporibus odio quaerat? Illum sequi
              eius quis quos! Molestiae veniam quas optio illum laboriosam
              soluta minus nobis eius.
            </CertText>
            <MTA />
          </CertContent>
        </CertificationItem>
        <CertificationItem>
          <CertHeading>CIW Network Technology Associate</CertHeading>
          <h4>CIW</h4>
          <CertContent>
            <CertText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              culpa qui beatae. Ipsum distinctio voluptate doloremque minima
              atque dicta, sint quasi harum temporibus odio quaerat? Illum sequi
              eius quis quos! Molestiae veniam quas optio illum laboriosam
              soluta minus nobis eius.
            </CertText>
            <CIW />
          </CertContent>
        </CertificationItem>
      </Certification>
    </Sections>
    <Sections id="projects">
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
    </Sections>
    <Sections id="contact">
      <Heading>Contact</Heading>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        exercitationem unde, aspernatur at dicta eius numquam voluptatem beatae
        in reiciendis eveniet? Consequatur odio excepturi minus!
      </p>
    </Sections>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
