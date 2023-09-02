import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import { useRouter } from "next/router";
import Link from "next/link";
import { useNavigation } from "next/navigation";
import ScrollToTop from "./components/ScrollToTop";
import "../style.css";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);
  const router = useRouter();
  const navigation = useNavigation();

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
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/project">
          <a>Projects</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/resume">
          <a>Resume</a>
        </Link>
        <button onClick={() => navigation.navigate("/")}>Navigate</button>
        <Footer />
      </div>
    </div>
  );
}

export default App;