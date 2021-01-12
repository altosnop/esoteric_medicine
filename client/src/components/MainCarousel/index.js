import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/images/1.jpg"
import img2 from "../../assets/images/2.jpg"
import img3 from "../../assets/images/3.jpg"

function MainCarousel() {
  return (
    <Carousel>
      <div>
        <img src={img1} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={img2} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={img3} />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}

export default MainCarousel;
