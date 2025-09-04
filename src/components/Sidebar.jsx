export default function Sidebar({ categories, onSelectCategory }) {
  return (
    <aside className="w-64 bg-white shadow-xl p-4 hidden md:block">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat.idCategory}>
            <button
              onClick={() => onSelectCategory(cat.strCategory)}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-green-100 transition"
            >
              {cat.strCategory}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
