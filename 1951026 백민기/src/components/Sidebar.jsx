import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="bg-green-500 w-40 p-4 flex-initial  h-82">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#00acc1"
                  d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"
                ></path>
                <path
                  fill="#eee"
                  d="M40,24c0,8.838-7.162,16-16,16S8,32.838,8,24S15.163,8,24,8S40,15.163,40,24z"
                ></path>
                <path d="M23 11H25V24H23z"></path>
                <path
                  d="M26.082 22.654H28.419V31.846H26.082z"
                  transform="rotate(-45.001 27.25 27.25)"
                ></path>
                <path d="M27,24c0,1.657-1.344,3-3,3c-1.657,0-3-1.343-3-3s1.343-3,3-3C25.656,21,27,22.343,27,24"></path>
                <path
                  fill="#00acc1"
                  d="M25,24c0,0.551-0.448,1-1,1s-1-0.449-1-1c0-0.553,0.448-1,1-1S25,23.447,25,24"
                ></path>
              </svg>{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/record"
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
                <path
                  fill="#3F51B5"
                  d="M12 8A3 3 0 1 0 12 14 3 3 0 1 0 12 8zM21 7A4 4 0 1 0 21 15 4 4 0 1 0 21 7zM32.5 6A5.5 5.5 0 1 0 32.5 17 5.5 5.5 0 1 0 32.5 6zM41 42V28.5c0-4.694-3.806-8.5-8.5-8.5S24 23.806 24 28.5V42H41z"
                ></path>
                <path
                  fill="#3F51B5"
                  d="M27,36V23.5c0-3.037-2.462-5.5-5.5-5.5S16,20.463,16,23.5V36H27z"
                ></path>
                <path
                  fill="#3F51B5"
                  d="M17,31v-9c0-2.762-2.239-5-5-5s-5,2.238-5,5v9H17z"
                ></path>
              </svg>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/achievements"
              className="block bg-white text-center p-4 rounded-lg shadow-md hover:bg-gray-200"
            >
              설정
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
