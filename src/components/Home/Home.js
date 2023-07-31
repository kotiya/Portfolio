import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// use client

const Home = () => {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState('active');
  const { push: navigate } = useRouter();

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data));

    // useEffect for window event listener
    const setTimestamp = () => {
      // your code here
    };

    window.addEventListener('load', setTimestamp);

    return () => {
      window.removeEventListener('load', setTimestamp);
    };
  }, []);

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
                Hi There!{' '}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SOUMYAJIT BEHERA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: 'left' }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Image
                alt="home pic"
                src={homeLogo}
                className="img-fluid"
                style={{ maxHeight: '450px' }}
                width={500}
                height={500}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
};

export default Home;
