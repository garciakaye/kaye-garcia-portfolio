import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div class="page-bg"></div>

      <div class="animation-wrapper">
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
        <div class="particle particle-4"></div>
      </div>

      <div class="page-wrapper">
        <h4>CSS Particles</h4>
      </div>
    </div>
  );
}

export default App;
