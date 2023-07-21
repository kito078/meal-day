import React from "react";
import "./MealItem.css";

function MealItem({ mealData }) {
  const { strCategory, strMealThumb } = mealData;
  return (
    <div className="rounded-extra  shadow-sm max-w-sm  bg-softBlueWhite">
      <div className=" max-w-sm  ">
        <img className="w-full h-80 " src={strMealThumb} alt="" />
      </div>
      <h3 className="text-3xl font-bold">{strCategory}</h3>
    </div>
  );
}

export default MealItem;
