import React from "react";
import MealResults from "../components/meal/MealResults";
import PopularMeal from "../components/meal/PopularMeal";
import UpperSection from "../components/layout/UpperSection";
import Popular from "../components/layout/Popular";
import Orders from "../components/layout/Orders";

function Home() {
  return (
    <div>
      <UpperSection />
      <MealResults />
      <Orders />
      <Popular />
      <PopularMeal />
    </div>
  );
}

export default Home;
