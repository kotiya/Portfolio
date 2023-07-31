"use client";
import React from "react";
import ResumeSection from "./ResumeSection";
import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";

function ResumeNewClientComponent() {
  return (
    <div>
      <ResumeSection pdf={pdf} />
    </div>
  );
}

export default ResumeNewClientComponent;
