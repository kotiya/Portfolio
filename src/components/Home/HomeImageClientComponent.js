import React from "react";
import homeLogo from "../../Assets/home-main.svg";

function HomeImageClientComponent() {
  return (
    <Col md={5} style={{ paddingBottom: 20 }}>
      <img
        src={homeLogo}
        alt="home pic"
        className="img-fluid"
        style={{ maxHeight: "450px" }}
      />
    </Col>
  );
}

export default HomeImageClientComponent;