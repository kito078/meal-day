import axios from "axios";
import MealContext from "./MealContext";

const MEAL_URL = process.env.REACT_APP_MEAL_URL;

export const fetchMeal = async () => {
  axios
    .get(`${MEAL_URL}/search.php?s=chicken`)
    .then((response) => {
      const data = response.data.meals;

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
