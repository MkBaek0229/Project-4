import { useState } from "react";

function DiaryModal({ handleAddEntry, setModalOpen }) {
  const [foodName, setFoodName] = useState("");
  const [foodImage, setFoodImage] = useState("");
  const [description, setDescription] = useState("");
  const [calories, setCalories] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddEntry({ foodName, foodImage, description, calories });
    setModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add New Diary Entry</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Food Name</label>
            <input
              type="text"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Food Image URL</label>
            <input
              type="text"
              value={foodImage}
              onChange={(e) => setFoodImage(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Calories</label>
            <input
              type="number"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save Entry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DiaryModal;
