import React, { useContext, useEffect } from "react";
import mealReducer from "../hooks/MealReducer";
import { useParams } from "react-router-dom";
import MealContext from "../hooks/MealContext";

function Meals() {
  const { meal, getMeal } = useContext(MealContext);
  console.log(meal);

  const params = useParams();

  useEffect(() => {
    getMeal(params.idMeal);
  }, []);

  const { strInstructions } = meal;

  return (
    <div>
      <p>{strInstructions}</p>
    </div>
  );
}

export default Meals;
