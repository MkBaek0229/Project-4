import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import RecordWorkoutPage from "./pages/RecordWorkoutPage";
import AchievementsPage from "./pages/AchievementsPage";
import ShopPage from "./pages/ShopPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col ">
        <div className="container-xl mx-full md:px-8 lg:px-16 xl:px-40 flex flex-1 gap-20 py-40">
          <Sidebar />
          <main className="bg-blue-500 flex-1">
            <Header />
            <article>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/record" element={<RecordWorkoutPage />} />
                <Route path="/achievements" element={<AchievementsPage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </article>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
