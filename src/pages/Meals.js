import React, { useContext, useEffect } from "react";
import mealReducer from "../hooks/MealReducer";
import { useParams } from "react-router-dom";

function Meals() {
  const { meal, getMeal } = useContext(mealReducer);

  const params = useParams();

  useEffect(() => {
    getMeal(params.idMeal);
  }, []);

  const {} = meal;

  return <div>meal</div>;
}

export default Meals;
