import Sidebar from "../../components/Sidebar";
import MealCard from "../../components/Mealcard";
import { useQuery } from "@tanstack/react-query";
import { getDefaultMealsApi } from "../../services/ApiServices";
import { useState } from "react";

export default function RecipeApp() {
  const {
    data: defaultMeals,
    error,
    isLoading,
  } = useQuery({
    queryKey: "DefaultMeal",
    queryFn: getDefaultMealsApi,
    select: (res) => res.data.meals,
  });
  const [activeCategory, setActiveCategory] = useState("Beef");
  const [meals, setMeals] = useState(null);

  const handleCategoryMeals = (meals, category) => {
    setMeals(meals);
    setActiveCategory(category);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-semibold">Loading meals...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500 font-semibold">Failed to load meals</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <Sidebar
        handleCategoryMeals={handleCategoryMeals}
        activeCategory={activeCategory}
      />

      {/* Main content */}
      <main className="flex-1 p-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-green-700">
          {activeCategory ? activeCategory : "Beef"}
        </h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {(meals ?? defaultMeals ?? []).map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      </main>
    </div>
  );
}
