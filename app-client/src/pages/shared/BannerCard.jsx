import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// banner card styles
import './bannerCard.css'

// import required modules
import { EffectCards } from 'swiper/modules';

function BannerCard() {
  return (
    <div className='book-slider px-40'>
      <div className='wrapper'>
        <a href="#"><img className="rounded-xl" src='/src/assets/banner-books/pic1.jpg'></img></a>
      </div>
    </div>
  )
}

export default BannerCard