import React, { useState } from "react";
import CustomLink from "../CustomLink/CustomLink";
import { BeakerIcon, MenuIcon } from "@heroicons/react/solid";
const Header = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className="py-6 flex relative flex-col lg:flex-row justify-between px-2 md:px-8 lg:px-28 bg-green-100 items-start lg:items-center">
      <h2 className="text-6xl font-bold text-purple-600">Sand Timer</h2>
      <nav
        className={`nav-items flex flex-col lg:flex-row mt-20 lg:mt-0 w-full lg:w-auto bg-green-100 absolute left-[-100%] z-10  lg:static duration-300 ${
          open ? "left-[0px]" : "left-[-100%]"
        }  `}
      >
        <CustomLink
          onClick={() => setOpen(!open)}
          className="ml-4 text-xl mt-12 lg:mt-0 hover:border-green-600"
          to="/"
        >
          Home
        </CustomLink>
        <CustomLink
          onClick={() => setOpen(!open)}
          className="ml-4 text-xl mt-12 lg:mt-0"
          to="/dashboard"
        >
          Dashboard
        </CustomLink>
        <CustomLink
          onClick={() => setOpen(!open)}
          className="ml-4 text-xl mt-12 lg:mt-0"
          to="/blogs"
        >
          Blogs
        </CustomLink>
        <CustomLink
          onClick={() => setOpen(!open)}
          className="ml-4 text-xl mt-12 lg:mt-0"
          to="/about"
        >
          About
        </CustomLink>
        <CustomLink
          onClick={() => setOpen(!open)}
          className="ml-4 text-xl mt-12 lg:mt-0"
          to="/reviews"
        >
          Reviews
        </CustomLink>
      </nav>
      <MenuIcon
        onClick={() => setOpen(!open)}
        className=" h-8 w-8 md:h-12 md:w-12 text-red-500 absolute top-12 cursor-pointer right-8 block lg:hidden"
      />
    </div>
  );
};

export default Header;
