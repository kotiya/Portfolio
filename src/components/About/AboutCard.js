import React from "react";
import Card from "react-bootstrap/Card";
import AboutCardQuoteClientComponent from './AboutCardQuoteClientComponent';
import AboutCardActivitiesClientComponent from './AboutCardActivitiesClientComponent';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <AboutCardQuoteClientComponent />
        <AboutCardActivitiesClientComponent />
        <p style={{ color: "rgb(155 126 172)" }}>
          "Strive to build things that make a difference!"{" "}
        </p>
        <footer className="blockquote-footer">Soumyajit</footer>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

// Server Component
import AboutCardQuoteClientComponent from './AboutCardQuoteClientComponent';
import AboutCardActivitiesClientComponent from './AboutCardActivitiesClientComponent';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <AboutCardQuoteClientComponent />
        <AboutCardActivitiesClientComponent />
        <p style={{ color: "rgb(155 126 172)" }}>
          "Strive to build things that make a difference!"{" "}
        </p>
        <footer className="blockquote-footer">Soumyajit</footer>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

// Client Component
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import AboutCardQuoteClientComponent from './AboutCardQuoteClientComponent';
import AboutCardActivitiesClientComponent from './AboutCardActivitiesClientComponent';

function AboutCardClientComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <AboutCardQuoteClientComponent />
        <AboutCardActivitiesClientComponent />
        <p style={{ color: "rgb(155 126 172)" }}>
          "Strive to build things that make a difference!"{" "}
        </p>
        <footer className="blockquote-footer">Soumyajit</footer>
      </Card.Body>
    </Card>
  );
}

export default AboutCardClientComponent;