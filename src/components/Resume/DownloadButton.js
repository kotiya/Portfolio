import React from "react";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

const DownloadButton = ({ pdf }) => {
  return (
    <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
      <AiOutlineDownload />
      &nbsp;Download CV
    </Button>
  );
};

export default DownloadButton;
