"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useRef, useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, toogle }: any) => {
  toogle = ThemeToggle;

  return (
    <div className="mb-10 mt-0 flex justify-center place-items-center">
      <ul className="flex flex-col  justify-center items-center md:space-y-3">
        <div className="pr-5 md:pl-7">
          {" "}
          <ThemeToggle useTheme={useTheme} />
        </div>

        {links.map(
          (
            link: { path: any; title: any },
            index: React.Key | null | undefined
          ) => (
            <li key={index}>
              <NavLink href={link.path} title={link.title} />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default MenuOverlay;
