import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">홈</Link>
      <Link to="/record">기록</Link>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </nav>
  );
}

export default Nav;
