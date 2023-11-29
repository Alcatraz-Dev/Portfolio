"use client";
import Image from "next/image";

import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer border z-10 border-t-[#828282] border-l-transparent border-r-transparent "
    >
      <div className="container p-12 flex justify-between space-x-10">
        <Link
          to={"home"}
          offset={-100}
          smooth={true}
          duration={1000}
          spy={true}
          className="cursor-pointer z-10"
        >
          <Image
            src={"/LogoImage.png"}
            width={50}
            height={50}
            alt="Logo"
            className=" mt-10 md:mt-5 lg:mt-5  cursor-pointer hover:scale-105 duration-300 transition-transform ease-in-out"
          />
        </Link>
        <p className="text-[#afafaf] mt-7">
          {" "}
          ©️ Alcatraz Dev | {new Date().getFullYear()} All rights reserved.{" "}
          <a
            href={"/PrivacyPolicy"}
            className="text-[#afafaf] mt-7 text-sm underline hover:scale-105 ease-in duration-300 "
          >
            {" "}
            Privacy Policy.
          </a>{" "}
          <a
            href={"/Terms&Conditions"}
            className="  text-[#afafaf] mt-7 text-sm underline hover:scale-105 ease-in duration-300   "
          >
            {" "}
            Terms & Conditions.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
