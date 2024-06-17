import { useEffect, useState } from "react";
import Header from "./Header";
import WriteModal from "./WriteModal";

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recordfood, setRecordFood] = useState([
    {
      name: "사과",
      carbs: 25,
      protein: 0.5,
      fat: 0.3,
    },
    {
      name: "닭가슴살",
      carbs: 0,
      protein: 31,
      fat: 3.6,
    },
    {
      name: "브로콜리",
      carbs: 7,
      protein: 2.8,
      fat: 0.4,
    },
  ]);

  // 로컬 스토리지에서 데이터를 불러오는 useEffect
  useEffect(() => {
    const savedFood = localStorage.getItem("recordfood");
    if (savedFood) {
      setRecordFood(JSON.parse(savedFood));
    }
  }, []);

  // recordfood 상태가 변경될 때 로컬 스토리지에 저장하는 useEffect
  useEffect(() => {
    if (recordfood.length > 0) {
      localStorage.setItem("recordfood", JSON.stringify(recordfood));
    }
  }, [recordfood]);

  return (
    <div className="h-full flex flex-col">
      <Header />
      <main className="border-2 border-slate-700 h-2/4 flex flex-col items-center justify-center overflow-auto p-4">
        <h1 className="text-2xl mb-4">오늘 먹은 음식</h1>
        <ul className="w-full max-w-md">
          {recordfood.map((food, index) => (
            <li key={index} className="border-b border-gray-200 py-2">
              <div className="flex justify-between">
                <span className="font-semibold">{food.name}</span>
                <div>
                  <span className="mr-2">탄수화물: {food.carbs}g</span>
                  <span className="mr-2">단백질: {food.protein}g</span>
                  <span>지방: {food.fat}g</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
      <footer className="h-1/5 flex items-center justify-center">
        <button onClick={() => setIsModalOpen(true)}>
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/color/100/plus--v1.png"
            alt="plus--v1"
          />
        </button>
        {isModalOpen && (
          <WriteModal
            setIsModalOpen={setIsModalOpen}
            recordfood={recordfood}
            setRecordFood={setRecordFood}
          />
        )}
      </footer>
    </div>
  );
}

export default Dashboard;
