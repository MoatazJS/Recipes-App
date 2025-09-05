export default function ActionButtons({ onBack, youtubeUrl }) {
  return (
    <div className="flex justify-center gap-6 flex-wrap mt-12">
      <button
        onClick={onBack}
        className="bg-gray-200 cursor-pointer px-6 py-2 rounded-full shadow-md hover:bg-gray-300 transition font-medium"
      >
        ← Back
      </button>

      {youtubeUrl && (
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 cursor-pointer text-white px-6 py-2 rounded-full shadow-md hover:bg-red-600 transition font-medium"
        >
          Watch on YouTube
        </a>
      )}
    </div>
  );
}
