import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
import DownloadButton from "./DownloadButton";
import PDFViewer from "./PDFViewer";
import { useRouter } from 'next/router';

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <DownloadButton pdf={pdf} />
        </Row>

        <Row className="resume">
          <PDFViewer pdf={pdf} width={width} />
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <DownloadButton pdf={pdf} />
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
