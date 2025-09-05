export default function HeroSection({ meal }) {
  return (
    <div className="relative h-72 md:h-96 mt-6 max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full max-h-80 object-cover rounded-xl shadow-md mb-6 sm:max-h-[28rem]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
        <div className="p-6 md:p-10 text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
            {meal.strMeal}
          </h1>
          <p className="mt-3 flex gap-2 flex-wrap">
            <span className="bg-green-500 px-3 py-1 rounded-full text-sm font-medium shadow-md">
              {meal.strCategory}
            </span>
            <span className="bg-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-md">
              {meal.strArea}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
