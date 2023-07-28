const MEAL_URL = process.env.REACT_APP_MEAL_URL;

export const fetchMeal = async () => {
  setLoading();
  axios
    .get(`${MEAL_URL}/search.php?s=chicken`)
    .then((response) => {
      const data = response.data.meals;

      //   dispatch({
      //     type: "GET_MEALS",
      //     payload: data,
      //   });

      return data;
    })
    .catch((error) => {
      console.error("error in fetching  data", error);
    });
};
