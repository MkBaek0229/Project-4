import { useState } from "react";
import DiaryWidget from "./DiaryWidget";
import FoodInfoWidget from "./FoodInfoWidget";

// Home 컴포넌트
function Home() {
  const [foodName, setFoodName] = useState("");
  const [foodImage, setFoodImage] = useState("");
  const [description, setDescription] = useState("");
  const [calories, setCalories] = useState("");
  const [entries, setEntries] = useState([]);

  const handleAddEntry = (entry) => {
    const newEntry = {
      id: Date.now(),
      ...entry,
    };
    setEntries([...entries, newEntry]);
  };

  return (
    <div className="container mx-auto p-4">
      <FoodInfoWidget
        foodName={foodName}
        setFoodName={setFoodName}
        foodImage={foodImage}
        setFoodImage={setFoodImage}
        description={description}
        setDescription={setDescription}
        calories={calories}
        setCalories={setCalories}
      />
      <DiaryWidget />
    </div>
  );
}

export default Home;
