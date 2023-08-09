import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* C++ icon */}
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      {/* JavaScript icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      {/* Golang icon */}
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col>
      {/* Node.js icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      {/* React icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      {/* Solidity icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col>
      {/* MongoDB icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      {/* Next.js icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      {/* Git icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      {/* Firebase icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      {/* Redis icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      {/* PostgreSQL icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      {/* Python icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      {/* Java icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;