import React, { useState, useEffect } from "react";
import "./TestimonialSlider.css";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    message: "This is an amazing testimonial 1.",
  },
  {
    id: 2,
    name: "Jane Smith",
    message: "This is an amazing testimonial 2.",
  },
  // Add more testimonials here as needed
];

const TestimonialSlider = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(sliderInterval);
    };
  }, []);

  return (
    <div className="testimonial-slider">
      <div className="testimonial">
        <h3>{testimonials[currentTestimonialIndex].name}</h3>
        <p>{testimonials[currentTestimonialIndex].message}</p>
      </div>
    </div>
  );
};

export default TestimonialSlider;
