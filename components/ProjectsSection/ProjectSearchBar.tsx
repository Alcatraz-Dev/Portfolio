"use client";


import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';  
import { formUrlQuery } from '../../utils';
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";


function SearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [search, setSearch] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = '';

      if(search) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'query',
          value: search
        })
      } else {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ['query']
        })
      }
      
      router.push(newUrl, {});
    }, 300)
  
    return () => clearTimeout(delayDebounceFn)
  }, [search])
  return (
    <div className=" flex justify-center items-center mt-5">
      <div className="relative flex  flex-col justify-center overflow-hidden p-6 sm:py-12">
        <div className="relative rounded-2xl  backdrop-blur-xl  bg-white/40 dark:bg-zinc-700/40  px-6 pt-10 pb-8 shadow-lg ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:px-10 ">
          <div className="mx-auto max-w-md">
            <form action="" className="relative mx-auto w-max">
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-orange-300 focus:pl-16 focus:pr-4"
              />
              <MagnifyingGlassIcon className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-orange-300 peer-focus:stroke-orange-500" />
            </form>{" "}
          </div>
          {/* <ProjectFilterTab/> */}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
