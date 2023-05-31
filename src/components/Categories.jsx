import React from "react";
import { NavLink } from "react-router-dom";
import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiNoodles } from "react-icons/gi";

export default function Categories() {
  return (
    <div className="w-full flex gap-[2rem] justify-center overflow-hidden overflow-x-auto no-scrollbar">
      <NavLink
        className="flex flex-col justify-center items-center gap-3 rounded-full no-underline bg-gradient-to-tr from-gray-900 to-gray-800 w-[6rem] h-[6rem] cursor-pointer transform scale-80"
        to={`/diet/vegeterian`}
      >
        <FaPizzaSlice className="text-TEXT_WHITE text-lg" />
        <h4 className="text-TEXT_WHITE text-xs">vegeterian</h4>
      </NavLink>
      <NavLink
        className="flex flex-col justify-center items-center gap-3 rounded-full no-underline bg-gradient-to-tr from-gray-900 to-gray-800 w-[6rem] h-[6rem] cursor-pointer transform scale-80"
        to={`/diet/vegan`}
      >
        <FaHamburger className="text-TEXT_WHITE text-lg" />
        <h4 className="text-TEXT_WHITE text-xs">vegan</h4>
      </NavLink>
      <NavLink
        className="flex flex-col justify-center items-center gap-3 rounded-full no-underline bg-gradient-to-tr from-gray-900 to-gray-800 w-[6rem] h-[6rem] cursor-pointer transform scale-80"
        to={`/diet/glutenfree`}
      >
        <GiNoodles className="text-TEXT_WHITE text-lg" />
        <h4 className="text-TEXT_WHITE text-xs">Gluten-free</h4>
      </NavLink>
    </div>
  );
}
