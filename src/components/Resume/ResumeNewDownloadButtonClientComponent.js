import React from "react";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";

const ResumeNewDownloadButtonClientComponent = () => {
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
};

export default ResumeNewDownloadButtonClientComponent;
