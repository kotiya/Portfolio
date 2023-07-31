import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import { useRouter } from "next/router";
import ScrollToTop from "./components/ScrollToTop";
import Image from "next/image";
import privateWorkspace from "../public/privateWorkspace.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

// use client
// use client

function App() {
  const [load, upadateLoad] = useState(true);
  const { push: navigate } = useRouter();

  useEffect(() => {
    const setTimestamp = () => {
      // your setTimestamp logic here
    };

    const handleLoad = () => {
      upadateLoad(false);
    };

    window.addEventListener("load", handleLoad);
    window.addEventListener("click", setTimestamp);

    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("click", setTimestamp);
    };
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
