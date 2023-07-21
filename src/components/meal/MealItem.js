import React from "react";
import "./MealItem.css";

function MealItem({ mealData }) {
  const { strCategory, strMealThumb, strInstructions } = mealData;

  //split the sentence into an array of words
  const wordsArray = strInstructions.split(" ");

  //define the number of words u want to keep
  const wordsToKep = 6;

  //Extract the desired words using slice
  const cutWordsArray = wordsArray.slice(0, wordsToKep);

  //Join the words back into a centence
  const cutSentence = cutWordsArray.join(" ");

  return (
    <div className="rounded-extra  shadow-sm max-w-sm  bg-softBlueWhite">
      <div className=" max-w-sm  ">
        <img className="w-full h-80 " src={strMealThumb} alt="" />
      </div>
      <h3 className="text-3xl font-bold">{strCategory}</h3>
      <p>{cutSentence}</p>
    </div>
  );
}

export default MealItem;
