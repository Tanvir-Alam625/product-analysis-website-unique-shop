import React, { useState } from "react";
import CustomLink from "../CustomLink/CustomLink";
import { MenuIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-4 flex relative flex-col lg:flex-row justify-between px-2 md:px-8 lg:px-28 bg-purple-100 items-start lg:items-center">
      <Link to="/">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-purple-600">
          Sand Timer
        </h2>
      </Link>
      <nav
        className={`nav-items flex flex-col lg:flex-row mt-12 pb-4 lg:pb-0 lg:mt-0 w-full lg:w-auto bg-purple-100 absolute left-[-100%] z-10  lg:static duration-300 ${
          open ? "left-[0px]" : "left-[-100%]"
        }  `}
      >
        <CustomLink
          onClick={() => setOpen(!open)}
          className="ml-4 text-xl mt-12 lg:mt-0 "
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
        className=" h-8 w-8 md:h-12 md:w-12 text-red-500 absolute top-4 cursor-pointer right-2 block lg:hidden"
      />
    </div>
  );
};

export default Header;
