import React from "react";

function MealItem({ mealData }) {
  const { strCategory, strMealThumb } = mealData;
  return (
    <div>
      <div className="max-w-sm rounded-lg">
        <img className="w-full rounded" src={strMealThumb} alt="" />
      </div>
      <h3>{strCategory}</h3>
    </div>
  );
}

export default MealItem;