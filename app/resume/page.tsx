import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
import ResumeButton from "./ResumeButton";
import ResumeDocument from "./ResumeDocument";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <ResumeButton pdf={pdf} />
        </Row>

        <Row className="resume">
          <ResumeDocument pdf={pdf} />
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <ResumeButton pdf={pdf} />
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
