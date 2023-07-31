import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import Image from "next/image";
import Particle from "../../app/components/Particle";
import Github from "../../app/components/Github";
import Techstack from "../../app/components/Techstack";
import Aboutcard from "../../app/components/AboutCard";
import laptopImg from "../../app/Assets/about.png";
import Toolstack from "../../app/components/Toolstack";

function About() {
  const router = useRouter();

  useEffect(() => {
    const setTimestamp = () => {
      // Your setTimestamp logic here
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
            <Image
              alt="about"
              src={laptopImg}
              className="img-fluid"
              width={500}
              height={500}
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;