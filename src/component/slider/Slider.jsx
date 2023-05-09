import React, { useState } from 'react';
import './slider.css';
import { data } from './data';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='slider'>
      <Slider {...settings}>
        {data.map((e) => (
          <>
            console.log('data:', data);
            <img src={e.img} alt='' />
          </>
        ))}
      </Slider>
    </div>
  );
};

export default Slider1;
