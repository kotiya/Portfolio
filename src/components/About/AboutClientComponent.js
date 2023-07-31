"use client";
import React from "react";
import AboutSection from "./AboutSection";
import ProfessionalSkillset from "./ProfessionalSkillset";
import ToolstackSection from "./ToolstackSection";
import Github from "./Github";

function AboutClientComponent() {
  return (
    <>
      <AboutSection />
      <ProfessionalSkillset />
      <ToolstackSection />
      <Github />
    </>
  );
}

export default AboutClientComponent;
