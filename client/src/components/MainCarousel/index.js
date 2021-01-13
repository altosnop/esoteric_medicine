import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/images/1.jpg"
import img2 from "../../assets/images/2.jpg"
import img3 from "../../assets/images/3.jpg"

function MainCarousel() {
  return (
    <Carousel autoPlay showStatus={false} infiniteLoop showThumbs={false} swipeable={true} dynamicHeight transitionTime={600} interval={3500}>
      <div>
        <img src={img1} alt="nature" height="800px"/>
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={img2} alt="nature" height="800px"/>
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={img3} alt="nature" height="800px"/>
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}

export default MainCarousel;
