import React, { useState } from "react";
import FoodModal from "./FoodModal";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

function FoodInfoWidget() {
  const [foods, setFoods] = useState([
    {
      foodName: "로티니 파스타",
      foodImage: "https://i.ytimg.com/vi/K8lGoaUqFEo/maxresdefault.jpg",
      description: "맛나는 파스타.",
      category: "이탈리안",
      calories: 75,
      carbs: 15,
      protein: 5,
      fat: 3,
    },
    {
      foodName: "마르게리따 피자",
      foodImage:
        "https://newsimg-hams.hankookilbo.com/2022/02/17/cb902e81-4e99-4086-ac29-672ddb9d3a28.jpg",
      description: "맛나는 피자",
      category: "이탈리안",
      calories: 80,
      carbs: 20,
      protein: 8,
      fat: 5,
    },
    // 다른 음식 정보 추가
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddFood = (food) => {
    setFoods([...foods, food]);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % foods.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + foods.length) % foods.length
    );
  };

  const currentFood = foods[currentIndex];

  const data = {
    labels: ["탄수화물", "단백질", "지방"],
    datasets: [
      {
        data: [currentFood.carbs, currentFood.protein, currentFood.fat],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="p-4 border rounded-lg shadow-md w-full bg-white flex">
      <div className="w-1/2 flex justify-center items-center">
        <div className="relative w-48 h-48">
          <Doughnut data={data} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold">
              {currentFood.calories} kcal
            </span>
          </div>
        </div>
      </div>
      <div className="w-1/2 p-4 border-l">
        <h2 className="text-lg font-bold mb-2 text-center">음식 정보</h2>
        {currentFood.foodImage && (
          <div className="flex justify-center mb-2">
            <img
              src={currentFood.foodImage}
              alt={currentFood.foodName}
              className="w-24 h-24 object-cover rounded-full shadow-sm"
            />
          </div>
        )}
        <h3 className="text-sm font-bold text-center">
          {currentFood.foodName}
        </h3>
        <p className="text-xs text-center text-gray-600">
          {currentFood.category}
        </p>
        <p className="text-xs text-center mt-1">{currentFood.description}</p>
        <div className="mt-4 text-center">
          <p className="text-xs">Carbs: {currentFood.carbs}g</p>
          <p className="text-xs">Protein: {currentFood.protein}g</p>
          <p className="text-xs">Fat: {currentFood.fat}g</p>
        </div>
        <div className="flex justify-between mt-4">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-full shadow-md"
            onClick={handlePrevious}
          >
            &lt;
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md"
            onClick={() => setIsModalOpen(true)}
          >
            +
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-full shadow-md"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
        {isModalOpen && (
          <FoodModal
            setIsModalOpen={setIsModalOpen}
            handleAddFood={handleAddFood}
          />
        )}
      </div>
    </div>
  );
}

export default FoodInfoWidget;
