import React, { useState } from "react";
import logoImg from "../assets/logo.png";
import bellIcon from "../assets/icons/Vector.png";
import searchIcon from "../assets/icons/Vector (1).png";
import avatar from "../assets/icons/avatar.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [openNav, setOpenNav] = useState(true);
  return (
    <nav className="bg-transparent py-2">
      <div className="mx-auto">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={()=>{setOpenNav(!openNav)}}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="block h-8 w-auto lg:hidden"
                src={logoImg}
                alt="Your Company"
              />
              <img
                className="hidden h-8 w-auto lg:block"
                src={logoImg}
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-24 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className=" text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="text-[#870BE5] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Explore
                </a>
                <Link
                  to='/nft-profile'
                  className="text-[#870BE5] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Nft-profile
                </Link>
                <a
                  href="#"
                  className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Settings
                </a>
              </div>
            </div>
          </div>
          <div className="space-x-2 absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className=" px-3 hidden md:flex items-center mx-auto  bg-gradient-to-b from-[#14142F] to-[#232757] h-10 rounded-md">
              <img src={searchIcon} />

              <input
                className="text-white w-full bg-transparent h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search by creator or item..."
              />
            </div>
            <button className="h-9 w-9 bg-gradient-to-b from-[#14142F] to-[#232757] rounded-lg border border-gray-500">
              <img src={bellIcon} className="mx-auto opacity-80" />
            </button>
            <button className="h-9 w-9 bg-gradient-to-b from-[#14142F] to-[#232757] rounded-lg border border-gray-500">
              <img src={avatar} className="mx-auto h-7 w-7" />
            </button>
          </div>
        </div>
      </div>

      <div className={openNav ? "sm:hidden block" : "hidden"} id="mobile-menu">
        <div className="space-y-1 pt-2 pb-3">
          <a
            href="#"
            className="bg-[#14142F] text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
          >
           Home
          </a>

          <a
            href="#"
            className="text-gray-300  hover:text-white hover:bg-[#14142F] block px-3 py-2 rounded-md text-base font-medium"
          >
           Explore
          </a>

          <Link
            to='/nft-profile'
            className="text-gray-300  hover:text-white hover:bg-[#14142F] block px-3 py-2 rounded-md text-base font-medium"
          >
           Nft-Profile
          </Link>

          <a
            href="#"
            className="text-gray-300  hover:text-white hover:bg-[#14142F] block px-3 py-2 rounded-md text-base font-medium"
          >
           Setting
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
