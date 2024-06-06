import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const ImageSliderWrapper = styled.div`
  width: 1080px;
  outline: none;

  .slick-slide img {
    width: 100%;
    height: 450px;
    object-fit: cover;
  }
`;

const ImageSlider = ({ images }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <ImageSliderWrapper>
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index} onClick={goToNextSlide}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </ImageSliderWrapper>
  );
};

export default ImageSlider;
