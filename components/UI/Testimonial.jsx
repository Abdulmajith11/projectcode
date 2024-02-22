import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/virat.png";
import ava02 from "../../assets/all-images/harish.png";
import ava03 from "../../assets/all-images/dhivakar.png";
import ava04 from "../../assets/all-images/kishore.png";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "I recently purchased the Innovate Motors sedan, and I couldn't be happier with my decision.
         The sleek design caught my eye, and the driving experience has exceeded my expectations.
          The fuel efficiency is impressive, and the advanced safety features make me feel secure on the road.
         Innovate Motors has truly delivered a top-notch vehicle!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Virat Kohli</h6>
            <p className="section__description">Happy Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "I own an Innovate Motors SUV, and while the performance is decent,
         I've encountered some minor issues with the infotainment system.
         The customer service was responsive, but it took a bit of time to get the problem resolved.
        Overall, the car is reliable, but attention to detail in certain aspects could be improved.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Harish</h6>
            <p className="section__description">Happy Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "My experience with Innovate Motors has been disappointing.
        I bought a new model, and within a few months,
        I started facing issues with the engine.
        The repair process was frustrating, and the dealership didn't seem well-prepared to handle it.
         I expected better quality and reliability from a brand like Innovate Motors."
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Dhivakar</h6>
            <p className="section__description">Happy Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "I've been driving an Innovate Motors electric vehicle for the past year,
        and it has exceeded my expectations in terms of range and charging efficiency.
        The eco-friendly features are a big plus, and the overall driving experience is smooth.
        I appreciate Innovate Motors' commitment to sustainability."
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Kishore</h6>
            <p className="section__description">Happy Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;