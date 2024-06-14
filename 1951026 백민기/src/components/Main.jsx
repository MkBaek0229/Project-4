import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import DashboardPage from "../pages/DashboardPage";
import HomePage from "../pages/HomePage";
import RecordWorkoutPage from "../pages/RecordWorkoutPage";
import AchievementsPage from "../pages/AchievementsPage";

function Main() {
  return (
    <main className="bg-custom-winter flex-1 max-w-6xl">
      <Header />
      <article>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/record" element={<RecordWorkoutPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
        </Routes>
      </article>
    </main>
  );
}

export default Main;
