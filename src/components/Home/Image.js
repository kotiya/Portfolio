// Image component
import React from "react";
import homeLogo from "../../Assets/home-main.svg";

function Image() {
  return (
    <img
      src={homeLogo}
      alt="home pic"
      className="img-fluid"
      style={{ maxHeight: "450px" }}
    />
  );
}

export default Image;
