import React from "react";
import { Carousel } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Carousel interval={3000} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src={require("../../../../images/gambar1.jpg")} alt="gambar 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src={require("../../../../images/gambar2.jpg")} alt="gambar 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src={require("../../../../images/gambar4.jpeg")} alt="gambar 3" />
        </Carousel.Item>
      </Carousel>
      <h1 className="d-flex font-welcome justify-content-center">Selamat Datang di Warung Mahir Mahesa</h1>
    </div>
  );
}

export default Home;
