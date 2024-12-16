export default function FoodQuiz() {
  return (
    <section className="mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">오늘의 음식 퀴즈</h2>
      <div className="flex">
        <div className="bg-white rounded-lg p-6 w-[100%]">
          <p className="text-2xl mb-4">다음 중 한국의 전통 음식이 아닌 것은?</p>
          <ul className="flex gap-[50px]">
            <li>
              <button className="bg-[#B3C8CF] font-black text-white text-xl px-4 py-2 w-[200px] h-[200px] hover:bg-[#F1F0E8]">
                김치
              </button>
            </li>
            <li>
              <button className="bg-[#B3C8CF]  font-black text-white text-xl px-4 py-2 w-[200px] h-[200px] hover:bg-[#F1F0E8]">
                불고기
              </button>
            </li>
            <li>
              <button className="bg-[#B3C8CF] font-black text-white text-xl px-4 py-2 w-[200px] h-[200px] hover:bg-[#F1F0E8]">
                스시
              </button>
            </li>
            <li>
              <button className="bg-[#B3C8CF] font-black  text-white text-xl px-4 py-2 w-[200px] h-[200px] hover:bg-[#F1F0E8]">
                비빔밥
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
