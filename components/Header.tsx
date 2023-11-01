"use client"

import { SocialIcons } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import LogoImage from "../public/LogoImage.png";
import ClientSideRoute from "./ClientSideRoute";
import ThemeToggle from "./ThemeToggle/ThemeToggle";
import { useTheme } from 'next-themes'

type Props = {
  socialIcons: SocialIcons[];
};

function Header({ socialIcons }: Props) {
  return (
    <header
      className=" flex items-center justify-between z-20 bg-white 
  text-zinc-800 dark:text-white dark:bg-zinc-900
  px-5 py-3 shadow-lg h-[80px] sticky top-0 "
    >
      <Link
        href={"/"}
        className="font-light text-lg tracking-widest flex items-center space-x-1"
      >
        <Image
          src={LogoImage}
          alt={"Logo"}
          width={50}
          height={50}
          className="hover:scale-105 duration-300 transition-transform ease-in-out"
        />
      </Link>
      <div className="hidden space-x-5 sm:flex sm:items-center mx-4">
        <a
          href="#home"
          className="text-md font-bold  hover:text-[#99e000] hover:scale-105 duration-300 transition-transform ease-in-out"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-md font-bold hover:text-[#99e000] hover:scale-105 duration-300 transition-transform ease-in-out"
        >
          About
        </a>
        <a
          href="#technologies"
          className="text-md font-bold hover:text-[#99e000] hover:scale-105 duration-300 transition-transform ease-in-out"
        >
          Technologies
        </a>

        <a
          href="#videos"
          className="text-md font-bold hover:text-[#99e000] hover:scale-105 duration-300 transition-transform ease-in-out"
        >
          Videos
        </a>

        <a
          href="#projects"
          className="text-md font-bold hover:text-[#99e000] hover:scale-105 duration-300 transition-transform ease-in-out"
        >
          Projects
        </a>
        <a
          href="#blog"
          className="text-md font-bold hover:text-[#99e000] hover:scale-105 duration-300 transition-transform ease-in-out"
        >
          Blog
        </a>
        <a
          href="#community"
          className="text-md font-bold hover:text-[#99e000] hover:scale-105 duration-300 transition-transform ease-in-out"
        >
          Community
        </a>
        <a
          href="#assets"
          className="text-md font-bold hover:text-[#99e000] hover:scale-105 duration-300 transition-transform ease-in-out"
        >
          Assets
        </a>
        <a
          href="#contact"
          className="text-md font-bold hover:text-[#99e000] hover:scale-105 duration-300 transition-transform ease-in-out"
        >
          Contact
        </a>
      </div>
      <div className="flex items-center space-x-2">
        {socialIcons?.map((icon) => (
          <SocialIcon
            key={icon._id}
            className="hover:scale-110 duration-300 transition-transform ease-in-out"
            url={icon.url}
            bgColor={`${icon.bgcolor}`}
            fgColor={`${icon.fgcolor}`}
            style={{ width: 20, height: 20 }}
            target={"_blank"}
          />
        ))}
        <ThemeToggle useTheme={useTheme} hideOnSmallScreens />
      </div>
    </header>
  );
}

export default Header;
