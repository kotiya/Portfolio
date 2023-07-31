"use client";
import { useState, useEffect } from "react";

const AboutCardClientComponent = ({ aboutData }) => {
  const [isExtendedView, setIsExtendedView] = useState(false);

  const toggleView = () => {
    setIsExtendedView(!isExtendedView);
  };

  if (!aboutData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{aboutData.name}</h1>
      <p>{aboutData.email}</p>
      {isExtendedView && <p>{aboutData.extendedProfileInfo}</p>}
      <button onClick={toggleView}>Toggle View</button>
    </div>
  );
};

export default AboutCardClientComponent;