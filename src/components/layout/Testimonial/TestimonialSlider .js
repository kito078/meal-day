import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./TestimonialSlider.css";
import Bug from "../../../images/01.jpg";
import Person from "../../../images/person.avif";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//import './styles.css';

// import required modules
import { Pagination, Navigation } from "swiper/modules";
// import { Autoplays, Pagination, Navigation } from "swiper/modules";

export default function TestimonialSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        // modules={[Autoplays, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative testimonial-container">
            <img src={Bug} alt="Image" className="w-full h-auto" />
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-10 mt-10 lg:mt-12">
                Clients About Us{" "}
              </h3>
              <p class="text-lg">Testimonials</p>
              <div className="w-8/12 flex flex-col items-center">
                <p>
                  "We are a very busy restaurant and Foody 24/7 gives our
                  customers a really easy way to order, pay and get their food
                  so they can beat the line and beat that lunch rush."
                </p>
                <div className="object-contain w-32 h-32">
                  <img src={Person} alt="" className="rounded-full w-20" />
                </div>
                <span className="mt-10 text-red-400 text-2xl">
                  Mary Linkoln 2 days ago
                </span>
              </div>
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
