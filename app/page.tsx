import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../../app/Particle";
import Home2 from "../../app/Home2";
import Type from "../../app/Type";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

function Home() {
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
              <Image
                alt="home pic"
                src={homeLogo}
                className="img-fluid"
                style={{ maxHeight: "450px" }}
                width={500}
                height={450}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;