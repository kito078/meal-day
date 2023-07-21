import React, { useEffect, useState } from "react";
import axios from "axios";
import MealItem from "./MealItem";

function MealResults() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMeal();
  }, []);

  const fetchMeal = async () => {
    axios
      .get(`${process.env.REACT_APP_MEAL_URL}/search.php?s=chicken`)
      .then((response) => {
        const data = response.data.meals;
        setMeals(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("error in fetching  data", error);
      });
  };
  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {meals.map((mealData) => (
          <MealItem mealData={mealData} />
        ))}
      </div>
    </div>
  );
}

export default MealResults;
