import React from "react";
import Card from "react-bootstrap/Card";
import AboutCardInfoClientComponent from "./AboutCardInfoClientComponent";
import AboutCardActivitiesClientComponent from "./AboutCardActivitiesClientComponent";
import AboutCardQuoteClientComponent from "./AboutCardQuoteClientComponent";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <AboutCardInfoClientComponent />
          <AboutCardActivitiesClientComponent />
          <AboutCardQuoteClientComponent />
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;