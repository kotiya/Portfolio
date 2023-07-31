import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
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
            <img src={laptopImg} alt="about" className="img-fluid" />
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

// UserProfileProviderClientComponent.js
import React, { useState, useEffect } from 'react';

const UserProfileProviderClientComponent = ({ userId, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [userId]);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProfileProviderClientComponent;

// UserProfileStatusClientComponent.js
import React, { useState } from 'react';

const UserProfileStatusClientComponent = () => {
  const [status, setStatus] = useState('active');

  const changeStatus = () => {
    setStatus(status === 'active' ? 'inactive' : 'active');
  };

  return (
    <button onClick={changeStatus}>
      Set status to {status === 'active' ? 'inactive' : 'active'}
    </button>
  );
};

export default UserProfileStatusClientComponent;

// UserProfile.js
import React from 'react';
import UserProfileProviderClientComponent from './UserProfileProviderClientComponent';
import UserProfileStatusClientComponent from './UserProfileStatusClientComponent';

const UserProfile = ({ userId }) => {
  return (
    <UserProfileProviderClientComponent userId={userId}>
      <UserContext.Consumer>
        {user => (
          <div>
            <h1>{user ? user.name : 'Loading...'}</h1>
            <UserProfileStatusClientComponent />
          </div>
        )}
      </UserContext.Consumer>
    </UserProfileProviderClientComponent>
  );
};

export default UserProfile;
