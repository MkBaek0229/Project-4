import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./page/Home";
import Sub1 from "./page/Sub";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/sub1" element={<Sub1 />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
