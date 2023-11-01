"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useTheme } from "next-themes";

const navLinks = [
  {
    title: "Home",
    path: "home",
  },
  {
    title: "About",
    path: "about",
  },
  {
    title: "Projects",
    path: "projects",
  },
  {
    title: "Resource",
    path: "resource",
  },
  {
    title: "Contact",
    path: "contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="fixed mx-auto border backdrop-blur-md  dark:border-[#33353F]/30 top-0 left-0 right-0 z-20 dark:bg-[#121212]/30 bg-opacity-100">
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2 p-5">
          <Link href={"/"}>
            <Image
              src={"/LogoImage.png"}
              width={50}
              height={0}
              alt="Logo"
              className=" flex justify-start left-0 hover:scale-105 duration-300 transition-transform ease-in-out"
            />
          </Link>
          <div className="mobile-menu block lg:hidden xl:hidden text-lg font-bold ">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-zinc-700 dark:border-gray-500  hover:dark:text-white "
              >
                <Bars3Icon className="h-5 w-5 dark:border-gray-500  hover:text-lime-400" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border border-zinc-700 rounded dark:border-gray-500   hover:dark:text-white "
              >
                <XMarkIcon className="h-5 w-5 dark:border-gray-500  hover:text-red-400" />
              </button>
            )}
          </div>

          <div
            className="menu hidden lg:block xl:block md:w-auto sm:w-auto px-5"
            id="navbar"
          >
            <ul className="  flex justify-center p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container place-items-center">
          {navbarOpen ? (
            <MenuOverlay links={navLinks} toogle={ThemeToggle} />
          ) : (
            <div className="  flex justify-center space-x-3 ">
              <ThemeToggle useTheme={useTheme} hideOnSmallScreens />
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
