import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import ResumeNewDownloadButtonClientComponent from "./ResumeNewDownloadButtonClientComponent";
import ResumeNewDocumentClientComponent from "./ResumeNewDocumentClientComponent";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <ResumeNewDownloadButtonClientComponent />
        </Row>

        <Row className="resume">
          <ResumeNewDocumentClientComponent />
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <ResumeNewDownloadButtonClientComponent />
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;

// Server Component
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import ResumeNewDownloadButtonClientComponent from "./ResumeNewDownloadButtonClientComponent";
import ResumeNewDocumentClientComponent from "./ResumeNewDocumentClientComponent";

export default async function ResumeNew() {
  const supabase = createServerComponentClient<Database>({ cookies });

  // Fetch data from the server
  const { data: resumeData } = await supabase
    .from("resumeData")
    .select()
    .match({ is_complete: false });

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <ResumeNewDownloadButtonClientComponent />
        </Row>

        <Row className="resume">
          <ResumeNewDocumentClientComponent data={resumeData} />
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <ResumeNewDownloadButtonClientComponent />
        </Row>
      </Container>
    </div>
  );
}

// Client Component
import React, { useState, useEffect } from "react";
import ResumeNewDownloadButtonClientComponent from "./ResumeNewDownloadButtonClientComponent";
import ResumeNewDocumentClientComponent from "./ResumeNewDocumentClientComponent";

function ResumeNew() {
  const [resumeData, setResumeData] = useState([]);

  useEffect(() => {
    // Fetch data from the client
    const fetchData = async () => {
      try {
        const response = await fetch("/api/resumeData");
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        const data = await response.json();
        setResumeData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <ResumeNewDownloadButtonClientComponent />
        </Row>

        <Row className="resume">
          <ResumeNewDocumentClientComponent data={resumeData} />
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <ResumeNewDownloadButtonClientComponent />
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;