import React, { useState } from "react";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`${
        open ? "w-80" : "w-20"
      } p-5 pt-8 duration-300 flex flex-col text-white h-screen bg-black relative`}
    >
      <button
        className={`w-8 h-8 text-white cursor-pointer ${
          open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      >
        <ArrowLeftCircleIcon />
      </button>
      <nav className="pt-6 space-y-3">
        <NavLink
          to="result" 
          className="text-gray-300 text-sm items-center space-x-2 cursor-pointer p-2 hover:bg-gray-200 hover:text-black rounded-md"
        >
          <i className="fa-solid fa-square-poll-vertical" />
          <span className={`${!open && "hidden"}`}>Result</span>
        </NavLink>
        <NavLink
          to="predict"
          className="text-gray-300 text-sm flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-200 hover:text-black rounded-md"
        >
          <i className="fa-brands fa-dropbox" />
          <span className={`${!open && "hidden"}`}>Prediction</span>
        </NavLink>

      </nav>
    </div>
  );
};

export default Sidebar;
