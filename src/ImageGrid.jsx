import React from "react";
import "./ImageGrid.css";

const ImageGrid = () => {
  return (
    <div className="carousel">
      <img src="./assets/certL1.png" alt="Image 1" className="carousel-image position1" />
      <img src="./assets/certL2.png" alt="Image 2" className="carousel-image position2" />
      <img src="./assets/certR1.png" alt="Image 3" className="carousel-image position3" />
      <img src="./assets/certR2.png" alt="Image 4" className="carousel-image position4" />
    </div>
  );
};

export default ImageGrid;
