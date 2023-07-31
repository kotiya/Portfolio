import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AboutCardClientComponent from "./AboutCardClientComponent";
import laptopImg from "../../Assets/about.png";
import TechstackClientComponent from "./TechstackClientComponent";
import ToolstackClientComponent from "./ToolstackClientComponent";
import GithubClientComponent from "./GithubClientComponent";

const AboutSection = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <AboutCardClientComponent />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <TechstackClientComponent />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <ToolstackClientComponent />

        <GithubClientComponent />
      </Container>
    </Container>
  );
};

export default AboutSection;
