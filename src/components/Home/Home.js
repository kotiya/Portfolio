import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import Image from "next/image";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Link from "next/link";

function Home() {
  const [mounted, setMounted] = useState(false);
  const [items, setItems] = useState([]);
  const theme = localStorage.getItem("theme");
  const { push: fn_name } = useRouter();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(rootPath + "/getItems");
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        const data = await response.json();
        setItems(data);
        setMounted(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItems();
  }, []);

  useEffect(() => {
    window.addEventListener("load", setTimestamp);

    return () => {
      window.removeEventListener("load", setTimestamp);
    };
  }, []);

  if (!mounted) return null;

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
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Link href="/dashboard">Dashboard</Link>
    </section>
  );
}

export default Home;