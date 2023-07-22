import React, { useContext, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

import MealItem from "./MealItem";
import MealContext from "../../hooks/MealContext";

function MealResults() {
  const { meals, loading } = useContext(MealContext);
  console.log(meals);

  if (!loading) {
    return (
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          {meals.map((mealData) => (
            <MealItem mealData={mealData} />
          ))}
        </div>
      </div>
    );
  } else {
    return <BeatLoader color="#36d7b7" size={20} />;
  }
}

export default MealResults;
