import React from "react";
import "./MealItem.css";

function MealItem({ mealData }) {
  const { strCategory, strMealThumb } = mealData;
  return (
    <div className="rounded-extra">
      <div className=" max-w-sm rounded-3xl shadow-lg">
        <img className="w-full rounded-3xl" src={strMealThumb} alt="" />
      </div>
      <h3>{strCategory}</h3>
    </div>
  );
}

export default MealItem;
