import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./TestimonialSlider.css";
import Bug from "../../../images/01.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function TestimonialSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          //   delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="relative h-80">
            <img src={Bug} alt="Image" class="w-full h-auto" />
            <div class="absolute inset-0 bg-black opacity-60"></div>
            <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h2 class="text-4xl font-bold">Clients About Us </h2>
              <p class="text-lg">Testimonials</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="relative h-80">
            <img src={Bug} alt="Image" class="w-full h-auto" />
            <div class="absolute inset-0 bg-black opacity-60"></div>
            <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h2 class="text-4xl font-bold">Your Text Here</h2>
              <p class="text-lg">Additional text or description goes here.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="relative h-80">
            <img src={Bug} alt="Image" class="w-full h-auto" />
            <div class="absolute inset-0 bg-black opacity-60"></div>
            <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h2 class="text-4xl font-bold">Your Text Here</h2>
              <p class="text-lg">Additional text or description goes here.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
