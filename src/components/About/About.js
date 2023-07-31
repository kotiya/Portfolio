import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Image from "next/image";
import Link from "next/link";

function About() {
  useEffect(() => {
    const setTimestamp = () => {
      // Your setTimestamp logic here
    };

    window.addEventListener("load", setTimestamp);

    return () => {
      window.removeEventListener("load", setTimestamp);
    };
  }, []);

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <Image
              alt="about"
              src={laptopImg}
              className="img-fluid"
              width={500}
              height={500}
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;

// New Components

// use client
const UserProfileProviderClientComponent = ({ userId, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [userId]);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProfileProviderClientComponent;

// use client
const UserProfileStatusClientComponent = () => {
  const [status, setStatus] = useState("active");

  const changeStatus = () => {
    setStatus(status === "active" ? "inactive" : "active");
  };

  return (
    <button onClick={changeStatus}>
      Set status to {status === "active" ? "inactive" : "active"}
    </button>
  );
};

export default UserProfileStatusClientComponent;

// use client
const UserProfile = ({ userId }) => {
  return (
    <UserProfileProviderClientComponent userId={userId}>
      <UserContext.Consumer>
        {(user) => (
          <div>
            <h1>{user ? user.name : "Loading..."}</h1>
            <UserProfileStatusClientComponent />
          </div>
        )}
      </UserContext.Consumer>
    </UserProfileProviderClientComponent>
  );
};

export default UserProfile;
