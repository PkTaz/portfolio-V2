import React from "react";
import "./ImageGrid.css";

const ImageGrid = () => {
  return (
<div className="carousel">
  <img
    src={`${process.env.PUBLIC_URL}/assets/certL1.png`}
    alt="Cert 1"
    className="carousel-image position1"
  />
  <img
    src={`${process.env.PUBLIC_URL}/assets/certL2.png`}
    alt="Cert 2"
    className="carousel-image position2"
  />
  <img
    src={`${process.env.PUBLIC_URL}/assets/certR1.png`}
    alt="Cert 3"
    className="carousel-image position3"
  />
  <img
    src={`${process.env.PUBLIC_URL}/assets/certR2.png`}
    alt="Cert 4"
    className="carousel-image position4"
  />
</div>
  );
};

export default ImageGrid;
