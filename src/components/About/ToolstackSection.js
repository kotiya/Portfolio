import React from "react";
import { Container } from "react-bootstrap";
import Toolstack from "./Toolstack";

function ToolstackSection() {
  return (
    <Container>
      <h1 className="project-heading">
        <strong className="purple">Tools</strong> I use
      </h1>
      <Toolstack />
    </Container>
  );
}

export default ToolstackSection;
