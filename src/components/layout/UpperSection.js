import React from "react";

function UpperSection() {
  return (
    <div className="container mx-auto text-center my-32">
      <h1 class="mb-6 text-5xl uppercase  font-semibold text-center leading-tight md:text-6xl lg:text-7xl">
        More than <span className="text-red-500">20,000 dishes</span> to order!
      </h1>

      <p className="text-slate-500">
        Welcome to The Biggest Network of Food Ordering & Delivery
      </p>
    </div>
  );
}

export default UpperSection;
