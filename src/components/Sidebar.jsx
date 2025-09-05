import { useQuery } from "@tanstack/react-query";
import { getAllCategoriesApi } from "../services/ApiServices";
export default function Sidebar() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["allCategories"],
    queryFn: getAllCategoriesApi,
    select: (res) => res.data.meals,
  });

  if (isLoading) {
    return (
      <aside className="w-64 fixed bg-white shadow-xl p-4 hidden md:block">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <p>Loading...</p>
      </aside>
    );
  }

  if (error) {
    return (
      <aside className="w-64 fixed bg-white shadow-xl p-4 hidden md:block">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <p className="text-red-500">Failed to load categories</p>
      </aside>
    );
  }

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white shadow-xl p-4 hidden md:block overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Categories</h2>

      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">Failed to load categories</p>}

      <ul className="space-y-2">
        {(data ?? []).map((meal, idx) => (
          <li key={idx}>
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-green-100 transition">
              {meal.strCategory}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
