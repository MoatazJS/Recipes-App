import { useNavigate } from "react-router-dom";

export default function MealCard({ meal }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="flex flex-col flex-1 p-4">
        <h3 className="text-lg font-semibold mb-3">{meal.strMeal}</h3>
        <div className="flex-grow" />
        <button
          onClick={() => navigate(`/meal/${meal.idMeal}`)}
          className="w-full bg-green-500 cursor-pointer text-white py-2 rounded-xl hover:bg-green-600 transition"
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
