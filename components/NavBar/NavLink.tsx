"use client";

import { Link } from "react-scroll";


const NavLink = ({ href, title }: any) => {
  return (
    <>
      <Link
        activeClass="active"
        to={href}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="  block py-2 font-semibold pl-3 pr-10 cursor-pointer text-zinc-600 text-bold sm:text-base md:text-base rounded md:p-0 hover:text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-600
        hover:scale-105 duration-150 transition-transform ease-in-out  "
      >
        {title} 
      </Link>
  
      
    </>
  );
};
export default NavLink;
