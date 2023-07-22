import { createContext, useEffect, useReducer } from "react";
import mealReducer from "./MealReducer";
import axios from "axios";

const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const initialState = {
    meals: [],
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

    setTimeout(() => {
      setLoading();
    }, 1000);

    function setLoading() {
      dispatch({
        type: "SET_LOADING",
      });
    }
  };

  return (
    <MealContext.Provider
      value={{ meals: state.meals, loading: state.loading, fetchMeal }}
    >
      {children}
    </MealContext.Provider>
  );
};

export default MealContext;
