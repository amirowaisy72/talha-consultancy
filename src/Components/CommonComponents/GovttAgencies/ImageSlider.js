import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const handleFocus = () => {
      setAutoplay(false);
    };

    const handleBlur = () => {
      setAutoplay(true);
    };

    const sliderElement = document.querySelector(".slick-slider");
    if (sliderElement) {
      sliderElement.addEventListener("focus", handleFocus);
      sliderElement.addEventListener("blur", handleBlur);
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener("focus", handleFocus);
        sliderElement.removeEventListener("blur", handleBlur);
      }
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    prevArrow: <div style={{ display: "none" }} />, // Hide the previous arrow
    nextArrow: <div style={{ display: "none" }} />, // Hide the next arrow
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src="wp-content/uploads/2022/07/federal-tax-authority.png"
          alt="federal-tax-authority.png"
        />
      </div>
      <div>
        <img
          src="wp-content/uploads/2022/07/government-of-dubai.png"
          alt="government-of-dubai.png"
        />
      </div>
      <div>
        <img
          src="wp-content/uploads/2022/07/united-arab-emirates-ministry-of-finanace.png"
          alt="united-arab-emirates-ministry-of-finanace.png"
        />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default ImageCarousel;
