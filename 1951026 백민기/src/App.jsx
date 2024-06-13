import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col ">
        <div className="container-xl mx-full md:px-8 lg:px-16 xl:px-40 flex flex-1 gap-20 py-40">
          <Sidebar />
          <Main />
        </div>
      </div>
    </Router>
  );
}

export default App;
