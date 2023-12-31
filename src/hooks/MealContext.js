import { createContext, useEffect, useReducer } from "react";
import mealReducer from "./MealReducer";
import axios from "axios";

const MEAL_URL = process.env.REACT_APP_MEAL_URL;

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
      .get(`${MEAL_URL}/search.php?s=chicken`)
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

  const getMeal = async (idMeal) => {
    setLoading();
    axios
      .get(`${MEAL_URL}/lookup.php?i=${idMeal}`)
      .then((response) => {
        const data = response.data.meals.map((item) =>
          dispatch({
            type: "GET_MEAL",
            payload: item,
          })
        );
        console.log(data);
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
        getMeal,
        fetchMeal,
      }}
    >
      {children}
    </MealContext.Provider>
  );
};

export default MealContext;
