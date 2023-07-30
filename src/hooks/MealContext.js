import { createContext, useEffect, useReducer } from "react";
import mealReducer from "./MealReducer";

const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const initialState = {
    meals: [],
    meal: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(mealReducer, initialState);

  return (
    <MealContext.Provider
      value={{
        ...state,

        dispatch,
      }}
    >
      {children}
    </MealContext.Provider>
  );
};

export default MealContext;
