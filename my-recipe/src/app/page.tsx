"use client";

import firestore from "../../firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState();

  const onClickUpLoadButton = async () => {
    await addDoc(collection(firestore, `temp`), {
      value,
    });
  };

  return (
    <div className="container mx-auto" style={{ maxWidth: "1000px" }}>
      <header className="invisible">
        <h1 className="text-4xl font-bold">날씨 플레이트🍽️</h1>
      </header>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          onChange={(event) => setValue(event.target.value)}
          className="border p-2"
        />
        <button
          onClick={onClickUpLoadButton}
          className="bg-blue-500 text-white p-2 ml-2"
        >
          전송
        </button>
      </form>
    </div>
  );
}
