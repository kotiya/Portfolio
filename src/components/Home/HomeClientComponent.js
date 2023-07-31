import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import HomeHeaderClientComponent from "./HomeHeaderClientComponent";
import HomeImageClientComponent from "./HomeImageClientComponent";

const HomeClientComponent = () => {
  const [mounted, setMounted] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <HomeHeaderClientComponent />
            <HomeImageClientComponent data={items} />
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
};

export default HomeClientComponent;
