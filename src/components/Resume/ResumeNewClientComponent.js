
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "public/Assets/Soumyajit_Behera-BIT_MESRA.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
function ResumeNewClientComponent() {
  const [width, setWidth] = useState(1200);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{
        justifyContent: "center",
        position: "relative"
      }}>
          <Button variant="primary" href={pdf} target="_blank" style={{
          maxWidth: "250px"
        }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{
        justifyContent: "center",
        position: "relative"
      }}>
          <Button variant="primary" href={pdf} target="_blank" style={{
          maxWidth: "250px"
        }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>;
}
export default ResumeNewClientComponent;'use client'
import React, { useState, useEffect } from "react";ReactReactuseStateuseStateuseStateuseEffectuseEffectuseEffect"react"import { Container, Row } from "react-bootstrap";ContainerContainerContainerRowRowRow"react-bootstrap"import Button from "react-bootstrap/Button";ButtonButton"react-bootstrap/Button"import Particle from "../Particle";ParticleParticle"../Particle"import pdf from "public/Assets/Soumyajit_Behera-BIT_MESRA.pdf";pdfpdf"public/Assets/Soumyajit_Behera-BIT_MESRA.pdf"import { AiOutlineDownload } from "react-icons/ai";AiOutlineDownloadAiOutlineDownloadAiOutlineDownload"react-icons/ai"import { Document, Page, pdfjs } from "react-pdf";DocumentDocumentDocumentPagePagePagepdfjspdfjspdfjs"react-pdf"import "react-pdf/dist/esm/Page/AnnotationLayer.css";"react-pdf/dist/esm/Page/AnnotationLayer.css"pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`pdfjs.GlobalWorkerOptions.workerSrcpdfjs.GlobalWorkerOptionspdfjsGlobalWorkerOptionsworkerSrc`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`//cdnjs.cloudflare.com/ajax/libs/pdf.js//pdf.worker.min.jspdfjs.versionpdfjsversion
```javascript
function ResumeNewClientComponent() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}
```
```javascript
const [width, setWidth] = useState(1200);

useEffect(() => {
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

return (
  <div>
    <Container fluid className="resume-section">
      <Particle />
      <Row style={{
        justifyContent: "center",
        position: "relative"
      }}>
        <Button variant="primary" href={pdf} target="_blank" style={{
          maxWidth: "250px"
        }}>
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>

      <Row className="resume">
        <Document file={pdf} className="d-flex justify-content-center">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </Row>

      <Row style={{
        justifyContent: "center",
        position: "relative"
      }}>
        <Button variant="primary" href={pdf} target="_blank" style={{
          maxWidth: "250px"
        }}>
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  </div>
);
```
return <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{
        justifyContent: "center",
        position: "relative"
      }}>
          <Button variant="primary" href={pdf} target="_blank" style={{
          maxWidth: "250px"
        }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{
        justifyContent: "center",
        position: "relative"
      }}>
          <Button variant="primary" href={pdf} target="_blank" style={{
          maxWidth: "250px"
        }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>;
<div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{
        justifyContent: "center",
        position: "relative"
      }}>
          <Button variant="primary" href={pdf} target="_blank" style={{
          maxWidth: "250px"
        }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{
        justifyContent: "center",
        position: "relative"
      }}>
          <Button variant="primary" href={pdf} target="_blank" style={{
          maxWidth: "250px"
        }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div><div>div
<Container fluid className="resume-section">
        <Particle />
        <Row style={{
        justifyContent: "center",
        position: "relative"
      }}>
          <Button variant="primary" href={pdf} target="_blank" style={{
          maxWidth: "250px"
        }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{
        justifyContent: "center",
        position: "relative"
      }}>
          <Button variant="primary" href={pdf} target="_blank" style={{
          maxWidth: "250px"
        }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container><Container fluid className="resume-section">ContainerfluidfluidclassName="resume-section"className"resume-section"
        <Particle /><Particle />Particle
        <Row style={{
        justifyContent: "center",
        position: "relative"
      }}>
          <Button variant="primary" href={pdf} target="_blank" style={{
          maxWidth: "250px"
        }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row><Row style={{
        justifyContent: "center",
        position: "relative"
      }}>Row
style={{
        justifyContent: "center",
        position: "relative"
      }}style{{
        justifyContent: "center",
        position: "relative"
      }}{
        justifyContent: "center",
        position: "relative"
      }justifyContent: "center"justifyContent"center"position: "relative"position"relative"
          <Button variant="primary" href={pdf} target="_blank" style={{
          maxWidth: "250px"
        }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button><Button variant="primary" href={pdf} target="_blank" style={{
          maxWidth: "250px"
        }}>Buttonvariant="primary"variant"primary"href={pdf}href{pdf}pdftarget="_blank"target"_blank"style={{
          maxWidth: "250px"
        }}style{{
          maxWidth: "250px"
        }}{
          maxWidth: "250px"
        }maxWidth: "250px"maxWidth"250px"
            <AiOutlineDownload /><AiOutlineDownload />AiOutlineDownload
            &nbsp;Download CV
          </Button>Button
        </Row>Row

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row><Row className="resume">RowclassName="resume"className"resume"
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
<Document file={pdf} className="d-flex justify-content-center">Documentfile={pdf}file{pdf}pdfclassName="d-flex justify-content-center"className"d-flex justify-content-center"
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} /><Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />PagepageNumber={1}pageNumber{1}1scale={width > 786 ? 1.7 : 0.6}scale{width > 786 ? 1.7 : 0.6}width > 786 ? 1.7 : 0.6width > 786width7861.70.6
          </Document>Document
        </Row>Row

        <Row style={{
        justifyContent: "center",
        position: "relative"
      }}>
          <Button variant="primary" href={pdf} target="_blank" style={{
          maxWidth: "250px"
        }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row><Row style={{
        justifyContent: "center",
        position: "relative"
      }}>Rowstyle={{
        justifyContent: "center",
        position: "relative"
      }}style{{
        justifyContent: "center",
        position: "relative"
      }}{
        justifyContent: "center",
        position: "relative"
      }justifyContent: "center"justifyContent"center"position: "relative"position"relative"
          <Button variant="primary" href={pdf} target="_blank" style={{
          maxWidth: "250px"
        }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button><Button variant="primary" href={pdf} target="_blank" style={{
          maxWidth: "250px"
        }}>Button
variant="primary"variant"primary"href={pdf}href{pdf}pdftarget="_blank"target"_blank"style={{
          maxWidth: "250px"
        }}style{{
          maxWidth: "250px"
        }}{
          maxWidth: "250px"
        }maxWidth: "250px"maxWidth"250px"
            <AiOutlineDownload /><AiOutlineDownload />AiOutlineDownload
            &nbsp;Download CV
          </Button>Button
        </Row>Row
      </Container>Container
    </div>divexport default ResumeNewClientComponent;ResumeNewClientComponent'use client''use client'