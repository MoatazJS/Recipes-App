import Sidebar from "../../components/SideBar";
import MealCard from "../../components/MealCard";
import { useQuery } from "@tanstack/react-query";
import { getDefaultMealsApi } from "../../services/ApiServices";
import { useState } from "react";

export default function RecipeApp() {
  // Fetch default meals
  const {
    data: defaultMeals,
    error,
    isLoading,
  } = useQuery({
    queryKey: "DefaultMeal",
    queryFn: getDefaultMealsApi,
    select: (res) => res.data.meals,
  });

  const [meals, setMeals] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
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
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar handleCategoryMeals={handleCategoryMeals} />

      {/* Main content */}
      <main className="ml-64 p-6">
        <h1 className="text-2xl font-bold mb-6">
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
