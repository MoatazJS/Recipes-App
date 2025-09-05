import { useQuery } from "@tanstack/react-query";
import {
  getAllCategoriesApi,
  getMealsByCategoryApi,
} from "../services/ApiServices";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Sidebar({ handleCategoryMeals, activeCategory }) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["allCategories"],
    queryFn: getAllCategoriesApi,
    select: (res) => res.data.meals,
  });

  const [open, setOpen] = useState(false);

  async function handleCategoryChange(category) {
    try {
      const response = await getMealsByCategoryApi(category);
      handleCategoryMeals?.(response.data.meals, category);
      setOpen(false);
    } catch (err) {
      console.error("Error fetching category:", category, err);
    }
  }

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow-md"
        onClick={() => setOpen(!open)}
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-xl pt-16 p-4 transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:block overflow-y-auto z-40`}
      >
        <h2 className="text-xl font-bold mb-4">Categories</h2>

        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">Failed to load categories</p>}

        <ul className="space-y-2">
          {(data ?? []).map((meal, idx) => (
            <li key={idx}>
              <button
                onClick={() => handleCategoryChange(meal.strCategory)}
                className={`w-full text-left cursor-pointer px-3 py-2 rounded-lg transition 
                ${
                  activeCategory === meal.strCategory
                    ? "bg-green-300 text-green-900"
                    : "hover:bg-green-200"
                }`}
              >
                {meal.strCategory}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
