// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import IMG1 from '../../assets/Blue Mountain Plantation.jpg';
import IMG2 from '../../assets/Crimson Ridge Vineyard.jpg';
import IMG3 from '../../assets/Emerald Orchard Farm.jpg';
import IMG4 from '../../assets/golden Prairie ranch.jpg';
import IMG5 from '../../assets/green Valley farm.jpg';
import IMG6 from '../../assets/mistry wood forest.jpg';
import IMG7 from '../../assets/old bridge vineyard.jpg';
import IMG8 from '../../assets/silver pine forest.jpg';
import IMG9 from '../../assets/Sunset coconut plantation.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Slider = () => {
  return (
    <div className='h-[500px] max-w-full'>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
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
      </Swiper>
    </div>
  );
};

export default Slider;
