// Greeting component
import React from "react";
import Type from "./Type";

function Greeting() {
  return (
    <>
      <h1 style={{ paddingBottom: 15 }} className="heading">
        Hi There!{" "}
        <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span>
      </h1>

      <h1 className="heading-name">
        I'M
        <strong className="main-name"> SOUMYAJIT BEHERA</strong>
      </h1>

      <div style={{ padding: 50, textAlign: "left" }}>
        <Type />
      </div>
    </>
  );
}

export default Greeting;
