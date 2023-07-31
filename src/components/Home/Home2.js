// use client

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Home = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  const changeStatus = () => {
    setStatus(status === 'active' ? 'inactive' : 'active');
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
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
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Image
                alt="home pic"
                src={homeLogo}
                className="img-fluid"
                style={{ maxHeight: "450px" }}
                width={500}
                height={450}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 user={user} changeStatus={changeStatus} />
    </section>
  );
};

export default Home;

function Home2({ user, changeStatus }) {
  const [status, setStatus] = useState('active');

  useEffect(() => {
    window.addEventListener('click', setTimestamp);
    return () => {
      window.removeEventListener('click', setTimestamp);
    };
  }, []);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      {status === 'active' && <p>{user.extendedProfileInfo}</p>}
      <button onClick={changeStatus}>Toggle Status</button>
    </div>
  );
}
