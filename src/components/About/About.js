import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import Image from "next/image";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import AboutSection from "./AboutSection";
import ProfessionalSkillset from "./ProfessionalSkillset";
import ToolsUsed from "./ToolsUsed";

function About() {
  const { push } = useRouter();

  useEffect(() => {
    const setTimestamp = () => {
      // Add your logic here
    };

    window.addEventListener("load", setTimestamp);

    return () => {
      window.removeEventListener("load", setTimestamp);
    };
  }, []);

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
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <Image src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <AboutSection />
        <ProfessionalSkillset />
        <ToolsUsed />
        <Github />
      </Container>
    </Container>
  );
}

export default About;