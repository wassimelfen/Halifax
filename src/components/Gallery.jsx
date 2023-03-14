import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../gal1.jpeg';
import slide_image_2 from '../gal2.jpeg';
import slide_image_3 from '../gal3.png';
import slide_image_4 from '../gal4.png';
import slide_image_5 from '../gal5.png';
import slide_image_6 from '../gal6.png';
import slide_image_7 from '../gal7.png';
import slide_image_8 from '../gal8.png';
import slide_image_9 from '../gal9.png';
import slide_image_10 from '../gal10.png';
import slide_image_11 from '../gal11.jpeg';
import slide_image_12 from '../gal12.jpeg';
import slide_image_13 from '../gal13.jpeg';


function Gallery() {
  return (
    <div className="containergallery">
      <h1 className="heading">Galerie photos</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_9} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_10} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_11} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_12} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_13} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
         
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Gallery;