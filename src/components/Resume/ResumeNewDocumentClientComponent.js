import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumeNewDocumentClientComponent = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Document file={pdf} className="d-flex justify-content-center">
      <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
    </Document>
  );
};

export default ResumeNewDocumentClientComponent;
