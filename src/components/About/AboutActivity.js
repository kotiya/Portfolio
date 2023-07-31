import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutActivity({ text }) {
  return (
    <li className="about-activity">
      <ImPointRight /> {text}
    </li>
  );
}

export default AboutActivity;
