import React, { useContext, useEffect } from "react";
import MealContext from "../../hooks/MealContext";
import MealItem from "./MealItem";

function PopularMeal() {
  const { meals, fetchMeal } = useContext(MealContext);

  const name = "beef";

  useEffect(() => {
    fetchMeal(name);
  }, []);

  const mapedMeals = meals.slice(8, 12);

  return (
    <div className="container-one mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {mapedMeals.map((mealData) => (
          <MealItem key={mealData.idMeal} mealData={mealData} />
        ))}
      </div>
    </div>
  );
}

export default PopularMeal;
