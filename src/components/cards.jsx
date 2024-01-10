import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import './cardStyle.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

import slide_image_1 from "./images/CafeOnDevices-removebg-preview.png"
import slide_image_2 from "./images/EraOnDevices-removebg-preview.png"
import slide_image_3 from "./images/ThitiOnDevices-removebg-preview.png"
import slide_image_4 from "./images/TourOnDevices-removebg-preview.png"

const Cards = () => {
    return (
        <div className="card-container">
          <Swiper
           effect={'coverflow'}
           grabCursor={true}
           centeredSlides={true}
           slidesPerView={'auto'}
           coverflowEffect={{
             rotate: 50,
             stretch: 0,
             depth: 100,
             modifier: 1,
             slideShadows: true,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper-container"
          >
            <SwiperSlide className='swiper-slide'>
              <img src={slide_image_1} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
              <img src={slide_image_2} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
              <img src={slide_image_3} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
              <img src={slide_image_4} alt="slide_image" />
            </SwiperSlide>

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
             </div>

          </Swiper>
        </div>
    )
}

export default Cards