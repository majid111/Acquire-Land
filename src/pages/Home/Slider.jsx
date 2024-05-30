
import IMG1 from '../../assets/Blue Mountain Plantation.jpg';
import IMG2 from '../../assets/Crimson Ridge Vineyard.jpg';
import IMG3 from '../../assets/Emerald Orchard Farm.jpg';
import IMG4 from '../../assets/golden Prairie ranch.jpg';
import IMG5 from '../../assets/green Valley farm.jpg';
import IMG6 from '../../assets/mistry wood forest.jpg';
import IMG7 from '../../assets/old bridge vineyard.jpg';
import IMG8 from '../../assets/silver pine forest.jpg';
import IMG9 from '../../assets/Sunset coconut plantation.jpg';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
  return (
    <div className='h-[500px] max-w-full'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img src={IMG1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={IMG2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={IMG3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={IMG4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={IMG5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={IMG6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={IMG7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={IMG8} alt="" /></SwiperSlide>
        <SwiperSlide><img src={IMG9} alt="" /></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
        
      </Swiper>
    </div>
  );
};

export default Slider;



