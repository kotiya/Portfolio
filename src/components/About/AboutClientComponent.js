import React from "react";
import { useRouter } from "next/router";
import AboutCard from "./AboutCard";

function AboutClientComponent() {
  const { push } = useRouter();

  const navigateToAbout = () => {
    push("/about");
  };

  return (
    <div>
      <h1>{/* Add your code here */}</h1>
      <p>{/* Add your code here */}</p>
      <AboutCard />
    </div>
  );
}

export default AboutClientComponent;