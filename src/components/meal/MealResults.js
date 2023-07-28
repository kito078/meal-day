import React, { useContext, useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

import MealItem from "./MealItem";
import MealContext from "../../hooks/MealContext";
import SearchMeal from "./SearchMeal";
import { fetchMeal } from "../../hooks/MealAction";

function MealResults() {
  const { meals, loading, dispatch } = useContext(MealContext);

  useEffect(() => {
    const fetchDataMeal = async () => {
      const fetchData = await fetchMeal("chicken");

      dispatch({
        type: "GET_MEALS",
        payload: fetchData,
      });
    };
    fetchDataMeal();
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
