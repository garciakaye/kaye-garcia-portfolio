import React from 'react'
import "../styles/Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id="navbar">
      <>
        <nav>
          <Link className="my-name" to="/">kayegarcia</Link>
        </nav>
        <nav>
          <a href="/about" onClick={() => window.location.replace("/#about")}>About </a>
          <a href="/projects" onClick={() => window.location.replace("/#projects")}>Projects </a>

          {/* <div onClick={() => window.location.replace("/#about")}> */}
          {/* <span>go to about</span>
          </div> */}
          {/* <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link> */}
        </nav>
      </>
    </nav>

  )
}

export default Navbar;