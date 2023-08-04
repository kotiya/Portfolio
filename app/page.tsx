import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "public/Assets/home-main.svg";
import Particle from "../src/components/Particle";
import Home2 from "../src/components/Home/Home2";
import Type from "../src/components/Home/Type";

function Home() {
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
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
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
import React from "react";ReactReact"react"
import { Container, Row, Col } from "react-bootstrap";ContainerContainerContainerRowRowRowColColCol"react-bootstrap"import homeLogo from "public/Assets/home-main.svg";homeLogohomeLogo"public/Assets/home-main.svg"import Particle from "../src/components/Particle";ParticleParticle"../src/components/Particle"import Home2 from "../src/components/Home/Home2";Home2Home2"../src/components/Home/Home2"import Type from "../src/components/Home/Type";TypeType"../src/components/Home/Type"
```jsx
import Image from 'next/image';

function Home() {
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
                src={homeLogo}
                alt="home pic"
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
```
```jsx
import Image from 'next/image';

// ...

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
              src={homeLogo}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
    <Home2 />
  </section>
);
```
```jsx
import Image from 'next/image';

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
              src={homeLogo}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
    <Home2 />
  </section>
);
```
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
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section><section>section
```jsx
import Image from 'next/image';

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
          src={homeLogo}
          alt="home pic"
          className="img-fluid"
          style={{ maxHeight: "450px" }}
        />
      </Col>
    </Row>
  </Container>
</Container>
```
```jsx
import Image from 'next/image';

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
        src={homeLogo}
        alt="home pic"
        className="img-fluid"
        style={{ maxHeight: "450px" }}
      />
    </Col>
  </Row>
</Container>
```
```jsx
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
      src={homeLogo}
      alt="home pic"
      className="img-fluid"
      style={{ maxHeight: "450px" }}
    />
  </Col>
</Row>
```
className="home-header"className"home-header"
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1><h1 style={{ paddingBottom: 15 }} className="heading">h1style={{ paddingBottom: 15 }}style{{ paddingBottom: 15 }}{ paddingBottom: 15 }paddingBottom: 15paddingBottom15className="heading"className"heading"
                Hi There!{" "}" "
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span><span className="wave" role="img" aria-labelledby="wave">spanclassName="wave"className"wave"role="img"role"img"aria-labelledby="wave"aria-labelledby"wave"
                  👋🏻
                </span>span
              </h1>h1

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SOUMYAJIT BEHERA</strong>
              </h1><h1 className="heading-name">h1className="heading-name"className"heading-name"
                I'M
                <strong className="main-name"> SOUMYAJIT BEHERA</strong><strong className="main-name">strongclassName="main-name"className"main-name" SOUMYAJIT BEHERA</strong>strong
              </h1>h1

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div><div style={{ padding: 50, textAlign: "left" }}>div
```jsx
import Image from 'next/image';

// ...

<Col md={5} style={{ paddingBottom: 20 }}>
  <Image
    src={homeLogo}
    alt="home pic"
    className="img-fluid"
    style={{ maxHeight: "450px" }}
  />
</Col>
```