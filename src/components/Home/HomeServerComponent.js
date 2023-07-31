import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

function HomeServerComponent() {
  const { push } = useRouter();

  useEffect(() => {
    // Add any necessary event listeners here
    // Example: window.addEventListener('load', setTimestamp);
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SOUMYAJIT BEHERA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <HomeClientComponent />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

function HomeClientComponent() {
  return (
    <Image
      alt="home pic"
      src={homeLogo}
      className="img-fluid"
      style={{ maxHeight: "450px" }}
      width={500}
      height={450}
    />
  );
}

export default HomeServerComponent;