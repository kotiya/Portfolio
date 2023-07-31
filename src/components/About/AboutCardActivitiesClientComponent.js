import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCardActivitiesClientComponent() {
  return (
    <ul>
      <li className="about-activity">
        <ImPointRight /> Playing Games
      </li>
      <li className="about-activity">
        <ImPointRight /> Writing Tech Blogs
      </li>
      <li className="about-activity">
        <ImPointRight /> Travelling
      </li>
    </ul>
  );
}

export default AboutCardActivitiesClientComponent;