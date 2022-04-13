import React from 'react';
import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFireflyPreset } from "tsparticles-preset-firefly";
import Navbar from "./components/Navbar";


function particlesInit(tsParticles) {

  loadFireflyPreset(tsParticles);
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Particles id="tsparticles"
        init={particlesInit}
        options={{
          preset: "firefly",
          background: {
            color: {
              value: "#021027"
            }
          }
        }}
      />
    </div>
  );
}

export default App;
