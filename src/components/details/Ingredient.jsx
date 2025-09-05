export default function Ingredient({ ingredients }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
      <ul className="space-y-3">
        {ingredients.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-3 bg-gray-50 px-3 py-2 rounded-lg hover:bg-green-50 transition"
          >
            <span className="text-green-500">✔</span>
            <span className="text-gray-800">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
