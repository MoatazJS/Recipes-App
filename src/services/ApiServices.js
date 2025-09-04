import axios from "axios";

export default function getAllCategoriesApi() {
  return axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
}
