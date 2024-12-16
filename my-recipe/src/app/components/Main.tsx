import FoodQuiz from "./Main/FoodQuiz";
import WeatherCard from "./Main/WeatherCard";
import WeatherInfo from "./Main/WeatherInfo";

export default function Main() {
  return (
    <main className="container mx-auto mt-6 mb-[50px] max-w-[1000px]">
      <WeatherInfo />
      <WeatherCard />
      <FoodQuiz />
    </main>
  );
}
