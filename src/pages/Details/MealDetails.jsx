import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function MealDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero */}
      <div className="relative h-72 md:h-96 rounded-b-2xl overflow-hidden shadow-lg">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6 md:p-10 text-white">
            <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
              {meal.strMeal}
            </h1>
            <p className="mt-2 text-lg opacity-90">
              <span className="bg-green-500 text-white px-3 py-1 rounded-lg mr-2">
                {meal.strCategory}
              </span>
              <span className="bg-gray-700 text-white px-3 py-1 rounded-lg">
                {meal.strArea}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
        {/* Ingredients */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
          <ul className="space-y-2"></ul>
        </div>

        {/* Instructions */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Instructions</h2>
          <div className="bg-white shadow-md p-5 rounded-xl leading-relaxed max-h-[500px] overflow-y-auto">
            {meal.strInstructions}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="max-w-6xl mx-auto p-6 flex flex-wrap gap-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-200 px-5 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          ← Back
        </button>

        {meal.strYoutube && (
          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Watch on YouTube
          </a>
        )}
      </div>
    </div>
  );
}
