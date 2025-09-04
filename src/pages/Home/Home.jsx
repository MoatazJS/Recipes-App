"use client";
import { useEffect, useState } from "react";
import Sidebar from "../../components/SideBar";
import MealCard from "../../components/MealCard";

export default function RecipeApp() {
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);

  // Fetch categories + default meals (Beef as example)
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));

    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  // Handle selecting a category
  function handleCategorySelect() {}

  // Handle clicking "View Recipe"
  function handleViewRecipe() {}

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar
        categories={categories}
        onSelectCategory={handleCategorySelect}
      />

      {/* Main content */}
      <main className="ml-64 p-6">
        <h1 className="text-2xl font-bold mb-6">Meals</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {meals.map((meal) => (
            <MealCard
              handleViewRecipe={handleViewRecipe}
              key={meal.idMeal}
              meal={meal}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
