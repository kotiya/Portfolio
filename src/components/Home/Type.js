import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer", // Displayed text for the first animation
          "Freelancer", // Displayed text for the second animation
          "MERN Stack Developer", // Displayed text for the third animation
          "Open Source Contributor", // Displayed text for the fourth animation
        ],
        autoStart: true, // Automatically starts the typewriter animation
        loop: true, // Loops the animation indefinitely
        deleteSpeed: 50, // Speed at which characters are deleted (in milliseconds)
      }}
    />
  );
}

export default Type;