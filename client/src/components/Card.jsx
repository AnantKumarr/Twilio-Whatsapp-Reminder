const Card = ({ note, time, onDelete }) => {
  return (
    <div className="relative w-full bg-gradient-to-br from-teal-50 to-amber-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-teal-200">
      {/* Note text */}
      <h2 className="text-xl font-semibold text-teal-900 leading-snug break-words">
        {note}
      </h2>

      {/* Reminder time */}
      <div className="flex items-center gap-2 mt-3 text-sm text-gray-700">
        <span className="font-medium text-teal-700">⏰ Remind Me at:</span>
        <span className="text-amber-800 font-semibold">{time}</span>
      </div>

      {/* Delete button */}
      <div className="pt-4 flex justify-end">
        <button
          onClick={onDelete}
          className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-amber-500 hover:to-teal-600 text-white font-semibold py-2 px-5 rounded-full text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-300"
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
