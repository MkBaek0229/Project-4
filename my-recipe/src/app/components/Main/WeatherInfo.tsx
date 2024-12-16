export default function WeatherInfo() {
  return (
    <section className="h-[240px] flex justify-center items-center">
      <div className="flex items-center  p-4 rounded-lg w-[550px] h-[140px]">
        <div className="w-[135px]">
          <img src="#" alt="이미지1" />
        </div>
        <div className="flex flex-col items-start w-[165px] ml-6">
          <h2 className="text-2xl font-bold">오늘의 날씨</h2>
          <span className="text-3xl font-semibold">맑음</span>
          <span className="text-lg">온도</span>
        </div>
        <button className="bg-black text-white text-xl px-4 py-2 w-[170px] h-[70px] hover:bg-blue-700 ml-[50px]">
          음식 추천 받기
        </button>
      </div>
    </section>
  );
}
