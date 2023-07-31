import React, { useEffect } from "react";
import Type from "./Type";

function HomeClientComponent() {
  useEffect(() => {
    // Add any necessary event listeners here
    // Example: window.addEventListener('load', setTimestamp);
  }, []);

  return (
    <div style={{ padding: 50, textAlign: "left" }}>
      <Type />
    </div>
  );
}

export default HomeClientComponent;
