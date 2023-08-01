import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./TestimonialSlider.css";
import Bug from "../../../images/01.jpg";
import Person from "../../../images/person.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//import './styles.css';

// import required modules
// import { Pagination, Navigation } from "swiper/modules";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function TestimonialSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // modules={[Pagination, Navigation]}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative testimonial-container">
            <img src={Bug} alt="Image" className="w-full h-auto" />
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h3 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-10 mt-10 lg:mt-12">
                Clients About Us{" "}
              </h3>
              <h3 class=" text-2xl font-semibold text-slate-400">
                Testimonials
              </h3>
              <div className="mx-8 md:w-9/12 flex flex-col items-center mt-28 md:mt-32">
                <p className="mb-12">
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
          <div className="relative testimonial-container">
            <img src={Bug} alt="Image" className="w-full h-auto" />
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h3 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-10 mt-10 lg:mt-12">
                Clients About Us{" "}
              </h3>
              <h3 class=" text-2xl font-semibold text-slate-400">
                Testimonials
              </h3>
              <div className="mx-8 md:w-9/12 flex flex-col items-center mt-28 md:mt-32">
                <p className="mb-12">
                  "Fooddy 24/7 has the best application for online ordering.
                  Fantastic choices of restaurant, low delivery price and
                  customers service."
                </p>
                <div className="object-contain w-32 h-32">
                  <img src={Person} alt="" className="rounded-full w-20" />
                </div>
                <span className="mt-10 text-red-400 text-2xl">
                  Nate Wilson 3 days ago
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative testimonial-container">
            <img src={Bug} alt="Image" className="w-full h-auto" />
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h3 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-10 mt-10 lg:mt-12">
                Clients About Us{" "}
              </h3>
              <h3 class=" text-2xl font-semibold text-slate-400">
                Testimonials
              </h3>
              <div className="mx-8 md:w-9/12 flex flex-col items-center mt-28 md:mt-32">
                <p className="mb-12">
                  "Your website was very easy to navigate, service was prompt
                  and staff was very pleasant. I will definately use your
                  service again, and I have already recommended it to a friend."
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
      </Swiper>
    </>
  );
}
