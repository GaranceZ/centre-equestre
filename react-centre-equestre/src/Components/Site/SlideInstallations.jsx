import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../Styles/Site/slide.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/assets/Images_Installations/install_01.jpg'} alt="image d'un manège" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/assets/Images_Installations/install_02.jpg'} alt="image d'un manège" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/assets/Images_Installations/install_03.jpeg'} alt="image d'un manège" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/assets/Images_Installations/install_04.jpg'} alt="image d'un manège" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/assets/Images_Installations/install_05.jpg'} alt="image d'un manège" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/assets/Images_Installations/install_06.jpg'} alt="image d'un manège" /></SwiperSlide>
      </Swiper>
    </>
  );
}
