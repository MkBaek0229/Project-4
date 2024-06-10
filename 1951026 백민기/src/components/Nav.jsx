import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">홈</Link>
      <Link to="/record">기록</Link>
    </nav>
  );
}

export default Nav;
