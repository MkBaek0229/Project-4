import React, { useState } from "react";

function FoodModal({ setIsModalOpen, handleAddFood }) {
  const [foodName, setFoodName] = useState("");
  const [foodImage, setFoodImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [calories, setCalories] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddFood({ foodName, foodImage, description, category, calories });
    setIsModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4">Add Food Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Food Name</label>
            <input
              type="text"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              className="w-full px-2 py-1 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Food Image URL</label>
            <input
              type="text"
              value={foodImage}
              onChange={(e) => setFoodImage(e.target.value)}
              className="w-full px-2 py-1 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-2 py-1 border rounded"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-2 py-1 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Calories</label>
            <input
              type="number"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              className="w-full px-2 py-1 border rounded"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FoodModal;
