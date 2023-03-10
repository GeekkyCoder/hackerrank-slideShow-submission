import React, { useState } from "react";
import "./App.css";
import "h8k-components";

import Slides from "./components/Slides";
const title = "Slideshow App";

function App({ slides }) {
  const [allSlides, setAllSlides] = useState(slides);
  const [index, setIndex] = useState(0);

  const handleNextSlide = () => {
    setIndex(index + 1)
  };

  const handlePrevSlide = () => {
    setIndex(index - 1)
  };

  const handleRestart = () => {
    setIndex(0)
  };

  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="App">
        <Slides
          slides={allSlides}
          index={index}
          handleNextSlide={handleNextSlide}
          handlePrevSlide={handlePrevSlide}
          handleRestart={handleRestart}
        />
      </div>
    </div>
  );
}

export default App;
