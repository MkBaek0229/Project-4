import React, { useState } from "react";
import FoodModal from "./FoodModal";

function FoodInfoWidget() {
  const [foodName, setFoodName] = useState("Pasta");
  const [foodImage, setFoodImage] = useState("https://via.placeholder.com/150");
  const [description, setDescription] = useState("Delicious Italian pasta.");
  const [category, setCategory] = useState("Main Dish");
  const [calories, setCalories] = useState(75);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddFood = (food) => {
    setFoodName(food.foodName);
    setFoodImage(food.foodImage);
    setDescription(food.description);
    setCategory(food.category);
    setCalories(food.calories);
  };

  return (
    <div className="p-4 border rounded-lg shadow-md w-64 bg-white">
      <h2 className="text-lg font-bold mb-2 text-center">Food Information</h2>
      <div className="p-2 border rounded mt-4 bg-gray-50">
        {foodImage && (
          <div className="flex justify-center mb-2">
            <img
              src={foodImage}
              alt={foodName}
              className="w-16 h-16 object-cover rounded-full shadow-sm"
            />
          </div>
        )}
        <h3 className="text-sm font-bold text-center">{foodName}</h3>
        <p className="text-xs text-center text-gray-600">{category}</p>
        <p className="text-xs text-center mt-1">{description}</p>
        <div className="mt-2">
          <label className="block text-gray-700 text-center text-xs mb-1">
            Calories
          </label>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${calories}%` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md"
          onClick={() => setIsModalOpen(true)}
        >
          +
        </button>
      </div>
      {isModalOpen && (
        <FoodModal
          setIsModalOpen={setIsModalOpen}
          handleAddFood={handleAddFood}
        />
      )}
    </div>
  );
}

export default FoodInfoWidget;
