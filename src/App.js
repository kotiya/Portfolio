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
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <div>
          {router.pathname === "/" && <Home />}
          {router.pathname === "/project" && <Projects />}
          {router.pathname === "/about" && <About />}
          {router.pathname === "/resume" && <Resume />}
          {router.pathname !== "/" && router.pathname !== "/project" && router.pathname !== "/about" && router.pathname !== "/resume" && <Navigate to="/" />}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;