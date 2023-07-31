import React, { useEffect } from "react";
import { useRouter } from "next/router";

function AboutClientComponent() {
  const { push } = useRouter();

  useEffect(() => {
    setTimestamp();
  }, []);

  const setTimestamp = () => {
    // Add your code here
  };

  const navigateToAbout = () => {
    push("/about");
  };

  return null;
}

export default AboutClientComponent;
