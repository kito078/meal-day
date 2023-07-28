import React, { useContext, useEffect } from "react";
import MealContext from "../../hooks/MealContext";
import MealItem from "./MealItem";

function PopularMeal() {
  const { meals, fetchMeal } = useContext(MealContext);

  const mapedMeals = meals.slice(8, 12);

  return (
    <div className="container-one mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:grid-cols-4 gap-4 justify-items-center mx-10 lg:mx-0">
        {mapedMeals.map((mealData) => (
          <MealItem key={mealData.idMeal} mealData={mealData} />
        ))}
      </div>
    </div>
  );
}

export default PopularMeal;
