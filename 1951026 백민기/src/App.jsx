import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-center">
        <div
          className="container-xl mx-full flex justify-center
"
        >
          <Sidebar />
          <Main />
        </div>
      </div>
    </Router>
  );
}

export default App;
