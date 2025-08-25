import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="footer">
        <div className="container">
          <p>© 2025 Hoang Vu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
