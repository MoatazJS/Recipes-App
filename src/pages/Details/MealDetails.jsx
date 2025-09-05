import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HeroSection from "../../components/details/HeroSection";
import Ingredient from "../../components/details/Ingredient";
import Instructions from "../../components/details/Instructions";
import ActionButtons from "../../components/details/Action";
import { getMealDetailsApi } from "../../services/ApiServices";

export default function MealDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    getMealDetailsApi(id);
  }, [id]);

  if (!meal) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-semibold">Loading meal details...</p>
      </div>
    );
  }
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section*/}
      <HeroSection meal={meal} />

      {/* Content*/}
      <div className="w-full px-6 py-10">
        <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {/* Ingredients */}
          <div className="md:col-span-1 md:sticky md:top-6 self-start">
            <Ingredient ingredients={ingredients} />
          </div>

          {/* Instructions */}
          <div className="md:col-span-3">
            <Instructions instructions={meal.strInstructions} />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="w-full px-6 pb-10">
        <div className="max-w-[90rem] mx-auto">
          <ActionButtons
            onBack={() => navigate(-1)}
            youtubeUrl={meal.strYoutube}
          />
        </div>
      </div>
    </div>
  );
}
