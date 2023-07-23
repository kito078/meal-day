import { createContext, useEffect, useReducer } from "react";
import mealReducer from "./MealReducer";
import axios from "axios";

const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const initialState = {
    meals: [],
    meal: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(mealReducer, initialState);

  useEffect(() => {
    fetchMeal();
  }, []);

  const fetchMeal = async () => {
    setLoading();
    axios
      .get(`${process.env.REACT_APP_MEAL_URL}/search.php?s=chicken`)
      .then((response) => {
        const data = response.data.meals;

        dispatch({
          type: "GET_MEALS",
          payload: data,
        });
      })
      .catch((error) => {
        console.error("error in fetching  data", error);
      });
  };

  const getMeal = async () => {
    setLoading();
    axios
      .get(`${process.env.REACT_APP_MEAL_URL}/lookup.php?i=52772`)
      .then((response) => {
        const data = response.data.meals.map((item) =>
          dispatch({
            type: "GET_MEAL",
            payload: item,
          })
        );
      })
      .catch((error) => {
        console.error("error in fetching  data", error);
      });
  };
  function setLoading() {
    dispatch({
      type: "SET_LOADING",
    });
  }

  return (
    <MealContext.Provider
      value={{
        meals: state.meals,
        loading: state.loading,
        meal: state.meal,
        fetchMeal,
        getMeal,
      }}
    >
      {children}
    </MealContext.Provider>
  );
};

export default MealContext;
