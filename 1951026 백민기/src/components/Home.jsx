import React from "react";

function Home() {
  return (
    <div className="container mx-auto p-4">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">환영합니다.</h1>
        <p className="text-2xl mb-4">
          예약을 통해 원하는 시간에 맛있는 음식을 받아보세요.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/reservation"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            예약하기
          </a>
          <a href="/menu" className="bg-green-500 text-white px-4 py-2 rounded">
            메뉴 보기
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">추천 메뉴</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-300 p-4 rounded">
            <h3 className="text-2xl font-bold mb-2">Menu Item 1</h3>
            <p className="text-lg mb-2">
              Delicious description of Menu Item 1.
            </p>
            <p className="text-xl font-semibold">₩10,000</p>
          </div>
          <div className="border border-gray-300 p-4 rounded">
            <h3 className="text-2xl font-bold mb-2">Menu Item 2</h3>
            <p className="text-lg mb-2">
              Delicious description of Menu Item 2.
            </p>
            <p className="text-xl font-semibold">₩12,000</p>
          </div>
          <div className="border border-gray-300 p-4 rounded">
            <h3 className="text-2xl font-bold mb-2">Menu Item 3</h3>
            <p className="text-lg mb-2">
              Delicious description of Menu Item 3.
            </p>
            <p className="text-xl font-semibold">₩15,000</p>
          </div>
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-3xl font-bold mb-4">서비스 장점</h2>
        <ul className="list-disc list-inside">
          <li className="text-lg mb-2">신속한 배달 서비스</li>
          <li className="text-lg mb-2">신선한 재료 사용</li>
          <li className="text-lg mb-2">다양한 메뉴 선택</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-3xl font-bold mb-4">사용자 후기</h2>
        <blockquote className="border-l-4 border-blue-500 pl-4">
          <p className="text-lg mb-2">
            "정말 신선하고 맛있었어요! 예약 시스템도 편리하네요."
          </p>
          <footer className="text-sm text-gray-600">- 김봉진</footer>
        </blockquote>
        <blockquote className="border-l-4 border-green-500 pl-4 mt-4">
          <p className="text-lg mb-2">
            "서비스가 훌륭해요. 자주 이용할 것 같아요."
          </p>
          <footer className="text-sm text-gray-600">- 김범석</footer>
        </blockquote>
      </section>
    </div>
  );
}

export default Home;
