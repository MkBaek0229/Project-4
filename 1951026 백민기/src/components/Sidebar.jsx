import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="bg-custom-cold w-40 p-4 flex-initial h-82">
      <nav>
        <ul className="flex flex-col justify-center gap-16">
          <li>
            <NavLink
              to="/"
              className="block bg-white text-center p-4 rounded-lg shadow-md hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <path fill="#E8EAF6" d="M42 39L6 39 6 23 24 6 42 23z"></path>
                <path
                  fill="#C5CAE9"
                  d="M39 21L34 16 34 9 39 9zM6 39H42V44H6z"
                ></path>
                <path
                  fill="#B71C1C"
                  d="M24 4.3L4 22.9 6 25.1 24 8.4 42 25.1 44 22.9z"
                ></path>
                <path fill="#D84315" d="M18 28H30V44H18z"></path>
                <path fill="#01579B" d="M21 17H27V23H21z"></path>
                <path
                  fill="#FF8A65"
                  d="M27.5,35.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S28,38.3,28,38v-2C28,35.7,27.8,35.5,27.5,35.5z"
                ></path>
              </svg>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className="block bg-white text-center p-4 rounded-lg shadow-md hover:bg-gray-200"
            >
              <img
                width="100"
                height="100"
                src="https://img.icons8.com/color/100/pencil--v1.png"
                alt="pencil--v1"
              />{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/record"
              className="block bg-white text-center p-4 rounded-lg shadow-md hover:bg-gray-200"
            >
              <img
                width="100"
                height="100"
                src="https://img.icons8.com/officel/100/read.png"
                alt="read"
              />{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
