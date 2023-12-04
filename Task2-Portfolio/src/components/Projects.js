import React from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Nav from "react-bootstrap/Nav";
import { ProjectCard } from "./ProjectCard";
import project1 from "../assets/img/project-img1.png";
import project2 from "../assets/img/project-img2.png";
import project3 from "../assets/img/project-img3.png";
const Projects = () => {
  const project = [
    {
      title: "Business Administration",
      description: "Lorem Ipsum",
      imgUrl: project1,
    },
    {
      title: "Business Administration",
      description: "Lorem Ipsum",
      imgUrl: project2,
    },
    {
      title: "Business Administration",
      description: "Lorem Ipsum",
      imgUrl: project3,
    },
    {
      title: "Business Administration",
      description: "Lorem Ipsum",
      imgUrl: project1,
    },
    {
      title: "Business Administration",
      description: "Lorem Ipsum",
      imgUrl: project2,
    },
  ];
  
  
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
            I've developed engaging websites and applications, blending creativity with technical expertise to deliver impactful digital solutions.
            </p>
            <Tab.Container
              className="projects-tabs"
              defaultActiveKey="first"
            >
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {project.map((projects, index) => (
                      <ProjectCard key={index} {...projects} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>Content for Tab Two</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>Content for Tab Three</p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};

export default Projects;
