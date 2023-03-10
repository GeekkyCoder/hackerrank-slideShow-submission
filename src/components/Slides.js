import React from "react";

function Slides({
  slides,
  index,
  handleRestart,
  handleNextSlide,
  handlePrevSlide,
}) {
  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          onClick={handleRestart}
          data-testid="button-restart"
          className="small outlined"
        >
          Restart
        </button>
        <button
          disabled={index === 0}
          onClick={handlePrevSlide}
          data-testid="button-prev"
          className="small"
        >
          Prev
        </button>
        <button
          disabled={index === slides.length - 1}
          onClick={handleNextSlide}
          data-testid="button-next"
          className="small"
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[index].title}</h1>
        <p data-testid="text">{slides[index].text}</p>
      </div>
    </div>
  );
}

export default Slides;
