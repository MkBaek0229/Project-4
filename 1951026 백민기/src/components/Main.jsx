import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import DashboardPage from "../pages/DashboardPage";
import HomePage from "../pages/HomePage";
import RecordWorkoutPage from "../pages/RecordWorkoutPage";
import AchievementsPage from "../pages/AchievementsPage";
import ProfilePage from "../pages/ProfilePage";
import ShopPage from "../pages/ShopPage";

function Main() {
  return (
    <main className="bg-blue-500 flex-1">
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
