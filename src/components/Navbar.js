
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "public/Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://soumyajitblogs.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
import React, { useState } from "react";ReactReactuseStateuseStateuseState"react"import Navbar from "react-bootstrap/Navbar";NavbarNavbar"react-bootstrap/Navbar"import Nav from "react-bootstrap/Nav";NavNav"react-bootstrap/Nav"import Container from "react-bootstrap/Container";ContainerContainer"react-bootstrap/Container"import logo from "public/Assets/logo.png";logologo"public/Assets/logo.png"import Button from "react-bootstrap/Button";ButtonButton"react-bootstrap/Button"import { Link } from "react-router-dom";LinkLinkLink"react-router-dom"import { CgGitFork } from "react-icons/cg";CgGitForkCgGitForkCgGitFork"react-icons/cg"import { ImBlog } from "react-icons/im";ImBlogImBlogImBlog"react-icons/im"import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";AiFillStarAiFillStarAiFillStarAiOutlineHomeAiOutlineHomeAiOutlineHomeAiOutlineFundProjectionScreenAiOutlineFundProjectionScreenAiOutlineFundProjectionScreenAiOutlineUserAiOutlineUserAiOutlineUser"react-icons/ai"import { CgFileDocument } from "react-icons/cg";CgFileDocumentCgFileDocumentCgFileDocument"react-icons/cg"
```javascript
function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      {/* Rest of the code */}
    </Navbar>
  );
}
```
NavBar
```javascript
const [expand, updateExpanded] = useState(false);
const [navColour, updateNavbar] = useState(false);

useEffect(() => {
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return () => {
    window.removeEventListener("scroll", scrollHandler);
  };
}, []);

return (
  <Navbar
    expanded={expand}
    fixed="top"
    expand="md"
    className={navColour ? "sticky" : "navbar"}
  >
    {/* Rest of the code */}
  </Navbar>
);
```
```javascript
const [expand, updateExpanded] = useState(false);
const [navColour, updateNavbar] = useState(false);

function scrollHandler() {
  if (window.scrollY >= 20) {
    updateNavbar(true);
  } else {
    updateNavbar(false);
  }
}

useEffect(() => {
  window.addEventListener("scroll", scrollHandler);

  return () => {
    window.removeEventListener("scroll", scrollHandler);
  };
}, []);

```
return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://soumyajitblogs.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
<Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://soumyajitblogs.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
<Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >Navbarexpanded={expand}expanded{expand}expandfixed="top"fixed"top"expand="md"expand"md"className={navColour ? "sticky" : "navbar"}className{navColour ? "sticky" : "navbar"}navColour ? "sticky" : "navbar"navColour"sticky""navbar"
<Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://soumyajitblogs.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
<Container>Container
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand><Navbar.Brand href="/" className="d-flex">Navbar.BrandNavbarBrandhref="/"href"/"className="d-flex"className"d-flex"
          <img src={logo} className="img-fluid logo" alt="brand" /><img src={logo} className="img-fluid logo" alt="brand" />imgsrc={logo}src{logo}logoclassName="img-fluid logo"className"img-fluid logo"alt="brand"alt"brand"
        </Navbar.Brand>Navbar.BrandNavbarBrand
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle><Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >Navbar.ToggleNavbarTogglearia-controls="responsive-navbar-nav"aria-controls"responsive-navbar-nav"onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}onClick{() => {
            updateExpanded(expand ? false : "expanded");
          }}() => {
            updateExpanded(expand ? false : "expanded");
          }{
            updateExpanded(expand ? false : "expanded");
          }updateExpanded(expand ? false : "expanded");updateExpanded(expand ? false : "expanded")
updateExpandedexpand ? false : "expanded"expandfalse"expanded"
          <span></span><span>span</span>span
          <span></span><span>span</span>span
          <span></span><span>span</span>span
        </Navbar.Toggle>Navbar.ToggleNavbarToggle
<Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://soumyajitblogs.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
<Navbar.Collapse id="responsive-navbar-nav">Navbar.CollapseNavbarCollapseid="responsive-navbar-nav"id"responsive-navbar-nav"
<Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://soumyajitblogs.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
<Nav className="ms-auto" defaultActiveKey="#home">NavclassName="ms-auto"className"ms-auto"defaultActiveKey="#home"defaultActiveKey"#home"
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item><Nav.Item>Nav.ItemNavItem
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link><Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>Nav.LinkNavLinkas={Link}as{Link}Linkto="/"to"/"onClick={() => updateExpanded(false)}onClick{() => updateExpanded(false)}() => updateExpanded(false)updateExpanded(false)updateExpandedfalse
                <AiOutlineHome style={{ marginBottom: "2px" }} /><AiOutlineHome style={{ marginBottom: "2px" }} />AiOutlineHomestyle={{ marginBottom: "2px" }}style{{ marginBottom: "2px" }}{ marginBottom: "2px" }marginBottom: "2px"marginBottom"2px" Home
              </Nav.Link>Nav.LinkNavLink
            </Nav.Item>Nav.ItemNavItem

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item><Nav.Item>Nav.ItemNavItem
<Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link><Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >Nav.LinkNavLinkas={Link}as{Link}Linkto="/about"to"/about"onClick={() => updateExpanded(false)}onClick{() => updateExpanded(false)}() => updateExpanded(false)updateExpanded(false)updateExpandedfalse
                <AiOutlineUser style={{ marginBottom: "2px" }} /><AiOutlineUser style={{ marginBottom: "2px" }} />AiOutlineUserstyle={{ marginBottom: "2px" }}style{{ marginBottom: "2px" }}{ marginBottom: "2px" }marginBottom: "2px"marginBottom"2px" About
              </Nav.Link>Nav.LinkNavLink
            </Nav.Item>Nav.ItemNavItem

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item><Nav.Item>Nav.ItemNavItem
<Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link><Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >Nav.LinkNavLinkas={Link}as{Link}Linkto="/project"to"/project"onClick={() => updateExpanded(false)}onClick{() => updateExpanded(false)}() => updateExpanded(false)updateExpanded(false)updateExpandedfalse
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                /><AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />AiOutlineFundProjectionScreenstyle={{ marginBottom: "2px" }}style{{ marginBottom: "2px" }}{ marginBottom: "2px" }marginBottom: "2px"marginBottom"2px"{" "}" "
                Projects
              </Nav.Link>Nav.LinkNavLink
            </Nav.Item>Nav.ItemNavItem

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item><Nav.Item>Nav.ItemNavItem
<Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link><Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >Nav.LinkNavLinkas={Link}as{Link}Linkto="/resume"to"/resume"onClick={() => updateExpanded(false)}onClick{() => updateExpanded(false)}() => updateExpanded(false)updateExpanded(false)updateExpandedfalse
                <CgFileDocument style={{ marginBottom: "2px" }} /><CgFileDocument style={{ marginBottom: "2px" }} />CgFileDocumentstyle={{ marginBottom: "2px" }}style{{ marginBottom: "2px" }}{ marginBottom: "2px" }marginBottom: "2px"marginBottom"2px" Resume
              </Nav.Link>Nav.LinkNavLink
            </Nav.Item>Nav.ItemNavItem

            <Nav.Item>
              <Nav.Link
                href="https://soumyajitblogs.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item><Nav.Item>Nav.ItemNavItem
              <Nav.Link
                href="https://soumyajitblogs.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
<Nav.Link
                href="https://soumyajitblogs.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >Nav.LinkNavLinkhref="https://soumyajitblogs.vercel.app/"href"https://soumyajitblogs.vercel.app/"target="_blank"target"_blank"rel="noreferrer"rel"noreferrer"
                <ImBlog style={{ marginBottom: "2px" }} /><ImBlog style={{ marginBottom: "2px" }} />ImBlogstyle={{ marginBottom: "2px" }}style{{ marginBottom: "2px" }}{ marginBottom: "2px" }marginBottom: "2px"marginBottom"2px" Blogs
              </Nav.Link>Nav.LinkNavLink
            </Nav.Item>Nav.ItemNavItem

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item><Nav.Item className="fork-btn">Nav.ItemNavItemclassName="fork-btn"className"fork-btn"
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
<Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >Buttonhref="https://github.com/soumyajit4419/Portfolio"href"https://github.com/soumyajit4419/Portfolio"target="_blank"target"_blank"className="fork-btn-inner"className"fork-btn-inner"
                <CgGitFork style={{ fontSize: "1.2em" }} /><CgGitFork style={{ fontSize: "1.2em" }} />CgGitForkstyle={{ fontSize: "1.2em" }}style{{ fontSize: "1.2em" }}{ fontSize: "1.2em" }fontSize: "1.2em"fontSize"1.2em"{" "}" "
                <AiFillStar style={{ fontSize: "1.1em" }} /><AiFillStar style={{ fontSize: "1.1em" }} />AiFillStarstyle={{ fontSize: "1.1em" }}style{{ fontSize: "1.1em" }}{ fontSize: "1.1em" }fontSize: "1.1em"fontSize"1.1em"
              </Button>Button
            </Nav.Item>Nav.ItemNavItem
          </Nav>Nav
        </Navbar.Collapse>Navbar.CollapseNavbarCollapse
      </Container>Container
    </Navbar>Navbarexport default NavBar;NavBar