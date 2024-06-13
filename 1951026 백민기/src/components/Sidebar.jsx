import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="bg-green-500 w-40 p-4 rounded-lg h-82">
      <nav>
        <ul className="flex flex-col justify-center gap-16">
          <li>
            <NavLink
              to="/"
              className="block bg-white text-center p-4 rounded-lg shadow-md hover:bg-gray-200"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className="block bg-white text-center p-4 rounded-lg shadow-md hover:bg-gray-200"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/record"
              className="block bg-white text-center p-4 rounded-lg shadow-md hover:bg-gray-200"
            >
              Record
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/achievements"
              className="block bg-white text-center p-4 rounded-lg shadow-md hover:bg-gray-200"
            >
              Achievements
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
