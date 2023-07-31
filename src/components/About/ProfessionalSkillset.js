import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "./Techstack";

const ProfessionalSkillset = () => {
  return (
    <Container>
      <h1 className="project-heading">
        Professional <strong className="purple">Skillset </strong>
      </h1>
      <Techstack />
    </Container>
  );
};

export default ProfessionalSkillset;
