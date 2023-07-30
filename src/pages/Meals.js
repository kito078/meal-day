import React, { useContext, useEffect } from "react";
import mealReducer from "../hooks/MealReducer";
import { useParams } from "react-router-dom";
import MealContext from "../hooks/MealContext";
import { fetchMeal, getMeal } from "../hooks/MealAction";
import axios from "axios";

function Meals() {
  const { meal, dispatch, getMeal } = useContext(MealContext);
  console.log(meal);

  const params = useParams();

  useEffect(() => {
    getMeal(params.login);
  }, []);

  // useEffect(() => {
  //   const getDataMeal = async () => {
  //     const getData = await getMeal(params.idMeal);

  //     dispatch({
  //       type: "GET_MEALS",
  //       payload: getData,
  //     });
  //   };

  //   getDataMeal();
  // }, []);

  const { strInstructions, strMeal, strMealThumb, strSource, strYoutube } =
    meal;

  return (
    <div>
      <img src={strMealThumb} alt="" />
      <h2>{strMeal}</h2>
      <p>{strInstructions}dddd</p>

      {/* <video class="w-full" autoplay controls>
        <source src={strYoutube} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </div>
  );
}

export default Meals;
