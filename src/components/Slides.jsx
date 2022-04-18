import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import About from "./About";
import Projects from "./Projects";

const Slides = () => {
  return (
    <Carousel>


      <About />


      <Projects />

    </Carousel>
  )
}

export default Slides;