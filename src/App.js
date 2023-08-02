import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import BackgroundImg from "../src/assests/pngtree-futuristic-shape-abstract-background-chemistry-technology-concept-for-website-image_438818.jpg"
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const backgroundStyles = {
    backgroundImage: `url(${BackgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    minHeight: "100vh", // Set minimum height to fill the entire viewport
  };
  return (
    <Router>
      <div className="App" style={backgroundStyles}>
        <header className="App-header">
          <nav>
            <ul className="menu">
              <li>
                <Link to="/" className="menu-item">About</Link>
              </li>
              <li>
                <Link to="/portfolio" className="menu-item">Experience</Link>
              </li>
              <li>
                <Link to="/contact" className="menu-item">Contact</Link>
              </li>
              <li>
                <Link to="/resume" className="menu-item">Resume</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
