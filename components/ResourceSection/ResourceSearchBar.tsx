"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";

function SearchBar() {
  return (
    <div className=" flex justify-center items-center mt-5">
      <div className="relative flex  flex-col justify-center overflow-hidden p-6 sm:py-12">
        <div className="relative rounded-2xl  backdrop-blur-xl  bg-white/40 dark:bg-zinc-700/40  px-6 pt-10 pb-8 shadow-lg ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:px-10 ">
          <div className="mx-auto max-w-md">
            <form action="" className="relative mx-auto w-max">
              <input
                type="search"
                className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-purple-300 focus:pl-16 focus:pr-4"
              />
              <MagnifyingGlassIcon className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-purple-300 peer-focus:stroke-purple-500" />
            </form>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
