import React from "react";
import { Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";

function HomeImage() {
  return (
    <img
      src={homeLogo}
      alt="home pic"
      className="img-fluid"
      style={{ maxHeight: "450px" }}
    />
  );
}

export default HomeImage;
