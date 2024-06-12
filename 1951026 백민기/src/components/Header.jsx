import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <ul>
        <Link to={"/"}>
          <li>홈화면</li>
        </Link>
        <Link to={"/dashboard"}>
          <li>대시보드</li>
        </Link>
        <Link to={"/record"}>
          <li>기록</li>
        </Link>
        <Link to={"/achievements"}>
          <li>컬렉션</li>
        </Link>
        <Link to={"/shop"}>
          <li>쇼핑하기</li>
        </Link>
        <Link to={"/profile"}>
          <li>프로필</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Header;
