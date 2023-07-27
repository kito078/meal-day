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

  const { strInstructions, strMeal, strMealThumb, strSource, strYoutube } =
    meal;

  return (
    <div>
      <img src={strMealThumb} alt="" />
      <h2>{strMeal}</h2>
      <p>{strInstructions}</p>

      <video class="w-full" autoplay controls>
        <source src={strYoutube} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Meals;
