"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useRef, useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, toogle }: any) => {
  toogle = ThemeToggle;

  return (
    <div>
      <div className="flex flex-col py-4 items-center ">
        <ThemeToggle useTheme={useTheme} />
      </div>
      <ul className="flex flex-col py-4 items-center md:space-y-3">
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
