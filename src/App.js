import React from 'react';
import "./styles/App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Particles from "react-tsparticles";
import { loadFireflyPreset } from "tsparticles-preset-firefly";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";


// function particlesInit(tsParticles) {

//   loadFireflyPreset(tsParticles);
// }

function App() {

  return (
    <Router>
      <Navbar />
      <Home />
      <About />
      {/* <Particles id="tsparticles"
        init={particlesInit}
        options={{
          preset: "firefly",
          background: {
            color: {
              value: "#021027"
            }
          }
        }}
      /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes> */}
    </Router>
  );
}

export default App;
