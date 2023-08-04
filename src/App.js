```javascript
import { useRouter } from 'next/router';
```
```javascript
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

const App = () => {
  const router = useRouter();

  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
```
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
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}App
{
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}const [load, upadateLoad] = useState(true);[load, upadateLoad] = useState(true)[load, upadateLoad]loadupadateLoaduseState(true)useStatetrueuseEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [])useEffect() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }
{
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200)timersetTimeout(() => {
      upadateLoad(false);
    }, 1200)setTimeout() => {
      upadateLoad(false);
    }{
      upadateLoad(false);
    }upadateLoad(false);upadateLoad(false)upadateLoadfalse1200return () => clearTimeout(timer);() => clearTimeout(timer)clearTimeout(timer)clearTimeouttimer[]return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
<Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router><Router>Router
      <Preloader load={load} /><Preloader load={load} />Preloaderload={load}load{load}load
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div><div className="App" id={load ? "no-scroll" : "scroll"}>divclassName="App"className"App"id={load ? "no-scroll" : "scroll"}id{load ? "no-scroll" : "scroll"}load ? "no-scroll" : "scroll"load"no-scroll""scroll"
        <Navbar /><Navbar />Navbar
        <ScrollToTop /><ScrollToTop />ScrollToTop
<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes><Routes>Routes
          <Route path="/" element={<Home />} /><Route path="/" element={<Home />} />Routepath="/"path"/"element={<Home />}element{<Home />}<Home /><Home />Home
          <Route path="/project" element={<Projects />} /><Route path="/project" element={<Projects />} />Routepath="/project"path"/project"element={<Projects />}element{<Projects />}<Projects /><Projects />Projects
          <Route path="/about" element={<About />} /><Route path="/about" element={<About />} />Routepath="/about"path"/about"element={<About />}element{<About />}<About /><About />About
          <Route path="/resume" element={<Resume />} /><Route path="/resume" element={<Resume />} />Routepath="/resume"path"/resume"element={<Resume />}element{<Resume />}<Resume /><Resume />Resume
          <Route path="*" element={<Navigate to="/"/>} /><Route path="*" element={<Navigate to="/"/>} />Routepath="*"path"*"element={<Navigate to="/"/>}element{<Navigate to="/"/>}<Navigate to="/"/><Navigate to="/"/>Navigateto="/"to"/"
        </Routes>Routes
        <Footer /><Footer />Footer
      </div>div
    </Router>Routerexport default App;App