import { useState } from "react";
import DiaryModal from "./DiaryModal";

function DiaryWidget({ entries, handleAddEntry }) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Food Diary</h2>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => setModalOpen(true)}
      >
        + Add Diary Entry
      </button>
      {entries.length === 0 ? (
        <p>No entries yet.</p>
      ) : (
        <ul>
          {entries.map((entry) => (
            <li key={entry.id} className="mb-4 border p-4 rounded">
              <h3 className="text-lg font-bold">{entry.foodName}</h3>
              {entry.foodImage && (
                <img
                  src={entry.foodImage}
                  alt={entry.foodName}
                  className="w-32 h-32 object-cover mt-2"
                />
              )}
              <p className="mt-2">{entry.description}</p>
              <p className="mt-2">Calories: {entry.calories}</p>
            </li>
          ))}
        </ul>
      )}
      {isModalOpen && (
        <DiaryModal
          handleAddEntry={handleAddEntry}
          setModalOpen={setModalOpen}
        />
      )}
    </div>
  );
}

export default DiaryWidget;
