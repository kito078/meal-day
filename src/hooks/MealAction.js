import axios from "axios";
import MealContext from "./MealContext";

const MEAL_URL = process.env.REACT_APP_MEAL_URL;
const { dispatch } = MealContext;

export const fetchMeal = async (food) => {
  //   setLoading();
  axios
    .get(`${MEAL_URL}/search.php?s=${food}`)
    .then((response) => {
      const data = response.data.meals;

      //   dispatch({
      //     type: "GET_MEALS",
      //     payload: data,
      //   });

      return data;
    })
    .catch((error) => {
      console.error("error in fetching  data", error);
    });
};

export const getMeal = async (idMeal) => {
  axios
    .get(`${MEAL_URL}/lookup.php?i=${idMeal}`)
    .then((response) => {
      const data = response.data.meals.map((item) => item);
    })
    .catch((error) => {
      console.error("error in fetching  data", error);
    });
};
