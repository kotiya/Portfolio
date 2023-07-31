import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const { push } = useRouter();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <DownloadButton />
        </Row>

        <Row className="resume">
          <ResumeDocument width={width} />
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <DownloadButton />
        </Row>
      </Container>
    </div>
  );
}

function DownloadButton() {
  const { push } = useRouter();

  return (
    <Button
      variant="primary"
      href={pdf}
      target="_blank"
      style={{ maxWidth: "250px" }}
    >
      <AiOutlineDownload />
      &nbsp;Download CV
    </Button>
  );
}

function ResumeDocument({ width }) {
  return (
    <Document file={pdf} className="d-flex justify-content-center">
      <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
    </Document>
  );
}

export default ResumeNew;