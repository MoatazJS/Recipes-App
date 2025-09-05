export default function Instructions({ instructions }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-4">Instructions</h2>
      <ul className="list-disc list-inside space-y-4">
        {instructions.split("\n").map((step, idx) =>
          step.trim() ? (
            <li
              key={idx}
              className="pl-2 border-l-4 border-green-400 bg-gray-50 rounded-lg py-2 px-3 text-gray-700 shadow-sm"
            >
              {step}
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
}
