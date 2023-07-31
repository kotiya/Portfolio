import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);
  const { push: navigate } = useRouter();

  useEffect(() => {
    const setTimestamp = () => {
      // Your load logic here
      upadateLoad(false);
    };

    window.addEventListener("load", setTimestamp);

    return () => {
      window.removeEventListener("load", setTimestamp);
    };
  }, []);

  return (
    <>
      {/* @use-client */}
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <div>
          <Home />
          <Projects />
          <About />
          <Resume />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
