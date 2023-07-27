import React from "react";
import "./MealItem.css";
import { Link } from "react-router-dom";

function MealItem({ mealData }) {
  console.log(mealData);
  const { strCategory, strMealThumb, strInstructions, idMeal } = mealData;

  //split the sentence into an array of words
  const wordsArray = strInstructions.split(" ");

  //define the number of words u want to keep
  const wordsToKep = 6;

  //Extract the desired words using slice
  const cutWordsArray = wordsArray.slice(0, wordsToKep);

  //Join the words back into a centence
  const cutSentence = cutWordsArray.join(" ");
  console.log(cutSentence);

  return (
    <Link to={`meals/${idMeal}`}>
      {/* <div class="rounded-extra max-w-xl sm:max-w-md md:max-w-sm mx-auto bg-white rounded-xl shadow-xm overflow-hidden ">
        <div class="">
          <div class="md:shrink-0">
            <img
              class="h-80 w-full object-cover "
              src={strMealThumb}
              alt="Modern building architecture"
            />
          </div>
          <div class="py-8  mx-auto sm:px-4 md:px-8 text-center">
            <h3 class="uppercase pb-4 text-4xl tracking-wide text-sm text-gray-500 font-semibold">
              retreats
            </h3>

            <span class=" text-2xl text-slate-400 whitespace-nowrap">
              Looking to take your team
            </span>
          </div>
        </div>
      </div> */}
      <div class=" p-10 rounded-xl bg-purple-700 md:col-span-2">
        <img
          src={strMealThumb}
          alt=""
          class="hidden w-full duration-200 md:block group-hover:scale-110"
        />

        <p class="mt-6 opacity-50 line-clamp-6">
          "I was an EMT for many years before I joined the bootcamp. I've been
          looking to make a transition and have heard some people who had an
        </p>
      </div>
    </Link>
  );
}

export default MealItem;
