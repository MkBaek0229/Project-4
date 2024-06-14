import React from "react";
import "../index.css"; // Tailwind CSS와 추가 스타일을 포함한 CSS 파일을 가져옵니다.

function Header() {
  return (
    <section className="container mx-auto p-4 ">
      <h1 className="text-white uppercase text-[42px] m-0 leading-[47px] tracking-[2px] font-rix">
        <span className="title text-black transform translate-x-[-50%] block relative left-1/2 text-center">
          시간의민족
        </span>
      </h1>
    </section>
  );
}

export default Header;
