export default function WeatherCard() {
  return (
    <section className="h-[130px] mb-[35px] flex justify-center">
      <div className="flex items-center bg-[#E5E1DA] p-4 rounded-lg w-[550px] h-[128px]">
        <div className="w-[87px] h-[126px] bg-[#F1F0E8] mr-[28.95px] flex  flex-col text-center gap-[8px]">
          <span className="text-[20px] h-[24px]">요일</span>
          <img src="#" alt="날씨이미지" className="h-[70px]" />
          <span className="text-[13px] h-[16px]">온도</span>
        </div>
      </div>
    </section>
  );
}
