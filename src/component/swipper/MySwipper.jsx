import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper';
import c1 from '../../assets/c1.jpg';
import c2 from '../../assets/c2.jpg';
import c3 from '../../assets/c3.jpg';
import c4 from '../../assets/c4.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';

SwiperCore.use([Navigation, Pagination]);

const MySwiper = () => {
  const swiperStyle = {
    marginTop: '150px',
    position: 'relative',
  };

  const nextButtonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '10px',
    width: '30px',
    height: '30px',
    backgroundColor: '#fff',
    borderRadius: '50%',
    color: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const prevButtonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '50px', // Adjust this value as needed
    width: '30px',
    height: '30px',
    backgroundColor: '#fff',
    borderRadius: '50%',
    color: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={swiperStyle}>
      <Swiper
        spaceBetween={100}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={c1} alt="" style={{ width: '400px', height: '100px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c2} alt="" style={{ width: '400px', height: '100px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c3} alt="" style={{ width: '400px', height: '100px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c4} alt="" style={{ width: '400px', height: '100px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c2} alt="" style={{ width: '400px', height: '100px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c3} alt="" style={{ width: '400px', height: '100px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c2} alt="" style={{ width: '400px', height: '100px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c3} alt="" style={{ width: '400px', height: '100px' }} />
        </SwiperSlide>
      </Swiper>

    </div>
  );
};

export default MySwiper;
