export default function Nav() {
  return (
    <nav className="flex justify-center items-center mt-10 w-[1000px] h-24 bg-[#F1F0E8] rounded-[50px] mx-auto">
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="text-3xl font-medium hover:underline">
            메인
          </a>
        </li>
        <li>
          <a href="#" className="text-3xl font-medium hover:underline">
            도전과제
          </a>
        </li>
        <li>
          <a href="#" className="text-3xl font-medium hover:underline">
            날짜별 인기 음식
          </a>
        </li>
      </ul>
    </nav>
  );
}
