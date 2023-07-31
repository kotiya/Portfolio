import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function AboutClientComponent() {
  const { push } = useRouter();

  const navigateToAbout = () => {
    push("/about");
  };

  return (
    <div>
      <h1 className="project-heading">
        Professional <strong className="purple">Skillset </strong>
      </h1>

      <Techstack />

      <h1 className="project-heading">
        <strong className="purple">Tools</strong> I use
      </h1>
      <Toolstack />
    </div>
  );
}

export default AboutClientComponent;