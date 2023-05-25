import React, { useState } from "react";
import "./Banner.css";
import Suvrodeb from '../../../src/assets/Suvrodeb.jpg'
import { Carousel, Container } from "react-bootstrap";

import Banner_1 from '../../assets/Banner_1.png'
import Banner_2 from '../../assets/Banner_2.png'
import Banner_3 from '../../assets/Banner_3.webp'

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
  setIndex(selectedIndex);
  }

  return (
    <Container>
      <div className="banner">
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 size"
          src={Banner_1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="titleCarousel">All Time Get Fresh and chef food from us</h3>
          <p className="descCarousel">Take This Drink and be fresh and cool</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 size"
          src={Banner_2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="fw-bold titleCarousel">Get incredible Natural food </h3>
          <p className="descCarousel">This food is awesome and available now</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 size"
          src={Banner_3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="titleCarousel">Whenever You will be hungry you have to remember us</h3>
          <p className="descCarousel">
            This is Our Natural food
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
    </Container>
  );
};

export default Banner;
