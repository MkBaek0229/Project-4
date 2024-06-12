// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import HomePage from "./page/HomePage";
import DashboardPage from "./page/DashboardPage";
import RecordWorkoutPage from "./page/RecordWorkoutPage";
import AchievementsPage from "./page/AchievementsPage";
import ShopPage from "./page/ShopPage";
import ProfilePage from "./page/ProfilePage";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/record" element={<RecordWorkoutPage />} />
              <Route path="/achievements" element={<AchievementsPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
