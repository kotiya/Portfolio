import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AboutCard from "./AboutCard";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Github from "./Github";
import Image from "next/image";
import laptopImg from "../../Assets/about.png";
import { useRouter } from "next/router";
import Link from "next/link";

function About() {
  useEffect(() => {
    window.addEventListener("load", setTimestamp);
    return () => {
      window.removeEventListener("load", setTimestamp);
    };
  }, []);

  const setTimestamp = () => {
    // your code here
  };

  const { push: fn_name } = useRouter();

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
            <AboutCard />
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