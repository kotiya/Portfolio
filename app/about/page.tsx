
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../src/components/Particle";
import Github from "../../src/components/About/Github";
import Techstack from "../../src/components/About/Techstack";
import Aboutcard from "../../src/components/About/AboutCard";
import laptopImg from "public/Assets/about.png";
import Toolstack from "../../src/components/About/Toolstack";

function About() {
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
            <img src={laptopImg} alt="about" className="img-fluid" />
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
import React from "react";ReactReact"react"import { Container, Row, Col } from "react-bootstrap";ContainerContainerContainerRowRowRowColColCol"react-bootstrap"import Particle from "../../src/components/Particle";ParticleParticle"../../src/components/Particle"import Github from "../../src/components/About/Github";GithubGithub"../../src/components/About/Github"import Techstack from "../../src/components/About/Techstack";TechstackTechstack"../../src/components/About/Techstack"import Aboutcard from "../../src/components/About/AboutCard";AboutcardAboutcard"../../src/components/About/AboutCard"import laptopImg from "public/Assets/about.png";laptopImglaptopImg"public/Assets/about.png"import Toolstack from "../../src/components/About/Toolstack";ToolstackToolstack"../../src/components/About/Toolstack"
```jsx
import Image from 'next/image';

function About() {
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
```
{
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
            <img src={laptopImg} alt="about" className="img-fluid" />
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
```jsx
import Image from 'next/image';

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
```
```jsx
import Image from 'next/image';

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
```
```jsx
import Image from 'next/image';

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
```
```jsx
import Image from 'next/image';
// ...

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
```
<Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >Colmd={7}md{7}7style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}style{{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }justifyContent: "center"justifyContent"center"paddingTop: "30px"paddingTop"30px"paddingBottom: "50px"paddingBottom"50px"
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1><h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>h1style={{ fontSize: "2.1em", paddingBottom: "20px" }}style{{ fontSize: "2.1em", paddingBottom: "20px" }}{ fontSize: "2.1em", paddingBottom: "20px" }fontSize: "2.1em"fontSize"2.1em"paddingBottom: "20px"paddingBottom"20px"
              Know Who <strong className="purple">I'M</strong><strong className="purple">strongclassName="purple"className"purple"I'M</strong>strong
            </h1>h1
            <Aboutcard /><Aboutcard />Aboutcard
          </Col>Col
```jsx
import Image from 'next/image';

// ...

<Col
  md={5}
  style={{ paddingTop: "120px", paddingBottom: "50px" }}
  className="about-img"
>
  <Image src={laptopImg} alt="about" className="img-fluid" />
</Col>
<Col
  md={5}
  style={{ paddingTop: "120px", paddingBottom: "50px" }}
  className="about-img"
>
  <Image src={laptopImg} alt="about" className="img-fluid" />
</Col>
```
className="project-heading"className"project-heading"
          <strong className="purple">Tools</strong><strong className="purple">strongclassName="purple"className"purple"Tools</strong>strong I use
        </h1>h1
        <Toolstack /><Toolstack />Toolstack

        <Github /><Github />Github
      </Container>Container
    </Container>Containerexport default About;About