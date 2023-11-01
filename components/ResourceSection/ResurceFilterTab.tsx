"use client";
import React,{useState} from "react";

const links = ["All", "Next 13", "Frontend", "Backend", "FullStack","Other"];
function FilterTab() {

  const [active, setActive] = useState('');
  const handelFilter = (link:string)=>{
    setActive(link)
  }
  
  return (
    <div className="max-w-3xl mx-auto px-8 py-6 sm:px-0">
      <div className="sm:w-7/12 sm:mx-auto">
        <div
          role="tablist"
          aria-label="tabs"
          className="relative w-auto mx-auto h-auto grid grid-cols-3 items-center px-[3px] rounded-full backdrop-blur-xl  bg-white/40 dark:bg-zinc-700/40 overflow-hidden shadow-2xl shadow-900/20 transition "
        >
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handelFilter(link)}
              role="tab"
              aria-selected="true"
              aria-controls="All"
              id="All" 
              tabIndex={0}
              className={` ${active === link ? 'bg-purple-400 ': ''} relative block h-10 px-6 tab rounded-full `}
            >
              <span className="text-zinc-700 dark:text-zinc-300 capitalize">{link}</span>
            </button>
          ))}

        </div>
      </div>
    </div>
  );
}

export default FilterTab;
