import React from "react";

function ResumeChild({ width, pdf }) {
  return (
    <Row className="resume">
      <Document file={pdf} className="d-flex justify-content-center">
        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
      </Document>
    </Row>
  );
}

export default ResumeChild;
