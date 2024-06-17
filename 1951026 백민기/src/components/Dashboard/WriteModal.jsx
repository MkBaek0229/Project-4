import { useState } from "react";

function WriteModal({ setIsModalOpen, recordfood, setRecordFood }) {
  const [foodName, setFoodName] = useState("");
  const [carbValue, setCarbValue] = useState("");
  const [proteinValue, setProteinValue] = useState("");
  const [fatValue, setFatValue] = useState("");

  const closeModal = (e) => {
    if (e.target.id === "modal-overlay") {
      setIsModalOpen(false);
    }
  };

  const addFood = () => {
    if (foodName && carbValue && proteinValue && fatValue) {
      const newFood = {
        name: foodName,
        carbs: parseFloat(carbValue),
        protein: parseFloat(proteinValue),
        fat: parseFloat(fatValue),
      };

      setRecordFood([...recordfood, newFood]);

      setFoodName("");
      setCarbValue("");
      setProteinValue("");
      setFatValue("");
      setIsModalOpen(false); // 모달 닫기
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center"
      onClick={closeModal}
    >
      <div className="bg-white rounded-2xl p-6 shadow-lg w-80">
        <h2>음식 추가</h2>
        <input
          type="text"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          placeholder="음식 이름"
          className="border border-gray-300 p-2 rounded mb-2 w-full"
        />
        <input
          type="number"
          value={carbValue}
          onChange={(e) => setCarbValue(e.target.value)}
          placeholder="탄수화물 (g)"
          className="border border-gray-300 p-2 rounded mb-2 w-full"
        />
        <input
          type="number"
          value={proteinValue}
          onChange={(e) => setProteinValue(e.target.value)}
          placeholder="단백질 (g)"
          className="border border-gray-300 p-2 rounded mb-2 w-full"
        />
        <input
          type="number"
          value={fatValue}
          onChange={(e) => setFatValue(e.target.value)}
          placeholder="지방 (g)"
          className="border border-gray-300 p-2 rounded mb-4 w-full"
        />
        <button
          onClick={addFood}
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          추가
        </button>
      </div>
    </div>
  );
}

export default WriteModal;
