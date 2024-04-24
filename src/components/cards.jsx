import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import './cardStyle.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

import slide_image_1 from "./images/PeterOnDevices.png"
import slide_image_2 from "./images/MiaOnDevices.png"
import slide_image_3 from "./images/LittleOnDevices.png"
import slide_image_4 from "./images/EraOnDevices.png"
import slide_image_5 from "./images/ThitiOnDevices.png"
import slide_image_6 from "./images/TourOnDevices.png"

const Cards = () => {
    return (
        <div className="card-container">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={'3'}
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
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                430: {
                  slidesPerView: 1,
                },
                414: {
                  slidesPerView: 1,
                },
                390: {
                  slidesPerView: 1,
                },
                375: {
                  slidesPerView: 1,
                },
              }}
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