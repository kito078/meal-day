import React, { useContext, useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

import MealItem from "./MealItem";
import MealContext from "../../hooks/MealContext";
import SearchMeal from "./SearchMeal";

function MealResults() {
  const { meals, loading, fetchMeal } = useContext(MealContext);

  const name = "chicken";

  useEffect(() => {
    fetchMeal(name);
  }, []);

  const mapedMeals = meals.slice(0, 4);

  if (!loading) {
    return (
      <div className=" mx-auto">
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          {mapedMeals.map((mealData) => (
            <MealItem key={mealData.idMeal} mealData={mealData} />
          ))}
        </div>
      </div>
    );
  } else {
    return <PuffLoader color="red" size={70} />;
  }
}

export default MealResults;
