"use client";

import firestore from "../../firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}
