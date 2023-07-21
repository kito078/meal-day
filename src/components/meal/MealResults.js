import React, { useEffect } from "react";
import axios from "axios";

function MealResults() {
  useEffect(() => {
    fetchMeal();
  }, []);

  const fetchMeal = async () => {
    axios
      .get(`${process.env.REACT_APP_MEAL_URL}/search.php?s=Arrabiata`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("error in fetching  data", error);
      });
  };
  return <div>results</div>;
}

export default MealResults;
