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
import Comnets from "../components/images/comnets"
import UnsacredGrove from "../components/images/unsacredgrove"
import NeighborhoodMap from "../components/images/neighborhood"

import TestOutCert from "../pdf/testout-cert.pdf"
import CIWCert from "../pdf/ciw-cert.pdf"

const Sections = styled.section`
  margin-bottom: 20px;

  h1 {
    text-align: center;
  }

  h2 {
    margin-top: 20px;
  }
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

  li {
    font-size: 60px;
    margin: 10px;
  }

  p {
    font-size: 10px;
  }

  @media (min-width: 600px) {
    li {
      font-size: 70px;
    }

    p {
      font-size: 12px;
    }
  }

  @media (min-width: 800px) {
    li {
      font-size: 90px;
    }

    p {
      font-size: 16px;
    }
  }
`

const Certification = styled.div``

const CertificationItem = styled.div`
  margin: 10px 0;
  padding: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;

  h3 {
    margin: 5px 0;
  }
`

const CertContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  margin-bottom: 10px;

  p {
    order: 1;
  }

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-evenly;

    p {
      order: 0;
      width: 75%;
      margin-left: 20px;
      margin-bottom: 0;
    }
  }
`

const CertLink = styled.h4`
  margin-left: 20px;

  a {
    color: #048484;
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

const Projects = styled.div`
  @media (min-width: 800px) {
    display: flex;
    justify-content: center;
  }
`

const ProjectItem = styled.div`
  margin: 10px;
  padding: 16px;
  border-radius: 5px;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  h3 {
    // margin: 0;
    text-align: center;
    font-size: 18px;
  }

  @media (min-width: 800px) {
    width: 33%;
  }
`

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-top: 10px;

  ul {
    display: flex;
    flex-flow: wrap;
    list-style: none;
    margin: 0;

    li {
      padding: 5px;
      margin: 5px;
      border: 1px solid;
      border-radius: 5px;
      color: #fff;
      background-color: #048484;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`Jonathan Ruiz`, `portfolio`, `web developer`, `react`]}
    />
    <Sections id="about">
      <h1>About Me</h1>
      <Info>
        <ImageContainer>
          <ProfileImage />
        </ImageContainer>
        <div>
          <p>
            But you can call me Johnny! I am a Front-End Developer from Miami,
            Florida and am currently attending Brigham Young University - Idaho.
            I have recently found a passion for cooking and constantly look for
            new food to make (so shoot me an email if you have a tasty recipe).
            I love the outdoors! Anything from hiking to white water rafting
            (although I have only done it once) to canoeing.
          </p>
          <p>
            From a young age, I was facinated by computers and was determined to
            learn how to create apps. Two years ago, I learned how Javascript
            can be used to not only make websites but mobile and desktop apps
            and back-ends. From then I have worked on molding myself to become a
            Front-End Developer and currently working learning to do things as a
            Full-Stack Developer.
          </p>
        </div>
      </Info>

      <h2>Skills</h2>
      <Skills>
        <LangTech>
          <h3>Languages/Technologies</h3>
          <Items>
            <li>
              <i className="devicon-html5-plain colored" />
              <p>HTML5</p>
            </li>
            <li>
              <i className="devicon-css3-plain colored" />
              <p>CSS3</p>
            </li>
            <li>
              <i className="devicon-sass-original colored" />
              <p>Sass</p>
            </li>
            <li>
              <i className="devicon-javascript-plain colored" />
              <p>Javascript</p>
            </li>
            <li>
              <i className="devicon-react-original colored" />
              <p>React.js</p>
            </li>
            <li>
              <GatsbyImage src={Gatsby} alt="Gatsby" />
              <p>Gatsby.js</p>
            </li>
            <li>
              <i className="devicon-nodejs-plain colored" />
              <p>Node.js</p>
            </li>
            <li>
              <i className="devicon-express-original colored" />
              <p>Express.js</p>
            </li>
            <li>
              <i className="devicon-mongodb-plain colored" />
              <p>MongoDB</p>
            </li>
            <li>
              <i className="devicon-cplusplus-line colored" />
              <p>C++</p>
            </li>
          </Items>
        </LangTech>
        <DevOther>
          <h3>Dev Tool/Other</h3>
          <Items>
            <li>
              <i className="devicon-visualstudio-plain colored" />
              <p>VS Code</p>
            </li>
            <li>
              <i className="devicon-git-plain colored" />
              <p>Git</p>
            </li>
            <li>
              <i className="devicon-github-plain colored" />
              <p>GitHub</p>
            </li>
            <li>
              <i className="devicon-grunt-line colored" />
              <p>Grunt</p>
            </li>
            <li>
              <i className="devicon-gulp-plain colored" />
              <p>Gulp</p>
            </li>
            <li>
              <i className="devicon-photoshop-plain colored" />
              <p>Photoshop</p>
            </li>
            <li>
              <i className="devicon-slack-plain colored" />
              <p>Slack</p>
            </li>
          </Items>
        </DevOther>
      </Skills>

      <h2>Certifications</h2>
      <Certification>
        <CertificationItem>
          <h3>Front End Web Nanodegree</h3>
          <h4>Udacity</h4>
          <CertContent>
            <p>
              On January 2018, I was awarded the Grow with Google Scholarship
              and graduated from Udacity's Nanodegree program that is in
              collaboration with Google. I worked on projects that taught me
              anything from accesibility, flexbox and implementing Javascript on
              web pages to things like React, Angular, asynchronous fetch
              requests and Service Workers. I've cherished the things I have
              learned and has guided me to be a better developer and problem
              solver.
            </p>
            <Udacity />
          </CertContent>
          <CertLink>
            <a
              href={"https://graduation.udacity.com/confirm/WLGWHCV5"}
              target="_blank"
              rel="noopener noreferrer"
            >
              See Credential
            </a>
          </CertLink>
        </CertificationItem>
        <CertificationItem>
          <h3>Switching Pro Certification</h3>
          <h4>TestOut</h4>
          <CertContent>
            <p>
              Although it is not very related to web development, I was able to
              learn how devices communicate with each other and how to use the
              command line to configure Cisco switching devices. Definitely one
              of the hardest courses I have ever taken but rewarding.
            </p>
            <TestOut />
          </CertContent>
          <CertLink>
            <a href={TestOutCert} target="_blank" rel="noopener noreferrer">
              See Credential
            </a>
          </CertLink>
        </CertificationItem>
        <CertificationItem>
          <h3>MTA: Security Fundamentals</h3>
          <h4>Microsoft</h4>
          <CertContent>
            <p>
              This Information Security certification by Microsoft taught me how
              to make sure that devices are safe and secure. I learned about
              physical, Internet and wireless security; how protect yourself
              from malware, why is encryption important and how it can protect
              data and how to make wireless connections secure. Although
              programming is my passion, I love to learn about computers in
              general and have pursued further understanding. I am also working
              on taking the CompTIA Security+ exam soon.
            </p>
            <MTA />
          </CertContent>
          <CertLink>
            <a
              href="https://www.youracclaim.com/badges/b6947e68-81f9-44d8-84a9-ad982f4fefa3/linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              See Credential
            </a>
          </CertLink>
        </CertificationItem>
        <CertificationItem>
          <h3>CIW Network Technology Associate</h3>
          <h4>CIW</h4>
          <CertContent>
            <p>
              In High School, I took this entry level certificaiton. It did set
              a foundation for some of the things I would learn later in the
              future. I learn the fundementals of networking, Internet protocols
              and network security, which believe that a web developer should
              know since we build sites and apps that are on the Internet. But
              from the very beginning I have alwasys been interested in tech and
              it has led to my deveotion for coding.
            </p>
            <CIW />
          </CertContent>
          <CertLink>
            <a href={CIWCert} target="_blank" rel="noopener noreferrer">
              See Credential
            </a>
          </CertLink>
        </CertificationItem>
      </Certification>
    </Sections>
    <Sections id="projects">
      <h1>Projects</h1>
      <p>
        Here are some of my personal and professional projects I have developed,
        not including this site which was built with Gatsby.js.
      </p>
      <Projects>
        <ProjectItem>
          <h3>Comnets Consulting Corps</h3>
          <Comnets />
          <ProjectContent>
            <p>
              I built the front-end, back-end and hosted it myself on a server.
              It uses a simple and minimal CSS framework called Skeleton but the
              rest is built from the scratch from top to bottom.
            </p>
            <span>Built with:</span>
            <ul>
              <li>HTML</li>
              <li>Handlebars</li>
              <li>Sass</li>
              <li>Javascript</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Gulp</li>
            </ul>
          </ProjectContent>
        </ProjectItem>
        <ProjectItem>
          <h3>Unsacred Grove</h3>
          <UnsacredGrove />
          <ProjectContent>
            <p>
              I decided to go with a JAMStack and use a headless CMS called
              Sanity. It pulls from the CMS and dynamically builds the pages
              with the content on Sanity.
            </p>
            <span>Built with:</span>
            <ul>
              <li>React.js</li>
              <li>Gatsby</li>
              <li>GraphQL</li>
              <li>Sass</li>
              <li>Sanity CMS</li>
            </ul>
          </ProjectContent>
        </ProjectItem>
        <ProjectItem>
          <h3>Miami Neighborhood Map</h3>
          <NeighborhoodMap />
          <ProjectContent>
            <p>
              This React app shows some of the popular restaurants and tourist
              spots in Miami. It uses the Google Maps API to mark them on the
              map and then FourSquare API to display information about it.
            </p>
            <span>Built with:</span>
            <ul>
              <li>React.js</li>
              <li>Sass</li>
              <li>Google Maps API</li>
              <li>FourSquare API</li>
            </ul>
          </ProjectContent>
        </ProjectItem>
      </Projects>
    </Sections>
    <Sections id="contact">
      <h1>Contact</h1>
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
