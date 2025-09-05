import axios from "axios";

export function getAllCategoriesApi() {
  return axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
}

export function getDefaultMealsApi() {
  return axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef");
}
export function getMealsByCategoryApi(category) {
  return axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
}
export function getMealDetailsApi(id) {
  axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
}
