import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* Preloader component to show a loading screen */}
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {/* Navbar component */}
        <Navbar />
        {/* ScrollToTop component to scroll to top on route change */}
        <ScrollToTop />
        <Routes>
          {/* Home component */}
          <Route path="/" element={<Home />} />
          {/* Projects component */}
          <Route path="/project" element={<Projects />} />
          {/* About component */}
          <Route path="/about" element={<About />} />
          {/* Resume component */}
          <Route path="/resume" element={<Resume />} />
          {/* Redirect to home if route doesn't match */}
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;