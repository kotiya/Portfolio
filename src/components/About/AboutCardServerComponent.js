import React, { useState, useEffect } from 'react';

const AboutCardServerComponent = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    setActivities([
      { id: 1, name: 'Playing Games' },
      { id: 2, name: 'Writing Tech Blogs' },
      { id: 3, name: 'Travelling' },
    ]);
  }, []);

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Soumyajit Behera </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br /> I am a final year student pursuing an Integrated MSc (IMSc)
            in Maths and Computing at BIT Mesra.
            <br />
            Additionally, I am currently employed as a software developer at
            Juspay.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <AboutCardClientComponent activities={activities} />

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

const AboutCardClientComponent = ({ activities }) => {
  const [isExtendedView, setIsExtendedView] = useState(false);

  const toggleView = () => {
    setIsExtendedView(!isExtendedView);
  };

  return (
    <div>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id} className="about-activity">
            <ImPointRight /> {activity.name}
          </li>
        ))}
      </ul>

      <button onClick={toggleView}>Toggle View</button>
    </div>
  );
};

export default AboutCardServerComponent;